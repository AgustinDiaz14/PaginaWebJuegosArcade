function login(){
  var email= document.getElementById("emailField").value
  
  var password= document.getElementById("passwordField").value
  

  auth
  .singInWithEmailAndPassword(email, password)
  .then(user => {
      console.log("sign up")
  })
  
}

