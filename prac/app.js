

var canvas;
var ctx;
var top=12, left=7.8; perStep = 2;
//var position = e.currentTarget.value;

window.onload = function()
{
    window.addEventListener('keydown',pressArrowKeys,true);
    canvas = document.getElementById("canvas");
    //button = document.getElementsByClassName("button");
    for (var i = 0; i < button.length; i++) {
    button[i].addEventListener('click',function(e){        
    

    switch(position){
        case "up": top-=perStep; break;
        case "down": top+=perStep; break;
        case "left": left-=perStep; break;
        case "right": left+=perStep; break;
    }

    if(top < 0)
        top = 0;
    if(top > 100)
        top = 100;

    if(left < 0)
        left = 0;
    if(left > 100)
        left = 100;

    circle.style.top = top+'%';
    //circle.style.right = right+'%';
    circle.style.left = left+'%';

    ctx = canvas.getContext("2d");
    return setInterval(draw, 10);
})
/*
function pressArrowKeys(event)
{
    switch (event.keyCode)
    {
            case up:
                y -= dy;
                break;
            case down:    
                y += dy;
                break;
            case left:
                x -= dx;
                break;
            case right:    
                x += dx;
                break;
    }

}
*/
function draw(){
ctx.clearRect(0, 0, 500, 500);

ctx.beginPath();
ctx.arc(x,y,10,0,2 * Math.PI);
ctx.fill();

}

    }};
