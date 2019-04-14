

var canvas;
var ctx;
var dx = 5;
var dy = 5;
var x = 150;
var y = 100;

window.onload = function()
{
    window.addEventListener('keydown',pressArrowKeys,true);
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    return setInterval(draw, 10);
}

function pressArrowKeys(event)
{
    switch (event.keyCode)
    {
            case 38:
                y -= dy;
                break;
            case 40:    
                y += dy;
                break;
            case 37:
                x -= dx;
                break;
            case 39:    
                x += dx;
                break;
    }

}

function draw(){
ctx.clearRect(0, 0, 500, 500);

ctx.beginPath();
ctx.arc(x,y,10,0,2 * Math.PI);
ctx.fill();

}