function validate(){
    let name = document.querySelector('#name').value
    let age = document.querySelector('#age').value
  let email = document.querySelector('#email').value

    if(name==""){
        alert("plese fill your name")
        document.querySelector('#name').focus()
        return false
    }

    else if(isNaN(age)){
        alert("plese fill your age")
        document.querySelector('#age').focus()
        return false
    }
   
    
    else if(isNaN(number)){
        alert("plese fill your contect number")
        document.querySelector('#number').focus()
        return false
    }

    else if(!(email.includes('@gmail.com'))){
        alert("plese fill valid email")
        document.querySelector('#email').focus()
        return false
    }
}