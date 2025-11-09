/*
let a = parseInt(prompt("Enter any number"))

if(a>0){
    alert("+ve number",a)
}
else{
    alert("_ve number")
}


write a program to check number is grater then 15 or not


let a = parseInt(prompt("Enter any number"))

if(a>15){
    alert("grater then 15")
}
else{
    alert("less then 15")
}

wap to check no is divisible by 3 or not


let a = parseInt(prompt("Enter any number"))

if(a%3==0){
    alert("divisible by 3")
}
else{
    alert("not divisible")
}

let a = parseInt(prompt("Enter any number"))

if(a/2==0){
    alert("odd num")
}
else{
    alert("even num")
}
*/
/*
let a = parseInt(prompt("Enter any number"))
let b = parseInt(prompt("Enter any number 2"))
if(b/2==0){
    alert("odd num")
}
else{
    alert("even num")
}


 
let num =parseInt(prompt("Enter any number"))

if(num>0){
    console.log("+ve no")
}
else if(num<0){
    console.log("_ve no")
}
else{
console.log("nuteral")
}
*/

let num1 = parseInt(prompt("Enter 1 subject marks"))
let num2 = parseInt(prompt("Enter 2 subject marks"))
let num3 = parseInt(prompt("Enter 3 subject marks"))
let num4 = parseInt(prompt("Enter 4 subject marks"))
let num5 = parseInt(prompt("Enter 5 subject marks"))

let num =(num1+num2+num3+num4+num5)/5

if(num>90){
    console.log("A+ Grade");  
}

else if(num>75){
    console.log("A Grade");
    
}


else if(num>60){
    console.log("B Grade");
    
}

else if(num>40){
    console.log("C grade");
    
}

else{
  console.log("Fail");
}