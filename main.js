//Clock
var min = 0;
var sec = 0;

function second(){
	if(sec==59){sec=0;min=min+1}
	else{sec=sec+1;}
}

function time(){
	document.getElementById('time').innerHTML = min + '  :  ' + (sec<10?('0'+sec):sec);
	second();
	setTimeout(time,1000);
}
time();


// Quote

let quote_a = ['Thành công sẽ đến với những người bận rộn tìm nó', 
'Học, học nữa, học mãi',
'Nếu phiên bản đầu tiên của bạn không thành công, hãy đặt tên nó là phiên bản 1.0',
'Lúc thấy việc không hỏi, khi thi thố mới hối hận',
'Nhà trường chỉ cho chúng ta chiếc chìa khóa tri thức, học trong cuộc sống là việc cả đời',
'Giáo dục là vũ khí mạnh nhất ta có thể sử dụng để thay đổi cả thế giới',
"Những gì chúng ta biết ngày hôm nay sẽ lỗi thời vào ngày hôm sau. Nếu chúng ta ngừng học thì chúng ta sẽ ngừng phát triển",
"Đời sống có hạn mà sự học thì vô hạn",
"Muốn bớt cực nhọc, bây giờ phải học",
"Kiến thức chỉ có được qua tư duy của con người",
"Đi một ngày đàng, học một sàng khôn",
"Đừng xấu hổ khi không biết, chỉ xấu hổ khi không học"
];

var elequote = document.getElementById("quote");
function quote(){
	elequote.classList.remove("animate");
	let i = Math.floor(Math.random() * quote_a.length);
	void elequote.offsetWidth;
	elequote.classList.add("animate");
	elequote.innerHTML = quote_a[i];
	setTimeout(quote, 10000);
}

quote();

//on/off
let i=0;

function onSetting(){
	document.getElementById("setting").style.display = "block";
}
function offSetting(){
	document.getElementById("setting").style.display = "none";
	i=0;
}
function onOffSetting(){
	if (i==0) {onSetting();i=1}
	else{offSetting();i=0}
}

//mode
function adv(){
	document.getElementById('dota').style.backgroundColor= "#3498db";
	document.getElementById('dotc').style.backgroundColor= "#95a5a6";
	document.getElementById('pointer').style.pointerEvents = "none";
	soundMusic(musicpeac,soundlib);

}

function cus(){
	document.getElementById('dota').style.backgroundColor= "#95a5a6";
	document.getElementById('dotc').style.backgroundColor= "#3498db";
	document.getElementById('pointer').style.pointerEvents = "auto";
	beach();
}

//on off feature
let arr = [0,0,0];
let arr1 = ['time','','quote']

function onoff(){
	if(b!=1){
		document.getElementById(arr1[b]).style.visibility = arr[b]==1?'hidden':'visible';
	}
}

let b=0;
function changeColor(a,x){
	b=x;
	document.getElementById(a).style.backgroundColor = arr[b]==0?"#95a5a6":"#3498db";
	arr[b]=arr[b]==1?0:1;
	onoff();
}

if(arr[1]==0){
	let timer = setInterval("focus()", 1000);
}
//focus

var waste = 0;

function focus() {
  var x = document.getElementById("alert");
  if (!document.hasFocus()) {
  		if(arr[1]==0){
  			x.style.display = "block";
  			waste++;
  		}
  }
}

function off(){
	document.getElementById('alert').style.display = "none";
}

document.getElementById("musicp").volume = 1;
document.getElementById("soundp").volume = 0.2;
function sliderChangeMusic(val) {
	document.getElementById("musicp").volume = val / 100;
}

function sliderChangeSound(val) {
	document.getElementById("soundp").volume = val / 100;
}


//selector
function onSelector(){
	document.getElementById("selector").style.display = "block";
}
function offSelector(){
	document.getElementById("selector").style.display = "none";
}

soundlib=["Sound/Street.mp3", "Sound/Carnival.mp3", "Sound/Coffee Shop.mp3", "Sound/Traffic.mp3", "Sound/Trainstation.mp3","Sound/Rain.mp3", "Sound/Ocean Waves.mp3.mp3"];

musicpeac=["Music/Peaceful/IMY.mp3","Music/Peaceful/Letters.mp3","Music/Peaceful/Lightning_Bugs.mp3","Music/Peaceful/MoonlightSonata.mp3",
"Music/Peaceful/Simple_Sonata.mp3","Music/Peaceful/Sunday.mp3","Music/Peaceful/Thought.mp3","Music/Peaceful/Son.mp3","Music/Peaceful/Touching.mp3",  ];

musichapp=["Music/Happy/Bluesy.mp3", "Music/Happy/Bossa.mp3", "Music/Happy/Cafe.mp3",
"Music/Happy/Lazy.mp3", "Music/Happy/Talkies.mp3", "Music/Happy/Truck.mp3", "Music/Happy/Room42.mp3", "Music/Happy/Tango.mp3"];
let rand = 0;
function changeMusic(lib){
	rand = Math.floor(Math.random()*lib.length);
	return(lib[rand]);
	console.log(lib[rand]);
}

var mus = document.getElementById("musicp");
var sou = document.getElementById("soundp");

function musicsound(lib,path){
	mus.load();
	var source = document.getElementById('musicsource');
  	source.src = changeMusic(lib);
  	mus.play();
	mus.onended = function() {
	source.src = changeMusic(lib);
  	mus.load(); 
  	mus.play(); 
	};
	document.getElementById('soundsource').src = path;
	sou.load();
	sou.play();
}

function soundMusic(lib1, lib2){
	mus.load();
	var source = document.getElementById('musicsource');
  	source.src = changeMusic(lib1);
  	mus.play();
	mus.onended = function() {
  	mus.load(); 
  	mus.play(); 
	}

	sou.load();
	var source = document.getElementById('soundsource');
  	source.src = changeMusic(lib2);
  	sou.play();
	sou.onended = function() {
  	sou.load(); 
  	sou.play(); 
	}
}

function beach(){
	musicsound(musicpeac, "Sound/Ocean Waves.mp3")
}

function afternoon(){
	musicsound(musicpeac, "Sound/Afternoon.mp3");
}

function forest(){
	musicsound(musicpeac, "Sound/Forest 2.mp3");
}

function rain(){
	musicsound(musicpeac, "Sound/Rain.mp3")
}

function highway(){
	musicsound(musicpeac, "Sound/Highway.mp3")
}

function fire(){
	musicsound(musicpeac, "Sound/Fire.mp3");
}

function coffee(){
	musicsound(musichapp, "Sound/Coffee Shop.mp3")
}

function hawaii(){
	musicsound(musichapp, "Sound/Ocean Waves.mp3");
}

function street(){
	musicsound(musichapp, "Sound/Street.mp3");
}

function carnival(){
	musicsound(musichapp, "Sound/Carnival.mp3");
}

function traffic(){
	musicsound(musichapp, "Sound/Traffic.mp3");
}

function trainst(){
	musicsound(musichapp, "Sound/Trainstation.mp3");
};

beach();

function backgroundMoon(){
	document.body.style.backgroundImage = "url('Anh/bgmoon.png')";
	document.getElementById('pointer').style.top = "60px";
	document.getElementById("time").style.marginTop = "20px";
}

function backgroundStar(){
	document.body.style.backgroundImage = "url('Anh/back.png')";
	document.getElementById('pointer').style.top = "60px";
	document.getElementById("time").style.marginTop = "20px";
}

function backgroundEarth(){
	document.body.style.backgroundImage = "url('Anh/Home.png')";
	document.getElementById('pointer').style.top = "80%";
	document.getElementById("time").style.marginTop = "200px";
}
starlib = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
function result(){
	var score = 10 - Math.round(waste / (min*60+sec)*10);
	document.getElementById("result").style.display = 'block';
	document.getElementById("totaltime").innerHTML = min+" phút "+sec+" giây ";
	document.getElementById("totalwaste").innerHTML = Math.floor(waste / 60)+" phút "+ Math.floor(waste % 60)+" giây";
	document.getElementById("score").innerHTML = score;
	
	for (var i = 0; i < score-1; i++) {
		document.getElementById(starlib[i]).className = "full";
	}

	for(var i=score;i<11;i++){
		document.getElementById(starlib[i]).className = "empty";
	}
}


function offResult(){
	document.getElementById("result").style.display = "none";
}