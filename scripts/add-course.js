
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
  $("#clear").click(function(event) {
      event.preventDefault();
      document.getElementById("course-form").reset();
});


function openNav() {
  document.getElementById("schedules").style.width = "100%";
    document.getElementById("addSchdeuleImg").style.display = "none";
    document.body.style.position = "fixed";
    document.getElementById("myFooter").style.display = "none";
}

function closeNav() {
  document.getElementById("schedules").style.width = "0";
    document.getElementById("addSchdeuleImg").style.display = "block";
    document.body.style.position = "static";
    document.getElementById("myFooter").style.display = "block";
}
