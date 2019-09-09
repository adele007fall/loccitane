var canvas = document.getElementById('canvas');


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ctx1 = canvas.getContext('2d');


function circle(x,y,dx,dy){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    
    this.draw = function(){
         
    ctx1.beginPath();
    ctx1.arc(x,y,radius,0,Math.PI*2,false);
    ctx1.strokeStyle = '#ffcc00';
    ctx1.stroke();
    }
    
    
    this.update = function(){
        if (x + radius > innerWidth || x - radius < 0){
        dx = -dx;
    }
    if (y +radius > innerHeight || y -radius < 0){
        dy = -dy;
    }

    x += dx;
    y += dy;
    }
}

var circle = new circle(100,100);


var x = Math.random()*innerWidth;
var y = Math.random()*innerHeight;
var dx = (Math.random()-.3)*10;
var dy = (Math.random()-.3)*10;
var radius = 20;
function animate(){
    requestAnimationFrame(animate);
    

    ctx1.clearRect(0,0,innerWidth,innerHeight);
    
    circle.draw;
    
    ctx1.beginPath();
    ctx1.arc(x,y,radius,0,Math.PI*2,false);
    ctx1.strokeStyle = '#ffcc00';
    ctx1.stroke();
    
    if (x + radius > innerWidth || x - radius < 0){
        dx = -dx;
    }
    if (y +radius > innerHeight || y -radius < 0){
        dy = -dy;
    }

    x += dx;
    y += dy;
}
animate();