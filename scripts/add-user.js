function createUser() {

    firebase.auth().onAuthStateChanged(function(user){
        db.collection("Users").doc(user.uid).set({
            "Name":user.displayName,
            "Email":user.email,
        });
    });
}