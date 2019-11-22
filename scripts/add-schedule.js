function addSchedule(courseName, courseBuilding, courseCode, courseNumber, courseRoom ){
    firebase.auth().onAuthStateChanged(function (user){
        
            db.collection("Users").doc(user.uid).collection("Courses").add({
                "Course" : [courseName, courseCode, courseNumber],
                "CourseLocation" : [courseBuilding, courseRoom ]
        
        });
        
    });
    console.log("works");
}