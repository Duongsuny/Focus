// clock
function time(){
	var now = new Date();
	var hour = now.getHours();
	var min = now.getMinutes();
	document.getElementById('time').innerHTML = hour + '  :  ' + (min<10 ? '0'+min:min);
	document.getElementById('time').textContent = hour + '  :  ' + (min<10 ? '0'+min:min);
	if(hour>=4 && hour<=6){document.getElementById('quote').innerHTML= "Thời gian thích hợp để học các môn lý thuyết"}
	if(hour>=7 && hour<=11){document.getElementById('quote').innerHTML= "Thời gian thích hợp để học các môn khoa học xã hội"}
	if(hour>=14 && hour<=17){document.getElementById('quote').innerHTML= "Thời gian thích hợp để học các môn khoa học tự nhiên"}
	if(hour>=20 && hour<=23){document.getElementById('quote').innerHTML= "Thời gian thích hợp để học các môn tính toán"}
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