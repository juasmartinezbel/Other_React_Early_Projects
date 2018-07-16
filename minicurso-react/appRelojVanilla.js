/*
*
* Relok Vanilla
*
*/

const app = document.getElementById ('distReloj');

function reloj (){
	app.textContent = new Date().toLocaleTimeString();
}
					
//Cambiar cada segundo (1000)
setInterval(reloj,1000);
