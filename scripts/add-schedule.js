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

/*{
              content: 'COMP 2714',
              startDate: new Date(2020, 00, 06, 11,  30),
              endDate: new Date(2020, 00, 06, 12, 20)
            },
            {
              content: 'COMP 2121',
              startDate: new Date(2020, 00, 06, 12, 30),
              endDate: new Date(2020, 00, 06, 14, 20)
            },
            {
              content: 'COMP 2522',
              startDate: new Date(2020, 00, 07, 09, 30),
              endDate: new Date(2020, 00, 07, 11, 20)
            },
            {
              content: 'COMP 2714',
              startDate: new Date(2020, 00, 07, 11, 30),
              endDate: new Date(2020, 00, 07, 13, 20)
            },
            {
              content: 'COMP 2522',
              startDate: new Date(2020, 00, 07, 14, 30),
              endDate: new Date(2020, 00, 07, 15, 20)
            },
            {
              content: 'COMP 2216',
              startDate: new Date(2020, 00, 07, 15, 30),
              endDate: new Date(2020, 00, 07, 17, 20)
            },
            {
              content: 'COMP 2522',
              startDate: new Date(2020, 00, 08, 10, 30),
              endDate: new Date(2020, 00, 08, 12, 20)
            },
            {
              content: 'COMP 2121' + '<br>' + 'LEC',
              startDate: new Date(2020, 00, 08, 12, 30),
              endDate: new Date(2020, 00, 08, 14, 20)
            },
            {
              content: 'COMP 2216',
              startDate: new Date(2020, 00, 09, 09, 30),
              endDate: new Date(2020, 00, 09, 11, 20)
            },
            {
              content: 'COMP 2721',
              startDate: new Date(2020, 00, 09, 11, 30),
              endDate: new Date(2020, 00, 09, 13, 20)
            },
            {
              content: 'COMP 2721',
              startDate: new Date(2020, 00, 09, 14, 30),
              endDate: new Date(2020, 00, 09, 16, 20)
            },
            {
              content: 'COMP 2510' + '<br>' + 'LEC',
              startDate: new Date(2020, 00, 09, 16, 30),
              endDate: new Date(2020, 00, 09, 17, 20)
            },
            {
              content: 'COMP 2714',
              startDate: new Date(2020, 00, 10, 8, 30),
              endDate: new Date(2020, 00, 10, 10, 20)
            },
            {
              content: 'COMP 2510' + '<br>' + 'LAB',
              startDate: new Date(2020, 00, 10, 13, 30),
              endDate: new Date(2020, 00, 10, 15, 20)
            },
            {
              content: 'COMP 2510' + '<br>' + 'LEC',
              startDate: new Date(2020, 00, 10, 15, 30),
              endDate: new Date(2020, 00, 10, 17, 20)
            }*/