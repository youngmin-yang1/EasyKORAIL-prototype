$(document).ready(function() {
    let phone = localStorage.getItem('my-number');
    let tres = parseInt(localStorage.getItem('ticket-reserve'));
    let treq = parseInt(localStorage.getItem('ticket-request'));
    let tpur = parseInt(localStorage.getItem('ticket-purchase'));
    $('.reservation-progress').text(phone);
    let totaln = parseInt(localStorage.getItem('totalcount'));
    let ticketlist = JSON.parse(localStorage.getItem('ticketlist'));
    if (totaln > -1) {
      if(ticketlist[totaln] !== "") {
        recent = ticketlist[totaln].date +" :"+ "<br>" +ticketlist[totaln].dep + " -> " + ticketlist[totaln].arr;
        $('#recent-info').removeClass('hidden');
        $('#recent-info').html(recent);
        }
    }
    $('.tuto-text').css({'top': '-30px'});
    let windowHeight = $(window).height();
    let tm = localStorage.getItem('tutomain');
    if (tm === "AAA") {
      $('.tuto-black').removeClass('hidden');
      $('.tuto-text').removeClass('hidden');
      let ntm = "BBB"
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
      window.location.href = 'recentticket.html';
    });

    $('.tuto-black').on('click', function() {
      $('.tuto-black').addClass('hidden');
    $('.tuto-text').addClass('hidden');
    });

  });