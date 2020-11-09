
function saveToFirestore(points){
    let user = auth.currentUser.uid
    let documents = firestore.collection("snakePoints").doc(user)
    documents.get()
    .then(function(doc){
        console.log(doc.data().snakePoints)
        if(doc.exists){
            if(doc.data().snakePoints < points){

            console.log("enter if")
            documents.delete().then(function(){
                console.log("deleted")
            })

            documents.set({snakePoints: points})
            }
        }

        else{
            documents.set({snakePoints: points})
        }
        
    })
    
}
