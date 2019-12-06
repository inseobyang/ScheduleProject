
//add schedule takes the input parameters and adds 
//the actual parameters as field values in a document
//within the class collection.
//Writes to database.
//param: courseType, courseBuilding, courseCode, courseNumber, courseRoom; type string
//param: cDate; type date
//param: cStartHour, cStartMinute, cEndHour, cEndMinute; type int
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
