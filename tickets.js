$(document).ready(function() {
  let windowHeight = $(window).height();
  $('.ticket-body').css({top: 55, height: windowHeight - 120});
  let firsth = 50;
  let secondh = 50;
  let thirdh = 50;

  let ticketlist = JSON.parse(localStorage.getItem('ticketlist'));
  let reserveCount = 0;
  let requestCount = 0;
  let purchaseCount = 0;
  let timerIntervals = {}; // 각 타이머의 interval을 저장할 객체

  for (let i = 0; i < ticketlist.length; i += 1){
    if(ticketlist[i] === "") continue; 
    let date = ticketlist[i].date;
    let dept = ticketlist[i].dept;
    let dep = ticketlist[i].dep;
    let arr = ticketlist[i].arr;
    let newDiv = $('<div></div>').addClass('ticket-elem');
    let newtext = dep + " -> " + arr;
    let newleft = $('<div></div>').addClass('ticket-left').text(date + " " + dept);    
    let newright = $('<div></div>').addClass('ticket-right').text(newtext);
    if (newtext.length > 25) newright.css({'font-size': '18px'});
    else if (newtext.length > 23) newright.css({'font-size': '20px'});
    else if (newtext.length > 21) newright.css({'font-size': '22px'});
    newright.css({'top': '50px'});
    newDiv.append(newleft);
    newDiv.append(newright);
    newDiv.attr('id', i);
    let request = parseInt(ticketlist[i].request);
    if (request == 0) {
      const timerEndTime = localStorage.getItem('timerEndTime');
      const newtimer = $('<div></div>').addClass('ticket-timer').text("Time remaining: ");
      newtimer.attr('id', `timer${i}`);
      newDiv.append(newtimer);
      if (localStorage.getItem(`timerEndTime${i}`) == null) {
        localStorage.setItem(`timerEndTime${i}`, timerEndTime);
      }
      const storedEndTime = localStorage.getItem(`timerEndTime${i}`);
      $('#reserve').append(newDiv);
      reserveCount++;
      firsth += 140;
      const timerElement = document.getElementById(`timer${i}`);
      startTimer(timerElement,storedEndTime, i);
    }
    else if (request == 1) {
      const timerEndTime = localStorage.getItem('timerEndTime');
      const newtimer = $('<div></div>').addClass('ticket-timer').text("Time remaining: ");
      newtimer.attr('id', `timer${i}`);
      newDiv.append(newtimer);
      if (localStorage.getItem(`timerEndTime${i}`) == null) {
        localStorage.setItem(`timerEndTime${i}`, timerEndTime);
      }
      const storedEndTime = localStorage.getItem(`timerEndTime${i}`);
      newDiv.removeClass('ticket-elem');
      newDiv.addClass('ticket-elem2');
      $('#request').append(newDiv);
      requestCount++;
      secondh += 140;
      const timerElement = document.getElementById(`timer${i}`);
      startTimer(timerElement,storedEndTime, i);
    }
    else if (request == 2) {
      // Write Payment here
      $('#purchase').append(newDiv);
      purchaseCount++;
      thirdh += 100;
    }
  }

  function startTimer(timerElem, endTime, timerId) {
    clearInterval(timerIntervals[timerId]);
    timerIntervals[timerId] = setInterval(() => {
        const now = new Date().getTime();
        const timeLeft = endTime - now;

        if (timeLeft <= 0) {
            clearInterval(timerIntervals[timerId]);
            timerElem.textContent = "Time remaining: " + '00:00';
            localStorage.removeItem(`timerEndTime${timerId}`);
            ticketlist[timerId] = "";
            localStorage.setItem('ticketlist', JSON.stringify(ticketlist));
        } else {
            const minutes = Math.floor(timeLeft / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
            timerElem.textContent = "Time remaining: " + `${formatTime(minutes)}:${formatTime(seconds)}`;
        }

        if (timeLeft <= 5 * 60 * 1000) {
          timerElem.style.color = '#BF1E1A';
        }

        if (timeLeft <= 1 * 60 * 1000 && timeLeft >= 59 * 1000) { 
          $('#popup').removeClass('hide')
        }
        
        $('#popup').on('click', function() {
          $('#popup').addClass('hide');
        });

    }, 1000);
  }

  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }


  // Append the default count beside each title
  $('#reserve .common-header').append(' (0)');
  $('#request .common-header').append(' (0)');
  $('#purchase .common-header').append(' (0)');

  // Update the counts if there are elements in the lists
  if (reserveCount > 0) $('#reserve .common-header').text('Reserved (' + reserveCount + ')');
  if (requestCount > 0) $('#request .common-header').text('Payment requested (' + requestCount + ')');
  if (purchaseCount > 0) $('#purchase .common-header').text('Purchased (' + purchaseCount + ')');

  // Store the counts in localStorage
  localStorage.setItem('ticket-reserve', reserveCount);
  localStorage.setItem('ticket-request', requestCount);
  localStorage.setItem('ticket-purchase', purchaseCount);


  $('#request').css({top: firsth});
  $('#purchase').css({top: firsth + secondh});

  $('.ticket-elem').on('click', function() {
    let clickedElementId = $(this).attr("id");
    localStorage.setItem('ticketindex', clickedElementId);
    let request = parseInt(ticketlist[clickedElementId].request);
    if(request == 0) window.location.href = 'ticket2.html';
    else if(request == 1) window.location.href = 'ticket3.html';
    else if(request == 2) window.location.href = 'ticket4.html'; // Make window move here
  });
  $('.ticket-elem2').on('click', function() {
    let clickedElementId = $(this).attr("id");
    localStorage.setItem('ticketindex', clickedElementId);
    let request = parseInt(ticketlist[clickedElementId].request);
    if(request == 0) window.location.href = 'ticket2.html';
    else if(request == 1) window.location.href = 'ticket3.html';
    else if(request == 2) window.location.href = 'ticket4.html'; // Make window move here
  });


  $('.underbar-left').on('click', function() {
    window.location.href = 'main.html';
  });
});

