
function saveToFirestore(points){
    let user = auth.currentUser.uid
    console.log(user)
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
    const boxPoints = document.getElementById("points_box")
    var list = "<ul>"
    let user = auth.currentUser.uid
    console.log(user)
    firestore.collection("snakePoints").orderBy("snakePoints", "desc").limit(10).get()
    .then((snapshot) => {
        snapshot.docs.forEach(doc => {
            console.log(doc.data().snakePoints)
            list += ("<li>" + doc.data() + "</li>")
        });
    })

    list += "</ul>"
    console.log(list)
    boxPoints.innerHTML = list

    firestore.collection("pongPoints").doc(user).get()
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
