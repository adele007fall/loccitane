/* 

JS=
대상.명령(); // method
대상.명령 // 속성
명령(); // 함수
명령; // 변수


JS=
var canvas1=documnt.getElementById('canvas1);
JQuery=
var canvas1 = $('#canvas1');

JS=
canvas1.width=600;//속성
JQuery=
canvas1.width(600);

JS=
canvas1.width;
JQuery=
canvas1.width();


*/

//rect
var canvas1 = document.getElementById('canvas1');
var ctx1 = canvas1.getContext('2d');

ctx1.fillStyle = '#5d8e6f';
ctx1.fillRect(150,150,300,200);

//line
var canvas2 = document.getElementById('canvas2');
var ctx2 = canvas2.getContext('2d');

ctx2.moveTo(0,0); ctx2.lineTo(600,400);
ctx2.strokeStyle = '#99ed9d';
ctx2.lineWidth = 10;
ctx2.stroke();

//
var canvas3 = document.getElementById('canvas3');
var ctx3 = canvas3.getContext('2d');

ctx3.beginPath();
ctx3.moveTo(50,50);
ctx3.lineTo(250,50);
ctx3.lineTo(50,350);
ctx3.lineWidth= '5';
ctx3.fillStyle = '#22d2f2';
ctx3.fill();
ctx3.strokeStyle = '#5de85f';
ctx3.stroke();

ctx3.beginPath();
ctx3.moveTo(550,50);
ctx3.lineTo(550,350);
ctx3.lineTo(350,350);
ctx3.fillStyle = '#22d2f2';
ctx3.fill();
ctx3.closePath();
ctx3.stroke();

//
var canvas4 = document.getElementById('canvas4');
var ctx4 = canvas4.getContext('2d');

ctx4.beginPath();
ctx4.arc(300,200,100,0,1.5*Math.PI);
ctx4.fillStyle= '#5d5def';
ctx4.fill();
ctx4.lineWidth= 5;
ctx4.strokeStyle = '#988e6f';
ctx4.stroke();

//
var canvas5 = document.getElementById('canvas5');
var ctx5 = canvas5.getContext('2d');

ctx5.beginPath();
ctx5.arc(75,75,50,0,Math.PI*2);
ctx5.moveTo(110,75);
ctx5.fillStyle = 'yellow';
ctx5.fill();
ctx5.closePath();
ctx5.beginPath();
ctx5.arc(75,75,35,0,Math.PI);
ctx5.moveTo(65,65);
ctx5.fillStyle = 'red';
ctx5.fill();
ctx5.closePath();
ctx5.beginPath();
ctx5.arc(60,65,5,0,Math.PI*2);
ctx5.moveTo(95,65);
ctx5.arc(90,65,5,0,Math.PI*2);
ctx5.fillStyle = 'black';
ctx5.fill();
ctx5.closePath();
ctx5.lineWidth = 3;
ctx5.stroke();

//얼굴그리기 크게




var canvas6 = document.getElementById('canvas6');
var ctx6 = canvas6.getContext('2d');


ctx6.beginPath();
ctx6.arc(300,200,150,0,Math.PI*2);
ctx6.fillStyle = 'white';
ctx6.fill();
ctx6.closePath();
ctx6.moveTo(265,155);
ctx6.arc(245,155,20,0,Math.PI*2);
ctx6.moveTo(365,155);
ctx6.arc(345,155,20,0,Math.PI*2);
ctx6.moveTo(330,270);
ctx6.arc(300,270,30,0,1*Math.PI);

ctx6.stroke();

// g그라디언ㅌ

var canvas7 = document.getElementById('canvas7');
var ctx7 = canvas7.getContext('2d');
var gra1 = ctx7.createLinearGradient(0,0,600,400);
gra1.addColorStop(0.2,'red');
gra1.addColorStop(0.5,'white');
gra1.addColorStop(0.8,'blue');

ctx7.fillStyle = gra1;
ctx7.fillRect(150,100,300,200);
ctx7.strokeStyle = '#99dddd';
ctx7.strokeRect(150,100,300,200);

ctx7.clearRect(160,110,280,180);
ctx7.strokeStyle = '#5552ff';
ctx7.strokeRect(160,110,280,180);

//gra2

var canvas8 = document.getElementById('canvas8');
var ctx8 = canvas8.getContext('2d');

ctx8.strokeStyle =gra1;
ctx8.lineWidth = 30;
ctx8.strokeRect(150,100,300,200);

//gra3 : raidal gradient

var canvas9 = document.getElementById('canvas9');
var ctx9 = canvas9.getContext('2d');
var gra2 = ctx9.createRadialGradient(250,250,1,300,200,100);
gra2.addColorStop(0,'red');
gra2.addColorStop(1,'blue');


ctx9.fillStyle = gra2;
ctx9.fillRect(150,100,300,200);


var canvas11 = document.getElementById('canvas11');
var ctx11 = canvas11.getContext('2d');

ctx11.font = 'bold 4em Arial,sanserif';
ctx11.fillStyle = gra2;
ctx11.textAlign = 'center';
ctx11.fillText('Hello Canvas',300,200);

var canvas13 = document.getElementById('canvas13');
var ctx13 = canvas13.getContext('2d');
var halfH = canvas13.height/2;


ctx13.moveTo(0,halfH);
ctx13.lineTo(600,halfH);
ctx13.strokeStyle = 'red';
ctx13.stroke();


ctx13.font = '20px Arial,sans-serif';
ctx13.textAlign = 'center';
ctx13.textBaseline = 'top';
ctx13.fillText('top',50,halfH);
ctx13.textBaseline = 'bottom';
ctx13.fillText('bottom',175,halfH);
ctx13.textBaseline = 'middle';
ctx13.fillText('middle',300,halfH);
ctx13.textBaseline = 'alphabetic';
ctx13.fillText('alphabetic',425,halfH);
ctx13.textBaseline = 'hanging';
ctx13.fillText('hanging',550,halfH);

$('#canvas14').drawArc({
  fillStyle: '#5f5f5f',
  x: 300, y: 200,
  radius: 110,
	mask: true
})
.drawRect({
  fillStyle: '#6c1',
  x: 230, y: 220,
  width: 100, height: 100
})
.restoreCanvas();


var x = 50;
function animate(){
    requestAnimationFrame(animate);
}



























