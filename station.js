$(document).ready(function() {
  localStorage.setItem('departure', "");
  localStorage.setItem('arrival', "");
  localStorage.setItem('adult', "");
  localStorage.setItem('child', "");
  localStorage.setItem('senior', "");
  localStorage.setItem('date', "");
  localStorage.setItem('deparrtime', "");
  localStorage.setItem('seatlist', "");
  localStorage.setItem('car', "");
  let departure = "";
  let arrival = "";
  let num = 0;
  let windowHeight = $(window).height();
  let table = $('.station-list');
  let tableheight = windowHeight - 50;
  table.css({top: 50, height: tableheight});

  $('#departure').on('click', function() {
    // ID가 있는지 확인하고, 있으면 제거, 없으면 추가
    num = 0;
    $('.common-header').text('Departure Station');
    $('.station-listback').animate({top: 0}, 500);
  });
  $('#arrival').on('click', function() {
    // ID가 있는지 확인하고, 있으면 제거, 없으면 추가
    num = 1;
    $('.common-header').text('Arrival Station');
    $('.station-listback').animate({top: 0}, 500);
  });

  $('.station-elem').on('click', function() {
    if (num == 0) {
      departure = $(this).text();
      $('#departure').css({'color': 'black'});
      $('#departure').text(departure);
    } else {
      arrival = $(this).text();
      $('#arrival').css({'color': 'black'});
      $('#arrival').text(arrival);
    }
    $('.station-listback').animate({top: '100vh'}, 500);
    if (departure !== '' && arrival !== '' && departure !== arrival) $('.underbar-right').attr('id', 'normal');
    else $('.underbar-right').removeAttr('id');
  });
  $('.underbar-left').on('click', function() {
    window.location.href = 'main.html';
  });
  $('.underbar-right').on('click', function() {
      // ID가 있는지 확인하고, 있으면 제거, 없으면 추가
      if ($(this).attr('id') === 'normal') {
        localStorage.setItem('departure', departure);
        localStorage.setItem('arrival', arrival);
        window.location.href = 'passenger.html';
      }
    });
  $('.common-header').on('click', function() {
    $('.station-listback').animate({top: '100vh'}, 500);
  });
});