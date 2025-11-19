  //    setInterval(()=>{document.write("working")},3000)

//   setInterval(()=>{console.log("working")},3000)


let btn = document.querySelector('#btn')
var v1 = 0
let st 

btn.addEventListener('click',()=>{
    st = setInterval(()=>{
        document.querySelector('#valuee').textContent=++v1
    },1000)
})


let btn1 = document.querySelector('#btn1')
btn1.addEventListener('click',()=>{
    clearInterval(st)
})



