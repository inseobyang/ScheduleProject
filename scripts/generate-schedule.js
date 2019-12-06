
function makeSchedule() {
  YUI().use(
    'aui-scheduler',
    function(Y) {
      var events = oneClass;
      var weekView = new Y.SchedulerWeekView({
        height: 1000,
      });

      var newScheduler = new Y.Scheduler({
          boundingBox: '#myFooter',
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

