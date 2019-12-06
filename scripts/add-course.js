//the function below retrieves the value of the filled-out
//form upon submit, and calls addSchedule while also
//passing the retrieved values as parameters.
$("#addCourse").click(function(event) {
    var cType = document.getElementById("cType").value;
    var cCode = document.getElementById("cCode").value;
    var cNum = document.getElementById("cNum").value;
    var cBuilding = document.getElementById("cBuilding").value;
    var cRoom = document.getElementById("cRoom").value;
    var cDate = new Date(document.getElementById("cDate").value);
    var cStartHour = document.getElementById("cStartHour").value;
    var cStartMinute = document.getElementById("cStartMinute").value;
    var cEndHour = document.getElementById("cEndHour").value;
    var cEndMinute = document.getElementById("cEndMinute").value;
    addSchedule(cType, cBuilding, cCode, cNum, cRoom, cDate, cStartHour, cStartMinute, cEndHour, cEndMinute);
})

//the function below clears the fields of the form.
$("#clear").click(function(event) {
      event.preventDefault();
      document.getElementById("course-form").reset();
});

//the function reveals the form
function openNav() {
  document.getElementById("schedules").style.width = "100%";
    document.getElementById("addScheduleImg").style.display = "none";
    document.body.style.position = "fixed";
    document.getElementById("schedule-container").style.display = "none";
}

function closeNav() {
  document.getElementById("schedules").style.width = "0";
    document.getElementById("addScheduleImg").style.display = "block";
    document.body.style.position = "static";
    document.getElementById("schedule-container").style.display = "block";
}
