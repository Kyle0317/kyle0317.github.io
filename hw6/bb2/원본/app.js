/* Filename: app.js
   Javascript for Game 2 Homework
*/

//alert("ok");
//console.log("ok");

window.onload = init;

function init() {
  var canvas = document.getElementById("game_area");
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "#77f";

  
  ctx.beginPath();
  ctx.arc(50, 50, 20, 0, 2 * Math.PI);
  ctx.fill();




}




/*
<canvas width="500" height="400" id="area"></canvas>

<script type="text/javascript">
window.onload = function () {
var canvas = document.getElementById("area");
if (canvas.getContext) {
  var draw = canvas.getContext("2d")
  //이곳에 그래픽 코드가 시작됩니다.
  //지원되는 브라우저가 실행할 코드
} else {
  alert("이 브라우저는 canvas를 지원하지않습니다")
}
*/