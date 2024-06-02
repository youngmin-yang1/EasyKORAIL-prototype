$(document).ready(function() {
    let phone = localStorage.getItem('my-number');
    let tres = parseInt(localStorage.getItem('ticket-reserve'));
    let treq = parseInt(localStorage.getItem('ticket-request'));
    $('.reservation-progress').text(phone);
    if (treq > 0) {
      let text = "";
      if (treq == 1) text = "1 ticket requested";
      else text = treq + " tickets requested"
      $('#info').text(text);
    }
    else if (tres > 0) {
      let text = "";
      if (tres == 1) text = "1 ticket reserved";
      else text = tres + " tickets reserved"
      $('#info').text(text);
    }
    else {
      $('#info').text("No ticket reserved");
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
      $('.tuto-black').on('click', function() {
        $('.tuto-black').addClass('hidden');
      $('.tuto-text').addClass('hidden');
      });
  });