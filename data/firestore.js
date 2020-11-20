
function saveToFirestore(points){
    let user = auth.currentUser.uid
    let name = auth.currentUser.displayName
    console.log(name)
    
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

            documents.set({snakePoints: points, userName: name})
            }
        }

        else{
            documents.set({snakePoints: points, userName: name})
        }
        
    })
    
}

function getSnakePoints(){
    console.log(auth.current_user)
    const boxPoints = document.getElementById("points_box")
    var list = "<ol>"
    
    firestore.collection("snakePoints").orderBy("snakePoints", "desc").limit(10).get()
    .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
            console.log(doc.data().snakePoints)
            list += ("<li>" + doc.data().userName + " - puntos: " +  doc.data().snakePoints + "</li>")
            console.log(list)
        });

        list += "</ol>"
        modifyHTML(list)
    })

    
    console.log(list)

}

function getPongPoints(){
    let user = auth.currentUser.uid
    console.log(user)
    var data
    firestore.collection("pongPoints").doc(user).get()
    .then((documentSnapshot)=>{
        if(documentSnapshot.data() == undefined){
            data = "<p>Todavia no has jugado al pong</p>"
        }
        else{
            data = "<p>Porcentaje partidas ganadas/partidas jugadas</p>"
            + "<p>"+(documentSnapshot.data().wonMatches/documentSnapshot.data().playedMatches)*100
            + "%</p>"    
        }
        modifyHTML(data)
    })    
}

function modifyHTML(data){
    const boxPoints = document.getElementById("points_box")
    boxPoints.innerHTML = data
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
