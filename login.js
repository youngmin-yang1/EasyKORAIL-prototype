$(document).ready(function() {
  let windowHeight = $(window).height();
  $('.login-body').css({height: windowHeight - 50});
  $('.login-number').on('input', function() {
    const formattedPhone = formatPhoneNumber($(this).val());
    $(this).val(formattedPhone);

    if (isValidPhoneNumber(formattedPhone)) {
      $('.login-send').removeAttr('id');
      $('.login-send').attr('id', 'act');
    } else {
      $('.login-send').removeAttr('id');
      $('.login-send').attr('id', 'unact');
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
    const phoneRegex = /^\d{3}-\d{4}-\d{4}$/;
    return phoneRegex.test(value);
  }

  $('.login-send').on('click', function() {
    if ($(this).attr('id') === 'act') {
      $('.login-number').prop('disabled', true);
      $('.login-send').removeAttr('id');
      $('.login-send').attr('id', 'unact');
      $('.login-info').removeClass('hidden');
      $('.login-code').removeClass('hidden');
      $('.login-verify').removeClass('hidden');
      $('.login-error').addClass('hidden');
      $('.login-autobox').removeClass('hidden');
      $('.login-autotext').removeClass('hidden');
      $('.login-message').animate({top: '0px'}, 500);
    }
  });

  $('.login-code').on('input', function() {
    let value = $(this).val();
    if (isValidCode(value)) {
      $('.login-verify').removeAttr('id');
      $('.login-verify').attr('id', 'act');
      $('.login-message').animate({top: '-100px'}, 500);
    } else {
      $('.login-verify').removeAttr('id');
      $('.login-verify').attr('id', 'unact');
    }
  });

  function isValidCode(value) {
    const phoneRegex = /^\d{6}$/;
    return phoneRegex.test(value);
  }

  $('.login-verify').on('click', function() {
    if ($(this).attr('id') === 'act') {
      let userInput = $('.login-code').val();
      if (userInput === "123456") {
        let number = $('.login-number').val();
        localStorage.setItem('my-number', number);
        localStorage.setItem('ticket-reserve', '0');
        localStorage.setItem('ticket-request', '0');
        let tickets = [];
        localStorage.setItem('ticketlist', JSON.stringify(tickets));
        window.location.href = 'main.html';
      } else {
        $('.login-code').val('');
        $('.login-number').prop('disabled', false);
        $('.login-send').removeAttr('id');
        $('.login-send').attr('id', 'act');
        $('#second').addClass('hidden');
        $('.login-code').addClass('hidden');
        $('.login-verify').addClass('hidden');
        $('.login-error').removeClass('hidden');
        $('.login-autobox').addClass('hidden');
        $('.login-autotext').addClass('hidden');
      }
    }
  });

  $('.login-autobox').on('click', function() {
    $('.login-check').removeClass('hidden');
  });

  $('.login-check').on('click', function() {
    $('.login-check').addClass('hidden');
  });
});