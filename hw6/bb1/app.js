/* Filename: app.js
   Javascript for Game 1 Homework
*/

//alert("ok");
//console.log("ok");

(function(){

  var button = document.getElementsByClassName("button");
  var circle = document.getElementById("circle");

  var top=12, left=7.8; perStep = 2; //8.5

  for (var i = 0; i < button.length; i++) {
      button[i].addEventListener('click',function(e){

          var position = e.currentTarget.value;

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
          circle.style.left = left+'%';
      });
  }

}());