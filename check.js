$(document).ready(function() {
  let windowHeight = $(window).height();
  $('.tickettable').css({'top': '50px', height: windowHeight - 117});
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
  let pnum = adultnum + childnum + seniornum;
  let passenger = "";
  let passsize = 24;
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
  $('#passenger').html(passenger);
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
                let dur = diffHours + "h " + diffMinutes + "m";
  $('#duration').text(dur);
  let price = localStorage.getItem('price');
  let number = parseInt(price.replace(/[^0-9]/g, ''), 10);
  let multipliedNumber = number * pnum;
  let formattedString = multipliedNumber.toLocaleString() + '₩';
  $('#price').text(formattedString);
  let trainnum = localStorage.getItem('trainnum');
  $('#trainnum').text(trainnum);
  let seatlist = JSON.parse(localStorage.getItem('seatlist'));
  let car = localStorage.getItem('car');
  let seatcar = seatlist.map(item => car + '-' + item);
  let seats;
  if(pnum > 3) {
    let firstThree = seatcar.slice(0, 3).join(', ');
    let rest = seatcar.slice(3).join(', ');
    seats = firstThree + ',' + '<br>' + rest;
    $('#risk2').removeClass('check-elem1');
    $('#risk2').addClass('check-elem3');
  } else {
    seats = seatcar.join(', ');
    if(pnum > 1) {
    $('#risk2').removeClass('check-elem1');
    $('#risk2').addClass('check-elem2');
    }
  }
  $('#seats').html(seats);
  if(adultnum > 0 && childnum > 0 && seniornum > 0) {
    if(childnum > 1 && (seniornum > 1 || adultnum > 1)) {
      $('#risk1').children('.check-right').css({'font-size': '20px'});
      passsize = 20;
    }
    else if(childnum > 1 || (seniornum > 1 && adultnum > 1)) {
      $('#risk1').children('.check-right').css({'font-size': '22px'});
      passsize = 22;
    }
  }
  $('.check-elem2').children('.check-right').css({'top': '42px', 'line-height': '40px'});
  $('.check-elem3').children('.check-right').css({'top': '45px', 'line-height': '37px'});
      $('.underbar-left').on('click', function() {
        window.location.href = 'seat.html';
      });
      $('.underbar-right').on('click', function() {
        let ticket = {
          dep: departure,
          arr: arrival,
          tnum: trainnum,
          pass: passenger,
          psize: passsize,
          date: date,
          dept: startTime,
          arrt: endTime,
          dur: dur,
          seats: seats,
          ssize: pnum,
          price: formattedString,
          request: 0
        };
        let ticketlist = JSON.parse(localStorage.getItem('ticketlist'));
        ticketlist.push(ticket);
        localStorage.setItem('ticketlist', JSON.stringify(ticketlist));
        let tres = parseInt(localStorage.getItem('ticket-reserve')) + 1;
        localStorage.setItem('ticket-reserve', tres);
        // 타이머
        let now = new Date().getTime();
        let timerEndTime = now + 10 * 60 * 1000;
        localStorage.setItem('timerEndTime', timerEndTime); 
        window.location.href = 'select.html';
      });
  });