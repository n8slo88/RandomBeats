const squares= document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const audio = document.querySelectorAll('audio')
const button = document.getElementById('start')
let slider= document.getElementById('myRange')
let speedDisplay = document.getElementById('output')
const stopbutton = document.getElementById('stop')


speedDisplay.innerHTML = slider.value
slider.oninput = ()=>{output.innerHTML=slider.value}


stopbutton.classList.add('button');
stopbutton.onmouseover = () =>{
   stopbutton.classList.remove('button');
   stopbutton.classList.add('hover')
}
stopbutton.onmouseout = ()=>{
   stopbutton.classList.remove('hover');
   stopbutton.classList.add('button')
}


button.classList.add('button');
button.onmouseover = ()=>{
   button.classList.remove('button');
   button.classList.add('hover');
}
button.onmouseout = ()=>{
   button.classList.remove('hover');
   button.classList.add('button')
}


function randomSquare() {
   const idNum= Math.floor(Math.random()  * 3)
   let randomAudio = audio[idNum];
   randomAudio.currentTime = 0;
   randomAudio.play();
   console.log(idNum, randomAudio)
   squares.forEach(square =>{
      square.classList.remove('mole');
   })
   squares[idNum].classList.add('mole')
}

function moveMole(){
   let timerId = null
   timerId = setInterval(randomSquare, slider.value)
}

button.addEventListener('click', (e)=>{
   moveMole()
});

const refreshPage =()=>{
   location.reload();
}

stopbutton.addEventListener('click', refreshPage)