<!DOCTYPE html>
<html lang="{{app()->getLocale()}}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>@yield('title')</title>
    <link rel="icon" href="{{ asset('images/favicon-32x32.png')}}" sizes='32x32'>
    <link rel="icon" href="{{ asset('images/favicon-128x128.png')}}" sizes='128x128'>
    <link rel="icon" href="{{ asset('images/favicon-180x180.png')}}" sizes='180x180'>
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet">

</head>

<body class="antialiased">

    <div id="app">
    <App environment="{{env('APP_ENV')}}"
        locale="{{app()->getLocale()}}"
        url="{{env('AMO_CRM_URL')}}"
        hook="{{env('AMO_CRM_HOOK')}}"
        />
    </div>

    {{-- HERE Maps API --}}
    <script src="https://js.api.here.com/v3/3.1/mapsjs-core.js" type="text/javascript" charset="utf-8"></script>
    <script src="https://js.api.here.com/v3/3.1/mapsjs-service.js" type="text/javascript" charset="utf-8"></script>

    {{-- VUE-CLI JS --}}
    <script src="{{ mix('js/app.js') }}" defer></script>

    @yield('yandex.metrika')
    @yield('gtag.js')
    @yield('pixel')

</body>

</html>