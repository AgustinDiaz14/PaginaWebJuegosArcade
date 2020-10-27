const userRef = firestore.doc("userInfo/user");
const passRef = firestore.doc("userInfo/pass");

//const email = document.querySelector("#emailField");
//const password = document.querySelector("#passwordField")

function saveToFirestore(email, password){

    console.log("Guardando" + email + "a Firestore")
    userRef.set({
        user: email
    })
    console.log("Guardando" + password + "a Firestore")
    passRef.set({
        pass: password
    })
}
