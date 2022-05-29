<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ config('app.name', 'Laravel') }}</title>
    <link href="{{mix('/css/app.css')}}" rel="stylesheet">
</head>
<body>
<noscript>
    {{ config('app.name', 'Laravel') }} не работает без поддержки JavaScript. Включите его и перезагрузите страницу
</noscript>
<div id="app"></div>
<div
    class="position-fixed top-0 end-0 p-3" id="toast-container"
    style="z-index: 9999;display: none"
>
    <div class="toast fade show" id="toast" role="alert">
        <div class="toast-header p-3" id="toast-header">
            <strong class="me-auto" id="toast-title"></strong>
        </div>
        <div class="toast-body p-3" id="toast-text"></div>
    </div>
</div>
<div class="loader-content hidden" id="spinner">
    <div class="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
</div>
<script src="{{mix('/js/app.js')}}"></script>
</body>
</html>
