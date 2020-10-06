
function login(){
  var email= document.getElementById("emailField").value
  
  var password= document.getElementById("passwordField").value
  

  auth
  .createUserWithEmailAndPassword(email, password)
  .then(user => {
      console.log("sign up")
  })
  
}

