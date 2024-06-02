$(document).ready(function() {
  let windowHeight = $(window).height();
  $('.ticket-body').css({top: 55, height: windowHeight - 120});
  let firsth = 50;
  let secondh = 50;

  let ticketlist = JSON.parse(localStorage.getItem('ticketlist'));
  for (let i = 0; i < ticketlist.length; i += 1){
    if(ticketlist[i] === "") continue; 
    let date = ticketlist[i].date;
    let dept = ticketlist[i].dept;
    let dep = ticketlist[i].dep;
    let arr = ticketlist[i].arr;
    let newDiv = $('<div></div>').addClass('ticket-elem');
    let newtext = dep + " -> " + arr;
    let newleft = $('<div></div>').addClass('ticket-left').text(date + " " + dept);
    let newtimer = $('<div></div>').addClass('ticket-timer').text(" ");
    let newright = $('<div></div>').addClass('ticket-right').text(newtext);
    if (newtext.length > 25) newright.css({'font-size': '18px'});
    else if (newtext.length > 23) newright.css({'font-size': '20px'});
    else if (newtext.length > 22) newright.css({'font-size': '22px'});
    newDiv.append(newleft);
    newDiv.append(newright);
    newDiv.attr('id', i);
    let request = parseInt(ticketlist[i].request);
    if (request == 0) {
      $('#reserve').append(newDiv);
      firsth += 100;
    }
    else if (request == 1) {
      $('#request').append(newDiv);
      secondh += 100;
    }
  }

  let timerEndTime = localStorage.getItem('timerEndTime');
  let timerElement = document.getElementsByClassName('ticket-timer')[0];
  let timerInterval;
  
  startTimer(timerEndTime);
  
  function startTimer(endTime) {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        const now = new Date().getTime();
        const timeLeft = endTime - now;
  
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timerElement.textContent = '00:00';
            localStorage.removeItem('timerEndTime');
        } else {
            const minutes = Math.floor(timeLeft / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
            timerElement.textContent = `${formatTime(minutes)}:${formatTime(seconds)}`;
        }
    }, 1000);
  }
  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }

  
  $('#request').css({top: firsth});
  $('#cash').css({top: firsth + secondh});

  $('.ticket-elem').on('click', function() {
    let clickedElementId = $(this).attr("id");
    localStorage.setItem('ticketindex', clickedElementId);
    let request = parseInt(ticketlist[clickedElementId].request);
    if(request == 0)window.location.href = 'ticket2.html';
    else if(request == 1) window.location.href = 'ticket3.html';
  });
      $('.underbar-left').on('click', function() {
        window.location.href = 'main.html';
      });
  });
