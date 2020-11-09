function signUp(){
    var email= document.getElementById("email").value
    var name = document.getElementById("user").value
    var password= document.getElementById("password").value
    var confirmPassword = document.getElementById("confirmPassword").value
    console.log(email)
    if(email == [] || name == [] || password == [] || confirmPassword == []){
        window.alert("Por favor complete los campos")
        return
    }

    if(password != confirmPassword){
        window.alert("Las contraseñas deben ser iguales, por favor intente nuevamente")
        return
    }
  
    auth
    .createUserWithEmailAndPassword(email, password)
    .then(result =>{
        auth.currentUser.updateProfile({
            displayName: name
        })
        window.location.href = './index.html'
    })
    .catch(function(error){
        switch(error.message){
            case "The email address is badly formatted.":{
                window.alert("Email inválido"); break
            }
            case "Password should be at least 6 characters":{
                window.alert("La contraseña debe tener al menos 6 caracteres"); break
            }
            case "The email address is already in use by another account.":{
                window.alert("El usuario ya existe"); break
            }

            default:{
                console.log(error.message)
                window.alert("A ocurrido un error, por favor intente nuevamente más tarde"); break
            }
        }
    })
    
  }
  
  