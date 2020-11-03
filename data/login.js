function login(){
  var email= document.getElementById("emailField").value
  
  var password= document.getElementById("passwordField").value
  

  auth
  .signInWithEmailAndPassword(email, password)
  .then(user => {
      window.location.href = './mainScreen.html'
  })
  
}

