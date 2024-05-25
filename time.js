$(document).ready(function() {
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

  let num = 1;
  let deparrtime = "";
  let price = "";

  $('.time-elem').click(function() {
    $(this).attr('id', function(index, id) {
      if (num == 1 && id !== 'cannot') {
        num = 0;
        $('.underbar-right').attr('id', 'normal');
        let childDiv = $(this).children('.time-dur');
        deparrtime = childDiv.text();
        childDiv = $(this).children('.time-price');
        price = childDiv.text();
        $(this).children('.time-more').removeClass('hidden');
        return 'done';
      }
      if (id === 'done' && num == 0) {
        num = 1;
        $(this).removeAttr('id');
        $(this).children('.time-more').addClass('hidden');
        $('.underbar-right').removeAttr('id');
      }
    });
  });
  $('.time-more').click(function() {
    localStorage.setItem('deparrtime', deparrtime);
    localStorage.setItem('price', price);
    window.location.href = 'time2.html';
  });
    $('.underbar-left').on('click', function() {
      window.location.href = 'date.html';
    });
    $('.underbar-right').on('click', function() {
      // ID가 있는지 확인하고, 있으면 제거, 없으면 추가
      if ($(this).attr('id') === 'normal') {
        localStorage.setItem('deparrtime', deparrtime);
        localStorage.setItem('price', price);
        window.location.href = 'seat.html';
      }
    });
});