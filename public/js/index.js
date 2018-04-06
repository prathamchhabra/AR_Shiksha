window.onload=function(){
let solar=document.getElementById("solar");
let myframe=document.getElementById("myframe");
let dinos=document.getElementById("dino");
let earth=document.getElementById("earth");
let city=document.getElementById("city");

city.onclick=function(){
  console.log("hi");
    myframe.src="city.html";
  
}

earth.onclick=function(){
  console.log("hi");
    myframe.src="earth.html";
  
}
dinos.onclick=function(){
  console.log("hi");
    myframe.src="dino.html";
  
}

solar.onclick=function(){
  console.log("hi");
    myframe.src="solar.html";
  
}}