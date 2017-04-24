var mytrack = document.getElementById('mytrack');
var play = document.getElementById('play');
function playOrPause(){
	if (!mytrack.paused && !mytrack.ended){
		mytrack.pause();
		play.style.backgroundImage = 'url(../img/boton-de-reproduccion.png)';
	} else{
		mytrack.play();
		play.style.backgroundImage = 'url(../img/pausa.png)';
	}
}