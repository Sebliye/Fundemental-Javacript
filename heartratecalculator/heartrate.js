

//console.log(fullname);
//console.log(age)
function heartRateCalculator(){
let fullname=document.getElementById("fname").value;
let age=document.getElementById("age").value;
let num=20;
let heartrate=num-age;
document.getElementById("display").innerHTML=heartrate;
}