const contacts = {
    "John Doe": "010-4564-7890",
    "Jane Smith": "010-6254-3210",
    "Alice Johnson": "010-1323-4567",
    "Bob Brown": "010-2232-3333",
    "Carol White": "010-5525-6666",
    "David Black": "010-8688-9999",
    "Eve Green": "010-2082-3030",
    "Frank Harris": "010-5095-6060",
    "Grace Lewis": "010-8408-9090",
    "Hank Young": "010-8008-7070",
    "Ivy Clark": "010-5055-4040",
    "Jack Hall": "010-2202-1010",
    "Kim Scott": "010-3533-4444",
    "Leo King": "010-7737-6666",
    "Mia Walker": "010-4544-3333",
    "Nina Baker": "010-7767-8888",
    "Oscar Allen": "010-8488-7777",
    "Pam Lee": "010-3313-2222",
    "Quinn Wright": "010-0060-9999",
    "Ruby Adams": "010-2522-1111",
    "Sam Carter": "010-2172-1212",
    "Tina Miller": "010-3523-2323",
    "Uma Nelson": "010-4344-3434",
    "Vince Parker": "010-2545-4545",
    "Wendy Rivera": "010-6856-5656",
    "Xander Scott": "010-7667-6767",
    "Yara Turner": "010-8708-7878",
    "Zane Harris": "010-9889-8989",
    "Anna Cooper": "010-0909-9090",
    "Ben Collins": "010-0170-1010",
    "Cara Davis": "010-1241-2121",
    "Dan Evans": "010-2394-3456",
    "Ella Foster": "010-3465-4567",
    "Finn Garcia": "010-4536-5678",
    "Gina Hill": "010-5677-6789",
    "Hugo Johnson": "010-6748-7890",
    "Iris Kelly": "010-7189-8901",
    "Jake Lee": "010-8940-9012",
    "Kara Martin": "010-9031-0123",
    "Liam Nelson": "010-0712-1234", 
    "Faker": "010-8884-1557",
    "MooooooooooM": "010-2963-3949",
    "Songlasses": "010-6432-2323"
};

$(document).ready(function() {
  let windowHeight = $(window).height();
  let table = $('.station-list');
  let tableheight = windowHeight - 50;
  table.css({top: 50, height: tableheight});
  $('.login-body').css({height: windowHeight - 110});
  
  let mynum = localStorage.getItem('my-number');
  $('.login-number').on('input', function() {
    const formattedPhone = formatPhoneNumber($(this).val());
    $(this).val(formattedPhone);

    if (isValidPhoneNumber(formattedPhone)) {
      $('.underbar-right').attr('id', 'normal');
    } else {
      $('.underbar-right').removeAttr('id');
    }
  });

  function formatPhoneNumber(value) {
    const phoneNumber = value.replace(/\D/g, '');
    const parts = [];

    if (phoneNumber.length > 3) {
      parts.push(phoneNumber.slice(0, 3));
      if (phoneNumber.length > 7) {
        parts.push(phoneNumber.slice(3, 7));
        parts.push(phoneNumber.slice(7, 11));
      } else {
        parts.push(phoneNumber.slice(3));
      }
    } else {
      parts.push(phoneNumber);
    }

    return parts.join('-');
  }

  function isValidPhoneNumber(value) {
    if (mynum === value) return false;
    const phoneRegex = /^\d{3}-\d{4}-\d{4}$/;
    return phoneRegex.test(value);
  }
  $('.login-send').on('click', function() {
    // ID가 있는지 확인하고, 있으면 제거, 없으면 추가
    $('.station-listback').animate({top: 0}, 500);
  });
  $('.station-elem').on('click', function() {
    let name = $(this).text();
    const phoneNumber = contacts[name];
    $(".login-number").val(phoneNumber);
    if (mynum !== phoneNumber) {
      $('.underbar-right').attr('id', 'normal');
    } else {
      $('.underbar-right').removeAttr('id');
    }

    $('.station-listback').animate({top: '100vh'}, 500);
  });
  $('.underbar-left').on('click', function() {
    window.location.href = 'ticket2.html';
  });
  $('.common-header').on('click', function() {
    $('.station-listback').animate({top: '100vh'}, 500);
  });
  $('.underbar-right').on('click', function () {
    // Check if the button has the 'normal' id, indicating it is active
    if ($(this).attr('id') === 'normal') {
      let ticketlist = JSON.parse(localStorage.getItem('ticketlist'));
      let index = parseInt(localStorage.getItem('ticketindex'));
      ticketlist[index].request = 1;
      localStorage.setItem('ticketlist', JSON.stringify(ticketlist));
      let tres = parseInt(localStorage.getItem('ticket-reserve')) - 1;
      localStorage.setItem('ticket-reserve', tres);
      let treq = parseInt(localStorage.getItem('ticket-request')) + 1;
      localStorage.setItem('ticket-request', treq);
      
      
      // Delay the redirect by 3 seconds
      setTimeout(function () {
        window.location.href = 'tickets.html';
      }, 3000);
    }
  });
  $('.common-header').on('click', function() {
    $('.station-listback').animate({top: '100vh'}, 500);
  });
});