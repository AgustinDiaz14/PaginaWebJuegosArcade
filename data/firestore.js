
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

function get_points(){
    firestore.collection("snakePoints").orderBy("snakePoints", "desc").limit(10).get()
    .then((snapshot) => {
        snapshot.docs.forEach(doc => {
            console.log(doc.data().snakePoints)
        });
    })

}

function savePongPoints(status){
    console.log("entrada a la funcion")
    let user = auth.currentUser.uid
    let ref = firestore.collection("pongPoints").doc(user)

    ref.get().then((documentSanpshot)=>{
        if(documentSanpshot.exists){
            if(status == 1){
                ref.set(
                    {"partidasJugadas": documentSanpshot.data().partidasJugadas + 1},
                    {"partidasGanadas": documentSanpshot.data().partidasGanadas + 1}
                )
            }

            else{
                ref.set(
                    {"partidasJugadas": documentSanpshot.data().partidasJugadas + 1}
                )
            }
        }

        else{
            documentSanpshot.set(
                {"partidasJugadas": 1},
                {"partidasGanadas": 1}
            )
        }
    })
}
