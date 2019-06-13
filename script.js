// clock
function time(){
	var now = new Date();
	var hour = now.getHours();
	var min = now.getMinutes();
	document.getElementById('time').innerHTML = hour + '  :  ' + (min<10 ? '0'+min:min);
	document.getElementById('time').textContent = hour + '  :  ' + (min<10 ? '0'+min:min);
	if(hour>=4 && hour<=6){document.getElementById('quote').innerHTML= "This is a good time to learn by heart "}
	if(hour>=7 && hour<=11){document.getElementById('quote').innerHTML= "This is a good time to learn a new language"}
	if(hour>=14 && hour<=17){document.getElementById('quote').innerHTML= "This is a good time to learn Physics, Math, Chemistry"}
	if(hour>=20 && hour<=23){document.getElementById('quote').innerHTML= "This is a good time for leaning something that require you to calculate"}
	setTimeout(time, 60000);
}
time();

// Credit button

function onb() {
  document.getElementById("box").style.display = "block";
}
function offb() {
  document.getElementById("box").style.display = "none";
}

function onc() {
  document.getElementById("clock").style.display = "block";
}

function offc() {
  document.getElementById("clock").style.display = "none";
}