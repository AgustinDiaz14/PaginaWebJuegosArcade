
function saveToFirestore(points){
    firestore.collection(auth.currentUser.uid).add({snakePoints: points})
    .then(function(){
        //window.alert(points)
    })
}
