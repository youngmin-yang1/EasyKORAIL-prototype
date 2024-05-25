$(document).ready(function() {
  $('#common').css({'background-color': '#D9D9D9'})
  let departure = localStorage.getItem('departure');
  $('#departure').text(departure);
  let arrival = localStorage.getItem('arrival');
  $('#arrival').text(arrival);
  let adult = localStorage.getItem('adult');
  let child = localStorage.getItem('child');
  let senior = localStorage.getItem('senior');
  let adultnum = parseInt(adult);
  let childnum = parseInt(child);
  let seniornum = parseInt(senior);
  let passenger = "";
  if(seniornum > 0) {
    if(seniornum == 1) passenger += senior + " senior";
    else passenger += senior + " seniors";
    if(childnum > 0 || adultnum > 0) passenger += ", ";
  }
  if(adultnum > 0) {
    if(adultnum == 1) passenger += adult + " adult";
    else passenger += adult + " adults";
    if(childnum > 0) passenger += ", ";
  }
  if(childnum > 0) {
    if(childnum == 1) {
      passenger += child + " child";
    }
    else passenger += child + " children";
  }
  $('#passenger').text(passenger);
  let day = localStorage.getItem('day');
  let daynum = parseInt(day);
  let date = "";
  if (daynum == 1) date = "2024.07.01 Mon";
  else if (daynum == 2) date = "2024.07.02 Tue";
  else {
    if (daynum < 10) date = "2024.06.0" + day;
    else date = "2024.06." + day;
    let temp = daynum % 7;
    if (temp == 0) date += " Fri";
    if (temp == 1) date += " Sat";
    if (temp == 2) date += " Sun";
    if (temp == 3) date += " Mon";
    if (temp == 4) date += " Tue";
    if (temp == 5) date += " Wed";
    if (temp == 6) date += " Thu";
  }
  $('#date').text(date);
  let time = localStorage.getItem('deparrtime');
  let times = time.split(' -> ');
  let startTime = times[0];
  let endTime = times[1];
  $('#dep-time').text(startTime);
  $('#arr-time').text(endTime);
                let startParts = startTime.split(':');
                let endParts = endTime.split(':');
                let startHours = parseInt(startParts[0], 10);
                let startMinutes = parseInt(startParts[1], 10);
                let endHours = parseInt(endParts[0], 10);
                let endMinutes = parseInt(endParts[1], 10);
                let startTotalMinutes = (startHours * 60) + startMinutes;
                let endTotalMinutes = (endHours * 60) + endMinutes;
                // Calculate the difference in minutes
                let differenceInMinutes = endTotalMinutes - startTotalMinutes;
                // Convert the difference back to hours and minutes
                let diffHours = Math.floor(differenceInMinutes / 60);
                let diffMinutes = differenceInMinutes % 60;
  $('#duration').text(diffHours + "h " + diffMinutes + "m");
  let price = localStorage.getItem('price');
  $('#price').text(price);
      $('.underbar-left').on('click', function() {
        window.location.href = 'time.html';
      });
      $('.underbar-right').on('click', function() {
        window.location.href = 'seat.html';
      });
  });