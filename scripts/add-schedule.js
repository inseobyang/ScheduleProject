function addSchedule(courseType, courseBuilding, courseCode, courseNumber, courseRoom, cDate, cStartHour, cStartMinute, cEndHour, cEndMinute){
    firebase.auth().onAuthStateChanged(function (user){
        db.collection("Users").doc(user.uid).collection("Courses").add({
            "courseType" : courseType,
            "courseCode" : courseCode, 
            "courseNumber" : courseNumber,
            "courseBuilding" : courseBuilding,
            "courseRoom" : courseRoom,
            "courseDate" : cDate,
            "courseStartHour" : cStartHour,
            "courseStartMinute" : cStartMinute,
            "courseEndHour" : cEndHour,
            "courseEndMinute" : cEndMinute
        });
    });
}