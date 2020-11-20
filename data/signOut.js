function signOut(){
    auth.signOut().then(() =>{
        window.location.href = './index.html'
    })
}