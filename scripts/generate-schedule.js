//makeSchedule from the AlloyUI API uses an array 
//of events and adds the events to a base 
//schedule layout.
function makeSchedule() {
  YUI().use(
    'aui-scheduler',
    function(Y) {
      var events = oneClass;
      var weekView = new Y.SchedulerWeekView({
        height: 1000,
      });

      var newScheduler = new Y.Scheduler({
          boundingBox: '#schedule-container',
          date: new Date(),
          items: events,
          render: true,
          views: [weekView],
          
          borderColor: "#4d1933"
        }
      );
    }
  )
};

//function below creates an object containing content, start date, and 
//end date of a class. The object is pushed onto the oneClass array
//which is used for the makeSchedule() method.
var oneClass = [];  
firebase.auth().onAuthStateChanged(function (user){
  db.collection("Users").doc(user.uid).collection("Courses").onSnapshot(snapshot => {
    let files = snapshot;
    files.forEach(file => {
        if (file.data().courseType === "LAB") {
          classColor = "red";
        }
      else {
        classColor = "blue";
      }

      console.log(file.data().courseType);
      var lastDate = (file.data().courseDate).toDate();
        let newClass =
            {
              content: (file.data().courseCode) + (file.data().courseNumber + " " + file.data().courseType + "<br>" + (file.data().courseBuilding) + " " + (file.data().courseRoom)),
              startDate: new Date(lastDate.getFullYear(), lastDate.getMonth(), (lastDate.getDate() + 1), file.data().courseStartHour, file.data().courseStartMinute),
              endDate: new Date(lastDate.getFullYear(), lastDate.getMonth(), lastDate.getDate() + 1, file.data().courseEndHour, file.data().courseEndMinute),
              color: classColor
            }
        console.log(newClass);
        oneClass.push(newClass);
    })
    console.log(oneClass);
    makeSchedule();
  })
});

