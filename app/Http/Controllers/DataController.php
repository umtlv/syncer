<?php

namespace App\Http\Controllers;

use App\Models\Data;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;

class DataController extends Controller
{
    public function get(Request $request): Response
    {
        $data = Data::query()
            ->when($request->has('active'), fn($query) => $query->whereNotNull('sync'))
            ->paginate(5);
        return $this->success($data);
    }

    public function item($id): Response
    {
        $item = Data::query()->find($id);
        if (empty($item)) return $this->fail('Запись не найдена');

        return $this->success($item);
    }

    public function audio($uuid): Response
    {
        $path = "audios/$uuid.mp3";
        if (Storage::exists($path))
            return new Response(Storage::get($path), 200, [
                'Content-Type' => 'audio/mpeg',
                'Content-Length' => Storage::size($path)
            ]);

        return $this->fail();
    }

    public function create(Request $request): Response
    {
        try {
            $this->validate($request, [
                'title' => 'required|string',
                'text' => 'required|string',
                'audio' => 'required|file'
            ]);
        } catch (ValidationException $e) {
            return $this->teapot($e);
        }

        $audio = $request->file('audio');
        if ($audio->getMimeType() !== 'audio/mpeg')
            return $this->fail("Формат файла неправильный");

        $uuid = Str::uuid();
        if (!Storage::exists('audios')) Storage::makeDirectory('audios');

        if (Storage::putFileAs('audios', $audio, $uuid . '.mp3')) {
            $new = new Data();
            $new->title = $request['title'];
            $new->file = $uuid;
            $new->text = $request['text'];
            if ($new->saveQuietly())
                return $this->success();
        }

        return $this->fail('Произошла ошибка при сохранении');
    }

    public function update(Request $request): Response
    {
        try {
            $this->validate($request, [
                'id' => 'required|numeric',
                'title' => 'required|string',
                'text' => 'required|string'
            ]);
        } catch (ValidationException $e) {
            return $this->teapot($e);
        }

        $item = Data::find($request['id']);
        if (empty($item)) $this->fail('Запись не найдена');

        $item->title = $request['title'];
        if ($item->text !== $request['text']) {
            $item->text = $request['text'];
            $item->sync = null;
        }
        if ($item->saveQuietly()) return $this->success();
        return $this->fail('Произошла ошибка при изменении');
    }

    public function sync(Request $request): Response
    {
        try {
            $this->validate($request, [
                'id' => 'required|numeric',
                'sync' => 'required|array'
            ]);
        } catch (ValidationException $e) {
            return $this->teapot($e);
        }

        $item = Data::find($request['id']);
        if (empty($item)) $this->fail('Запись не найдена');

        $item->sync = $request['sync'];
        if ($item->save()) return $this->success();
        return $this->fail('Произошла ошибка при изменении');
    }

    public function delete(Request $request): Response
    {
        try {
            $this->validate($request, [
                'id' => 'required|numeric',
            ]);
        } catch (ValidationException $e) {
            return $this->teapot($e);
        }

        $item = Data::find($request['id']);
        if (empty($item)) $this->fail('Запись не найдена');

        if ($item->delete()) {
            Storage::delete("audios/$item->file.mp3");
            return $this->success();
        }

        return $this->fail("Произошла ошибка при удалении");
    }
}
