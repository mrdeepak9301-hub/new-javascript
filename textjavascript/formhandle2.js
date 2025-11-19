function handle(){

    let num1 = parseInt(document.querySelector('#num1').value)
    let num2 = parseInt(document.querySelector('#num2').value)


    document.querySelector('#res').innerHTML=num1+num2
  
    return false
  }