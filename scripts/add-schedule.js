function addSchedule(courseType, courseBuilding, courseCode, courseNumber, courseRoom, cStartHour, cStartMinute, cEndHour, cEndMinute){
    firebase.auth().onAuthStateChanged(function (user){
        db.collection("Users").doc(user.uid).collection("Courses").add({
            "courseType" : courseType,
            "courseCode" : courseCode, 
            "courseNumber" : courseNumber,
            "courseBuilding" : courseBuilding,
            "courseRoom" : courseRoom,
            "courseStartHour" : cStartHour,
            "courseStartMinute" : cStartMinute,
            "courseEndHour" : cEndHour,
            "courseEndMinute" : cEndMinute
        });
    });
}