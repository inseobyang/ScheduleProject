  
//createUser creates a new user within the
//database and initializes the Name and Email
//fields to the display name and email respectively.
// Writes to database.
function createUser() {

    firebase.auth().onAuthStateChanged(function(user){
        db.collection("Users").doc(user.uid).set({
            "Name":user.displayName,
            "Email":user.email,
        });
    });
}