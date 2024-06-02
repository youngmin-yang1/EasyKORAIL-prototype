$(document).ready(function() {
  localStorage.setItem('seatlist', "");
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
  let time =  localStorage.getItem('deparrtime');
  $('#time').text(time);

  let pnum = adultnum + childnum + seniornum;
  let gnum = 0;
  let num = pnum;
  if (pnum == 1) $('.instruction-text').text("Select your seat. (" + gnum + "/" + pnum + ")");
  else $('.instruction-text').text("Select your seats. (" + gnum + "/" + pnum + ")");
  let tableHeight = $('.seattable').height();
  $('.seattable').css({'top': '90px', height: tableHeight - 90});
  let seatlist = [];
  let oldcar = localStorage.getItem('car');
  let car;
  if(oldcar === "") car = 5;
  else car = parseInt(oldcar);
  $('.seat-bar').children('.seat-textbox').text(car);
  $('.seat-bar').children('.seat-left').children('.seat-textbox').text(car - 1);
  $('.seat-bar').children('.seat-right').children('.seat-textbox').text(car + 1);
  if (car == 1) $('.seat-left').css({'display': 'none'});
  if (car == 9) $('.seat-right').css({'display': 'none'});

  $('.seat-each').click(function() {
    let inputtext = $(this).text();
    $(this).attr('id', function(index, id) {
      if (id === 'normal' && num > 0) {
        num -= 1;
        gnum += 1;
        seatlist.push(inputtext);
        if (pnum == 1) $('.instruction-text').text("Select your seat. (" + gnum + "/" + pnum + ")");
        else $('.instruction-text').text("Select your seats. (" + gnum + "/" + pnum + ")");
        if (num == 0) $('.underbar-right').attr('id', 'normal');
        return 'done';
      }
      if (id === 'done') {
        num += 1;
        gnum -= 1;
        let index = seatlist.indexOf(inputtext);
        seatlist.splice(index, 1);
        if (pnum == 1) $('.instruction-text').text("Select your seat. (" + gnum + "/" + pnum + ")");
        else $('.instruction-text').text("Select your seats. (" + gnum + "/" + pnum + ")");
        if (num == 1) $('.underbar-right').removeAttr('id');
        return 'normal';
      }
    });
  });
  $('.seat-left').on('click', function() {
    seatlist = [];
    gnum = 0;
    num = pnum;
    car -= 1;
    $(".seat-each").each(function() {
      $(this).removeAttr("id").attr("id", "normal");
  });
    if (car == 1) $('.seat-left').css({'display': 'none'});
    if (car == 8) $('.seat-right').css({'display': 'flex'});
    $('.seat-bar').children('.seat-textbox').text(car);
    $('.seat-bar').children('.seat-left').children('.seat-textbox').text(car - 1);
    $('.seat-bar').children('.seat-right').children('.seat-textbox').text(car + 1);
    if (pnum == 1) $('.instruction-text').text("Select your seat. (" + gnum + "/" + pnum + ")");
    else $('.instruction-text').text("Select your seats. (" + gnum + "/" + pnum + ")");
  });
  $('.seat-right').on('click', function() {
    seatlist = [];
    gnum = 0;
    num = pnum;
    car += 1;
    $(".seat-each").each(function() {
      $(this).removeAttr("id").attr("id", "normal");
  });
    if (car == 9) $('.seat-right').css({'display': 'none'});
    if (car == 2) $('.seat-left').css({'display': 'flex'});
    $('.seat-bar').children('.seat-textbox').text(car);
    $('.seat-bar').children('.seat-left').children('.seat-textbox').text(car - 1);
    $('.seat-bar').children('.seat-right').children('.seat-textbox').text(car + 1);
    if (pnum == 1) $('.instruction-text').text("Select your seat. (" + gnum + "/" + pnum + ")");
    else $('.instruction-text').text("Select your seats. (" + gnum + "/" + pnum + ")");
  });
    $('.underbar-left').on('click', function() {
      window.location.href = 'time.html';
    });
    $('.underbar-right').on('click', function() {
      // ID가 있는지 확인하고, 있으면 제거, 없으면 추가
      if ($(this).attr('id') === 'normal') {
        localStorage.setItem('seatlist', JSON.stringify(seatlist));
        localStorage.setItem('car', car);
        window.location.href = 'check.html';
      }
    });
    $('#homebutton').on('click',function(){
      window.location.href = 'main.html';
    });
});