/*

 let n = parseInt(prompt("Enter any number"))
 for(let a = 1 ; a<=10; a++){
  console.log(n*a)

 }


 
let n=0;
 for(let a = 1 ; a<=10; a++){
    n=n+a;
 }
 console.log(n);
*/
let n = parseInt(prompt("Enter  number b/w 1-20"))
if(num>=1 && num<=10){
for(let a = 1 ; a<=num ; a++){
    console.log(a)
  }
}
else if(num>=11 && num<=20){
    for(let a = 20; a>=1 ; a--){
        console.log(a)
    }
}
else{
    console.log("invilad number")
}

