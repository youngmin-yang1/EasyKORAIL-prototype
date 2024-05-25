$(document).ready(function() {
  localStorage.setItem('adult', "");
  localStorage.setItem('child', "");
  localStorage.setItem('senior', "");
  localStorage.setItem('date', "");
  localStorage.setItem('deparrtime', "");
  localStorage.setItem('seatlist', "");
  localStorage.setItem('car', "");
  let departure = localStorage.getItem('departure');
  let arrival = localStorage.getItem('arrival');
  let station = departure + " -> " + arrival;
  $('#station').text(station);
  let adult = 0;
  let child = 0;
  let senior = 1;

  $('#adult').text(adult);
  $('#child').text(child);
  $('#senior').text(senior);
  $('.underbar-right').attr('id', 'normal');
  $('.passenger-minus').on('click', function() {
    // ID가 있는지 확인하고, 있으면 제거, 없으면 추가
    if ($(this).attr('id') === 'am') {
      if(adult == 0) return;
      adult -= 1;
      $('#adult').text(adult);
      if(adult == 0) $(this).css({'background-color': '#545454'})
      if(adult + child + senior == 5) $('.passenger-plus').css({'background-color': '#D9D9D9'})
      if(adult + senior == 0) $('.underbar-right').removeAttr('id');
    }
    if ($(this).attr('id') === 'cm') {
      if(child == 0) return;
      child -= 1;
      $('#child').text(child);
      if(child == 0) $(this).css({'background-color': '#545454'})
        if(adult + child + senior == 5) $('.passenger-plus').css({'background-color': '#D9D9D9'})
      if(adult + senior == 0) $('.underbar-right').removeAttr('id');
    }
    if ($(this).attr('id') === 'sm') {
      if(senior == 0) return;
      senior -= 1;
      $('#senior').text(senior);
      if(senior == 0) $(this).css({'background-color': '#545454'})
      if(adult + child + senior == 5) $('.passenger-plus').css({'background-color': '#D9D9D9'})
      if(adult + senior == 0) $('.underbar-right').removeAttr('id');
    }
  });
  $('.passenger-plus').on('click', function() {
    // ID가 있는지 확인하고, 있으면 제거, 없으면 추가
    if ($(this).attr('id') === 'ap') {
      if(adult + child + senior == 6) return;
      adult += 1;
      $('#adult').text(adult);
      if(adult == 1) $('#am').css({'background-color': '#D9D9D9'})
      if(adult + child + senior == 6) $('.passenger-plus').css({'background-color': '#545454'})
      if(adult + senior == 1) $('.underbar-right').attr('id', 'normal');
    }
    if ($(this).attr('id') === 'cp') {
      if(adult + child + senior == 6) return;
      child += 1;
      $('#child').text(child);
      if(child == 1) $('#cm').css({'background-color': '#D9D9D9'})
      if(adult + child + senior == 6) $('.passenger-plus').css({'background-color': '#545454'})
      if(adult + senior == 1) $('.underbar-right').attr('id', 'normal');
    }
    if ($(this).attr('id') === 'sp') {
      if(adult + child + senior == 6) return;
      senior += 1;
      $('#senior').text(senior);
      if(senior == 1) $('#sm').css({'background-color': '#D9D9D9'})
      if(adult + child + senior == 6) $('.passenger-plus').css({'background-color': '#545454'})
      if(adult + senior == 1) $('.underbar-right').attr('id', 'normal');
    }
  });
    $('.underbar-left').on('click', function() {
      window.location.href = 'station.html';
    });
    $('.underbar-right').on('click', function() {
      // ID가 있는지 확인하고, 있으면 제거, 없으면 추가
      if ($(this).attr('id') === 'normal') {
        localStorage.setItem('adult', adult);
        localStorage.setItem('child', child);
        localStorage.setItem('senior', senior);
        window.location.href = 'date.html';
      }
    });
});