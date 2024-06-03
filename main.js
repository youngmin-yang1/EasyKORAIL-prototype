$(document).ready(function() {
  let phone = localStorage.getItem('my-number');
  let tres = parseInt(localStorage.getItem('ticket-reserve'));
  let treq = parseInt(localStorage.getItem('ticket-request'));
  let tpur = parseInt(localStorage.getItem('ticket-purchase'));
  $('.reservation-progress').text(phone);
  let totaln = parseInt(localStorage.getItem('totalcount'));
  let ticketlist = JSON.parse(localStorage.getItem('ticketlist'));
  let ticketnum = -1;
  while (totaln > -1) {
      if(ticketlist[totaln] !== "" && ticketlist[totaln].request == 2) {
          recent = ticketlist[totaln].date +" :"+ "<br>" +ticketlist[totaln].dep + " -> " + ticketlist[totaln].arr;
          $('#recent-info').removeClass('hidden');
          $('#No').addClass('hidden');
          $('#recent-info').html(recent);
          ticketnum = ticketlist[totaln].request;
          break;
      } else {
          totaln -= 1;
      }
  }
  $('.tuto-text').css({'top': '-30px'});
  let windowHeight = $(window).height();
  let tm = localStorage.getItem('tutomain');
  if (tm === "AAA") {
      $('.tuto-black').removeClass('hidden');
      $('.tuto-text').removeClass('hidden');
      let ntm = "BBB";
      localStorage.setItem('tutomain', ntm);
  }
  $('.main-body').css({'top': '0px', height: windowHeight - 50});
  $('#R').on('click', function() {
      window.location.href = 'station.html';
  });
  $('#C').on('click', function() {
      window.location.href = 'tickets.html';
  });

  $('#recent-info').on('click', function() {
      localStorage.setItem('ticketindex', totaln);
      window.location.href = 'ticket4.html';
  });

  $('.tuto-black').on('click', function() {
      $('.tuto-black').addClass('hidden');
      $('.tuto-text').addClass('hidden');
  });

  let badge_num = 0;
  for (let i = 0; i < ticketlist.length; i += 1){
      const storedEndTime = localStorage.getItem(`timerEndTime${i}`);
      if (storedEndTime != null) {
          const now = new Date().getTime();
          const timeLeft = storedEndTime - now;
          if (timeLeft <= 5 * 60 * 1000) {
              badge_num += 1;
          }
      }
  }
  if (badge_num == 0) {
      $('.badge').addClass('hidden');
  } else {
      $('.badge').removeClass('hidden').text(badge_num);
      document.head.appendChild(styleElement);
  }
});