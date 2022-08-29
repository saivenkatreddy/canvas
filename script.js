'use strict'

var canvas = document.getElementById("myCanvas");

var ctx = canvas.getContext("2d");


ctx.fillStyle = "#FF0000";
ctx.fillRect(0, 0, 150, 75);

ctx.moveTo(0,0);
ctx.lineTo(200,200);
ctx.stroke();

ctx.beginPath();
ctx.arc(295, 50, 40, 0, 2 * Math.PI);
ctx.arc(95, 40, 30, 0, 2 * Math.PI);
ctx.stroke();

var grd = ctx.createLinearGradient(200, 30, 40, 50);
grd.addColorStop(0, "blue");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(10, 200, 150, 80);