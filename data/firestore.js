
function saveToFirestore(points){
    let user = auth.currentUser.uid
    let documents = firestore.collection("snakePoints").doc(user)
    documents.get()
    .then(function(doc){
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

function get_points(){
    firestore.collection("snakePoints").orderBy("snakePoints", "desc").limit(10).get()
    .then((snapshot) => {
        snapshot.docs.forEach(doc => {
            console.log(doc.data().snakePoints)
        });
    })

    firestore.collection("pongPoints").doc(auth.currentUser.uid).get()
    .then((documentSnapshot)=>{
        console.log((documentSnapshot.data().wonMatches/documentSnapshot.data().playedMatches)*100)
    })

}

function savePong(status){
    console.log("entrada a la funcion")
    
    let user = auth.currentUser.uid
    let ref = firestore.collection("pongPoints").doc(user)
    console.log(status)

    ref.get().then((documentSnapshot)=>{
        if(documentSnapshot.exists){
            if(status == 1){
                ref.set(
                    {playedMatches: documentSnapshot.data().playedMatches + 1,
                    wonMatches: documentSnapshot.data().wonMatches + 1}
                )
            }

            else{
                ref.set(
                    {playedMatches: documentSnapshot.data().playedMatches + 1,
                    wonMatches: documentSnapshot.data().wonMatches}
                )
            }
        }

        else{
            if(status == 1){
                ref.set(
                    {wonMatches: 1,
                    playedMatches: 1}
                )
            }

            else{
                ref.set(
                    {wonMatches: 0,
                    playedMatches: 1}
                )
            }
            
        }
    })
}
