 var num = 0
 function counter(){
    document.getElementById('count').textContent = ++num
 }

 
 function deep(){
    if(num>0){
    document.getElementById('count').textContent = --num
    }
    else{
        alert("decrement not less than 0")
    }
 }

 function jeep(){
    num=0
    document.getElementById('count').textContent = num
 }


//  query selector - >  . ->class    # ->id   tagname -> h1

 document.querySelector('#head').style.color="red"

 document.querySelector('.head2').textContent="change by js"


 let head = document.querySelectorAll('h2')
 console.log(head);
 head[2].style.color= "red"
 head[4].textContent="deepak"

 

 let btn = document.querySelector('.btn')

 btn.addEventListener('click',()=>{alert("Working")})