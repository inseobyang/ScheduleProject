
$(document).ready(function() {
  var d = new Date();
  yr = d.getFullYear();
  month = d.getMonth()+1;
  if (month == 1) {
    month = "January";
  }
  else if (month == 2) {
    month = "February";
  }
  else if (month == 3) {
    month = "March";
  }
  else if (month == 4) {
    month = "April";
  }
  else if (month == 5) {
    month = "May";
  }
  else if (month == 6) {
    month = "June";
  }
  else if (month == 7) {
    month = "July";
  }
  else if (month == 8) {
    month = "August";
  }
  else if (month == 9) {
    month = "September";
  }
  else if (month == 10) {
    month = "October";
  }
  else if (month == 11) {
    month = "November";
  }
  else if (month == 12) {
    month = "December";
  }
  day = d.getDate();
  var dateToday = "<p id='date'> Week of " + month + " " + day + ", " + yr + "</p>";
  $(".header").append(dateToday);

  $("#logo").click(function(){
    if (day + 7 < 31) {
      day = day + 7;
      $('#date').remove();
      dateToday = "<p id='date'> Week of " + month + " " + day + ", " + yr + "</p>";
      $(".header").append(dateToday);
    }
    else {
      month = "December";
      day = day - 30 + 7;
      $('#date').remove();
      dateToday = "<p id='date'> Week of " + month + " " + day + ", " + yr + "</p>";
      $(".header").append(dateToday);
    }
  });
});

$(document).ready(function(){
    $("#submit").click(function(event){
    event.preventDefault();
    var cType = document.getElementById("cType").value;
    var cCode = document.getElementById("cCode").value;
    var cNum = document.getElementById("cNum").value;
    var cBuilding = document.getElementById("cBuilding").value;
    var cRoom = document.getElementById("cRoom").value;
    addSchedule(cType, cBuilding, cCode, cNum, cRoom);
  });
});

/*YUI().use(
        'node',
        'transition',
        function (Y) {
          Y.one('#newAddButton').on(
            'click', function() {
              this.transition(
                {
                  width: '500px'
                }
              );
            }
          );
        }
      );*/