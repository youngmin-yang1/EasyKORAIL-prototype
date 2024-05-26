$(document).ready(function() {
  localStorage.setItem('date', "");
  localStorage.setItem('deparrtime', "");
  localStorage.setItem('seatlist', "");
  localStorage.setItem('car', "");
  let departure = localStorage.getItem('departure');
  let arrival = localStorage.getItem('arrival');
  let station = departure + " -> " + arrival;
  $('#station').text(station);
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
    if(seniornum > 0 && adultnum > 0) passenger += '<br>';
    if(childnum == 1) {
      passenger += child + " child";
    }
    else passenger += child + " children";
  }
  $('#passenger').html(passenger);

    let num = 1;
    let day = "";

    $('.date-day').click(function() {
      $(this).attr('id', function(index, id) {
        if (id === 'black-unsel' && num == 1) {
          num = 0;
          day = $(this).text();
          $('.underbar-right').attr('id', 'normal');
          $(this).addClass('asdf');
          return 'black-sel';
        }
        if (id === 'blue-unsel' && num == 1) {
          num = 0;
          day = $(this).text();
          $('.underbar-right').attr('id', 'normal');
          $(this).addClass('asdf');
          return 'blue-sel';
        }
        if (id === 'red-unsel' && num == 1) {
          num = 0;
          day = $(this).text();
          $('.underbar-right').attr('id', 'normal');
          $(this).addClass('asdf');
          return 'red-sel';
        }
        if (id === 'black-unsel' && num == 0) {
          num = 0;
          day = $(this).text();
          let theid = $('.asdf').attr('id');
          $('.asdf').removeAttr('id');
          if (theid === 'black-sel') $('.asdf').attr('id', 'black-unsel');
          if (theid === 'blue-sel') $('.asdf').attr('id', 'blue-unsel');
          if (theid === 'red-sel') $('.asdf').attr('id', 'red-unsel');
          $('.asdf').removeClass('asdf');
          $('.underbar-right').attr('id', 'normal');
          $(this).addClass('asdf');
          return 'black-sel';
        }
        if (id === 'blue-unsel' && num == 0) {
          num = 0;
          day = $(this).text();
          let theid = $('.asdf').attr('id');
          $('.asdf').removeAttr('id');
          if (theid === 'black-sel') $('.asdf').attr('id', 'black-unsel');
          if (theid === 'blue-sel') $('.asdf').attr('id', 'blue-unsel');
          if (theid === 'red-sel') $('.asdf').attr('id', 'red-unsel');
          $('.asdf').removeClass('asdf');
          $('.underbar-right').attr('id', 'normal');
          $(this).addClass('asdf');
          return 'blue-sel';
        }
        if (id === 'red-unsel' && num == 0) {
          num = 0;
          day = $(this).text();
          let theid = $('.asdf').attr('id');
          $('.asdf').removeAttr('id');
          if (theid === 'black-sel') $('.asdf').attr('id', 'black-unsel');
          if (theid === 'blue-sel') $('.asdf').attr('id', 'blue-unsel');
          if (theid === 'red-sel') $('.asdf').attr('id', 'red-unsel');
          $('.asdf').removeClass('asdf');
          $('.underbar-right').attr('id', 'normal');
          $(this).addClass('asdf');
          return 'red-sel';
        }
        if (id === 'black-sel') {
          num = 1;
          $('.underbar-right').removeAttr('id');
          $(this).removeClass('asdf');
          return 'black-unsel';
        }
        if (id === 'blue-sel') {
          num = 1;
          $('.underbar-right').removeAttr('id');
          $(this).removeClass('asdf');
          return 'blue-unsel';
        }
        if (id === 'red-sel') {
          num = 1;
          $('.underbar-right').removeAttr('id');
          $(this).removeClass('asdf');
          return 'red-unsel';
        }
      });
    });
    $('.underbar-left').on('click', function() {
      window.location.href = 'passenger.html';
    });
    $('.underbar-right').on('click', function() {
      // ID가 있는지 확인하고, 있으면 제거, 없으면 추가
      if ($(this).attr('id') === 'normal') {
        localStorage.setItem('day', day);
        window.location.href = 'time.html';
      }
    });
});