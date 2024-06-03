$(document).ready(function() {
  let windowHeight = $(window).height();
  $('.tickettable').css({'top': '50px', height: windowHeight - 118});
  let index = parseInt(localStorage.getItem('ticketindex'));
  let ticketlist = JSON.parse(localStorage.getItem('ticketlist'));
  $('#common').css({'background-color': '#D9D9D9'})
  $('#departure').text(ticketlist[index].dep);
  $('#arrival').text(ticketlist[index].arr);
  $('#passenger').html(ticketlist[index].pass);
  $('#date').text(ticketlist[index].date);
  $('#dep-time').text(ticketlist[index].dept);
  $('#arr-time').text(ticketlist[index].arrt);
  $('#duration').text(ticketlist[index].dur);
  $('#seats').html(ticketlist[index].seats);
  $('#price').text(ticketlist[index].price);
  $('#trainnum').text(ticketlist[index].tnum);
  let pnum = ticketlist[index].ssize;
  let lever = 1;
  if(pnum > 3) {
    $('#risk2').removeClass('check-elem1');
    $('#risk2').addClass('check-elem3');
  } else if (pnum > 1){
    $('#risk2').removeClass('check-elem1');
    $('#risk2').addClass('check-elem2');
  }
  $('#risk1').children('.check-right').css({'font-size': ticketlist[index].psize});
  $('.check-elem2').children('.check-right').css({'top': '42px', 'line-height': '40px'});
  $('.check-elem3').children('.check-right').css({'top': '45px', 'line-height': '37px'});
    $('.ticket-rr').on('click', function() {
      ticketlist[index].request = 0;
      localStorage.setItem('ticketlist', JSON.stringify(ticketlist));
      let tres = parseInt(localStorage.getItem('ticket-reserve')) + 1;
      localStorage.setItem('ticket-reserve', tres);
      let treq = parseInt(localStorage.getItem('ticket-request')) - 1;
      localStorage.setItem('ticket-request', treq);
      localStorage.removeItem(`timerEndTime${index}`);
      window.location.href = 'tickets.html';
    });
    $('#Q').on('click', function() {
      if (lever == 1) {
      $('#QB').removeClass('hidden');
      $('#Q').addClass('hidden');
      lever = 0;
      }
    });
    $('#M').on('click', function() {
      if (lever == 1) {
      $('#MB').removeClass('hidden');
      $('#M').addClass('hidden');
      lever = 0;
      }
    });
    $('#QB').on('click', function() {
      $('#Q').removeClass('hidden');
      $('#QB').addClass('hidden');
      lever = 1;
    });
    $('#MB').on('click', function() {
      $('#M').removeClass('hidden');
      $('#MB').addClass('hidden');
      lever = 1
    });
    let assistance = parseInt(localStorage.getItem('ticket-assistance'));
    if (assistance == 1) {
      $('.ticket-request').text('Assistance Request sent');
  }
  if(assistance == 0){
    $('.ticket-request').on('click', function() {
      window.location.href = 'assistance.html';
    });

  }
  
      $('.underbar-left').on('click', function() {
        window.location.href = 'tickets.html';
      });
  });