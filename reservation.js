$(document).ready(function() {
    let num = 0;
    let windowHeight = $(window).height();
    let table = $('.reservation-progress-table');
    let tableheight = windowHeight - 100
    table.css({height: tableheight});
    table.css({top: -tableheight + 40});
    let dummyheight = (tableheight - 675) / 2;
    $('.progress-dummy').css({height: dummyheight});
    let instheight = $('.instruction').height();
    let bodyheight = tableheight - instheight - 70;
    $('.reservation-body').css({'top': '40px', height: bodyheight});

    $('.reservation-progress-more').click(function() {
      const targetElement = $(this);

      if (num == 1) {
        targetElement.animate({top: '40px'}, 500);
        table.animate({top: -tableheight + 40}, 500);
        setTimeout(function() {
          targetElement.css('transform', 'scaleY(1)');
        }, 500);
        num = 0;
      } else {
        targetElement.css({'top': 'auto', bottom: windowHeight - 90});
        table.css({'top': 'auto', bottom: windowHeight - 40});
        targetElement.animate({bottom: '0px'}, 500);
        table.animate({bottom: '50px'}, 500);
        setTimeout(function() {
          $('.reservation-progress-more').css('transform', 'scaleY(-1)');
        }, 500);
        num = 1;
      }
    });
  });