<!-- filepath: e:\dalia\laravl_vue\vue-app\resources\views\dashboard\layout\dashApp.blade.php -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Dashboard</title>
    @vite('resources/js/app.js')
    <style>
        .dash {
            background-color: black;
            height: 100vh;
            color: white;
            font-family: Arial, sans-serif;
        }
    </style>
</head>
<body class="dash">
    <div id="app">
        <h1>Dashboard</h1>
        <dashapp-component></dashapp-component>
    </div>
</body>
</html>
