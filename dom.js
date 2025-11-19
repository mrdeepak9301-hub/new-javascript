
let res = document.getElementById("main")
console.log(res);

res.textContent = "INside js"



let head = document.getElementsByTagName('h2')
console.log(head);

head[2].textContent = "kuch or"




let poop = document.getElementsByClassName('doop')
console.log(poop);

poop[2].textContent = "change from for js"




let code = document.getElementById('ddd')
code.innerHTML = "<i> transfome by js <i>"

//code.style.backgroundColor = "yellow"
//code.style.padding = "20px"


code.style.cssText = "background-color:red;color:blue;padding:20px"