
      const form = document.querySelector('#course-form');
      const courseList = document.querySelector('#myCourseList');
      
      //creates elements for display
      function renderCourses(doc) {
        let li = document.createElement('li');
        let code = document.createElement('span');
        let number = document.createElement('span');
        let courseType = document.createElement('span');
        let building = document.createElement('span');
        let room = document.createElement('span');
        let day = document.createElement('span');
        let month = document.createElement('span');
        let year = document.createElement('span');
        let startHour = document.createElement('span');
        let startMinute = document.createElement('span');
        let endHour = document.createElement('span');
        let endMinute = document.createElement('span');
        let closeButton = document.createElement('span');
        
        //reads course data from database and assigns to created elements
        li.setAttribute('data-id', doc.id);
        code.textContent = doc.data().courseCode + " ";
        number.textContent = doc.data().courseNumber + " ";
        courseType.textContent = doc.data().courseType + " ";
        building.textContent = doc.data().courseBuilding + " ";
        room.textContent = doc.data().courseRoom + " ";
        var date = (doc.data().courseDate).toDate();
        day.textContent = date.getDate() + 1 + " ";
        console.log(doc.data().courseDate);
        month.textContent = date.getMonth() + 1 + " ";
        year.textContent = date.getFullYear() + " ";
        startHour.textContent = doc.data().courseStartHour;
        startMinute.textContent = doc.data().courseStartMinute;
        endHour.textContent = doc.data().courseEndHour;
        endMinute.textContent = doc.data().courseEndMinute;
        
        closeButton.textContent = "[X]";
        
        //append each element to list element
        li.appendChild(code);
        li.appendChild(number);
        li.appendChild(courseType);
        li.appendChild(building);
        li.appendChild(room);
        li.appendChild(day);
        li.appendChild(month);
        li.appendChild(year);
        li.appendChild(startHour);
        li.appendChild(startMinute);
        li.appendChild(endHour);
        li.appendChild(endMinute);
        li.appendChild(closeButton);
        
        //append list element to list
        courseList.appendChild(li);
        
        //remove data
        //grabs unique document id by going from closeButton -> li -> li attribute which is doc id
        firebase.auth().onAuthStateChanged(function (user){
          closeButton.addEventListener('click', (e) => {
            e.stopPropagation;
            let id = e.target.parentElement.getAttribute('data-id'); db.collection("Users").doc(user.uid).collection("Courses").doc(id).delete();
          });
        });
      }

    firebase.auth().onAuthStateChanged(function (user){       
      db.collection("Users").doc(user.uid).collection("Courses").onSnapshot(snapshot => {
        let changes = snapshot.docChanges(); //assign all changes to variable changes
        changes.forEach(change => {
          console.log(change.doc);
          if(change.type == 'added') {
            //renderCourses(change.doc);
          } else if (change.type == 'removed') {
            let li = courseList.querySelector('[data-id=' + change.doc.id + ']');
            courseList.removeChild(li);
          }
        })
      })
    });

      form.addEventListener('submit', (e) => {
        e.preventDefault();
        var nextDate = new Date($("#cDate").val());
        db.collection("Users").doc(user.uid).collection("Courses").add({
          courseCode: form.newCode.value,
          courseNumber: form.newNumber.value,
          courseType: form.newType.value,
          building: form.newBuilding.value,
          roomNumber: form.newRoom.value,
          cDate: nextDate,
          cStartHour: form.newStartHour.value,
          cStartMinute: form.newStartMinute.value,
          cEndHour: form.newEndHour.value,
          cEndMinute: form.newEndMinute.value
        });

        console.log("scheduler thing added");
        form.newCode.value = '';
        form.newNumber.value = '';
        form.newType.value = '';
        form.newBuilding.value = '';
        form.newRoom.value = '';
      })

      var oneClass = [];  
      firebase.auth().onAuthStateChanged(function (user){
        db.collection("Users").doc(user.uid).collection("Courses").onSnapshot(snapshot => {
          let files = snapshot;
          files.forEach(file => {
            console.log(file.data().courseType);
            var lastDate = (file.data().courseDate).toDate();
            let newClass = 
                {
                  content: (file.data().courseCode) + (file.data().courseNumber),
                  startDate: new Date(lastDate.getFullYear(), lastDate.getMonth(), lastDate.getDate() + 1, file.data().courseStartHour, file.data().courseStartMinute),
                  endDate: new Date(lastDate.getFullYear(), lastDate.getMonth(), lastDate.getDate() + 1, file.data().courseEndHour, file.data().courseEndMinute)
                }
            console.log(newClass);
            oneClass.push(newClass);
          })
          console.log(oneClass);
          makeSchedule();
        })
      });
