<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Casher System</title>

    <style>
        body{
            /* background: rgb(2,0,36); */
            background-image: linear-gradient(0deg, rgba(2,0,36,1) 17%, rgba(3,3,31,1) 32%, rgba(158,8,97,1) 73%);
            height: 100vh;
            display: flex;
            justify-content: center;
            /* align-items: center; */
            color: white;
            font-family: Arial, sans-serif;
        }
    </style>
</head>
@vite('resources/js/app.js')
<body>
    <div id="app">
        <layout-component></layout-component>
    </div>
</body>
</html>
