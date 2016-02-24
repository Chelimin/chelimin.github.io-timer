
var seconds = 0;
var timerId;
var active=true;


function updateTime(){
  seconds = seconds+1;
  var timer=document.getElementById('timer').innerHTML = "Time elapsed: " + seconds;
}

function startCount(){
  if (active){
  timerId = window.setInterval(updateTime,1000);
  active=false;
  }
}

var start = document.getElementById('start');
start.addEventListener('click', startCount);

function pauseCount(){
  clearInterval(timerId)
  active=true;
}

var pause = document.getElementById('pause');
pause.addEventListener('click', pauseCount);

function resetCount(){
  clearInterval(timerId);
  var timer=document.getElementById('timer').innerHTML = 0;
  active=true;
  seconds=0;
}

var reset = document.getElementById('reset');
reset.addEventListener('click',resetCount);
