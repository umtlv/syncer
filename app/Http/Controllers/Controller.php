<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Validation\ValidationException;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    /**
     * @param mixed $data
     * @param string $message
     * @param int|null $resultCode
     * @param int $code
     * @param string $contentType
     * @param bool $isUtf8
     * @return Response
     */
    protected function success(mixed $data = null, string $message = 'Успешно', ?int $resultCode = 0, int $code = 200, string $contentType = 'application/json;', bool $isUtf8 = true): Response
    {
        return $this->responseBuilder($message, $code, $data, $resultCode, $contentType, $isUtf8, true);
    }

    /**
     * @param string $message
     * @param int $code
     * @param int|null $resultCode
     * @param mixed $data
     * @param string $contentType
     * @param bool $isUtf8
     * @return Response
     */
    protected function fail(string $message = 'Ошибка', int $code = 400, ?int $resultCode = null, mixed $data = null, string $contentType = 'application/json;', bool $isUtf8 = true): Response
    {
        return $this->responseBuilder($message, $code, $data, $resultCode, $contentType, $isUtf8, false);
    }

    /**
     * @param ValidationException $exception
     * @return Response
     */
    protected function teapot(ValidationException $exception): Response
    {
        return $this->fail('Не все поля правильно заполнены.', 418, null, $exception->errors());
    }

    /**
     * @param string $message
     * @param int $code
     * @param mixed $data
     * @param int|null $resultCode
     * @param string $contentType
     * @param bool $isUtf8
     * @param bool $isSuccess
     * @return Response
     */
    protected function responseBuilder(string $message, int $code, mixed $data, ?int $resultCode, string $contentType, bool $isUtf8, bool $isSuccess): Response
    {
        $content = [
            'message' => $message,
            'success' => $isSuccess
        ];
        if (!empty($data)) $content['data'] = $data;
        if (!empty($resultCode)) $content['code'] = $resultCode;
        $response = new Response($content, $code, ['Content-Type' => $contentType]);
        if ($isUtf8) $response->setCharset('UTF-8');

        return $response;
    }
}
