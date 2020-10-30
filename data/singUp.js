function signUp(){
    var email= document.getElementById("email").value
    
    var password= document.getElementById("password").value
    
  
    auth
    .createUserWithEmailAndPassword(email, password)
    .then(user => {
        window.location.href = './index.html'
    })
    
  }
  
  