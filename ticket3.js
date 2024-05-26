$(document).ready(function() {
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
      window.location.href = 'tickets.html';
    });
      $('.underbar-left').on('click', function() {
        window.location.href = 'tickets.html';
      });
      $('.underbar-right').on('click', function() {
        ticketlist[index] = "";
        localStorage.setItem('ticketlist', JSON.stringify(ticketlist));
        let treq = parseInt(localStorage.getItem('ticket-request')) - 1;
      localStorage.setItem('ticket-request', treq);
        window.location.href = 'tickets.html';
      });
  });