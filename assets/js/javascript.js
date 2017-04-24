var mytrack = document.getElementById('mytrack');
var play = document.getElementById('play');
var mute = document.getElementById('mute');

var duration = document.getElementById('fullDuration');
var currentTime = document.getElementById('currentTime');

var minutes = parseInt(mytrack.duration/60);
var seconds = parseInt(mytrack.duration%60);
var barSize = 640;
var bar = document.getElementById('defaultBar');
var progressBar = document.getElementById('barraprogreso')
duration.innerHTML = minutes + ':' + seconds;

function playOrPause(){
	if (!mytrack.paused && !mytrack.ended){
		mytrack.pause();
		play.style.backgroundImage = 'url(../img/boton-de-reproduccion.png)';
		window.clearInterval(updateTime);
	} else{
		mytrack.play();
		play.style.backgroundImage = 'url(../img/pausa.png)';
		var updateTime = setInterval(update,500);
	}
}
function muteOrUnmute(){
	if (mytrack.muted == true){
		mytrack.muted = false;
		mute.style.backgroundImage = 'url(../img/altavoz.png)';
	} else{
		mytrack.muted = true;
		mute.style.backgroundImage = 'url(../img/altavoz-2.png)';
	}
}

function update(){
	if (!mytrack.ended){
		var playedMinutes = parseInt(mytrack.currentTime/60);
		var playedSeconds = parseInt(mytrack.currentTime%60);
		currentTime.innerHTML = playedMinutes + ':' + playedSeconds;

		var size = parseInt(mytrack.currentTime*barSize/mytrack.duration);
		progressBar.style.width = size + "px";
	}else{
		currentTime.innerHTML = "00:00";
		play.style.backgroundImage = 'url(../img/boton-de-reproduccion.png)';
		progressBar.style.width = "0px";
		window.clearInterval(updateTime);
	}
}