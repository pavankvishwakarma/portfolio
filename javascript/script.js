function updateClock() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  var meridiem = hours >= 12 ? 'PM' : 'AM'; // Determine AM or PM
  var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
  // Convert hours to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // "0" should be "12" in 12-hour format

  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  var timeString = 'Time : ' + hours + ':' + minutes + ':' + seconds + ' ' + meridiem;
  document.getElementById('clock').textContent = timeString;

  var month = now.getMonth() ;
  var day = now.getDate();
  var year = now.getFullYear();


  day = day < 10 ? '0' + day : day;

  var dateString ='Date : '+ monthNames[month] + " " + day + ', ' + year;
  document.getElementById('date').textContent = dateString;
}

setInterval(updateClock, 1000); // Update every second
