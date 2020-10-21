const userRef = firestore.doc("userInfo/user");
const passRef = firestore.doc("userInfo/pass");
const email = document.querySelector("#emailField");
const password = document.querySelector("#passwordField")

function saveToFirestore(){
    const userToSave = email.value;
    const passToSave = password.value;

    console.log("Guardando" + userToSave + "a Firestore")
    userRef.set({
        user: userToSave
    })
    console.log("Guardando" + passToSave + "a Firestore")
    passRef.set({
        pass: passToSave
    })
}
