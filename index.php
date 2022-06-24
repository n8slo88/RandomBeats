<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Random Beat?</title>
</head>
<body>
<div class="headline">
    <h2>RANDOM DRUM GENERATOR</h2>
</div>


    <div class="grid">
        <div class="square" data-key="33" id="1" > <h3>KICK</h3></div>
        <div class="square" data-key="44"  id="2" ><h3>SNARE</h3></div>
        <div class="square" data-key="55" id="3" ><h3>RIDE</h3></div>
    </div>
   <h1>SPEED: <span id="output"> </span>ms</h1>
    <div class="slidecontainer">
        <input type="range" min="10" max="5000" value="2500" class="slider" id="myRange">
    </div>

    <div>
        <button id="start">START</button> <button id="stop">STOP</button>
    </div>
    
    <audio data-key="33" src="sounds/Bass-Drum-1.wav"></audio>
    <audio data-key="44" src="sounds/DrumMRoomSnare_05_705.wav"></audio>
    <audio data-key="55" src="sounds/TD6K_Ride_036_73_SP.wav"></audio>


    <script src="app.js"></script>
</body>
</html>
