$(document).ready(function() {
    let windowHeight = $(window).height();
    $('.ticket-body').css({top: 55, height: windowHeight - 120});
    let firsth = 50;
    let secondh = 50;
  
    let ticketlist = JSON.parse(localStorage.getItem('ticketlist'));
    let reserveCount = 0;
    let requestCount = 0;
    
    for (let i = 0; i < ticketlist.length; i += 1){
      if(ticketlist[i] === "") continue; 
      let date = ticketlist[i].date;
      let dept = ticketlist[i].dept;
      let dep = ticketlist[i].dep;
      let arr = ticketlist[i].arr;
      //let newDiv = $('<div></div>').addClass('ticket-elem');
      let newtext = dep + " -> " + arr;
      //let newleft = $('<div></div>').addClass('ticket-left').text(date + " " + dept);
      //let newright = $('<div></div>').addClass('ticket-right').text(newtext);
      if (newtext.length > 25) newright.css({'font-size': '18px'});
      else if (newtext.length > 23) newright.css({'font-size': '20px'});
      else if (newtext.length > 22) newright.css({'font-size': '22px'});
      //newDiv.append(newleft);
      //newDiv.append(newright);
      
      //newDiv.attr('id', i);
      let request = parseInt(ticketlist[i].request);
      if (request == 0) {
        //$('#reserve').append(newDiv);
        reserveCount++;
        //firsth += 100;
      }
      else if (request == 1) {
        //$('#request').append(newDiv);
        requestCount++;
        //secondh += 100;
      }
    }
    
    // Append the default count beside each title
    //$('#reserve .uncommon-header').append(' (0)');
    //$('#request .uncommon-header').append(' (0)');
  
    // Update the counts if there are elements in the lists
    //if (reserveCount > 0) $('#reserve .uncommon-header').text('Reserved (' + reserveCount + ')');
    //if (requestCount > 0) $('#request .uncommon-header').text('Payment requested (' + requestCount + ')');
  
    // Store the counts in localStorage
    localStorage.setItem('ticket-reserve', reserveCount);
    localStorage.setItem('ticket-request', requestCount);
    
    $('#request').css({top: 300});
    $('#train-inf').css({top: 600});
    $('#deparr').text(" - "+ticketlist[0].dep + " -> " + ticketlist[0].arr);
    $('#time').text(" - "+ticketlist[0].date);
    $('#seat').text(" - "+ticketlist[0].tnum + " : " + ticketlist[0].seats);
    $('#plat').text(" - Platform 4");
    $('#platformmap').on('click', function() {
        $('#bigmap').css({'visibility': 'visible'});
    });
    $('#bigmap').on('click', function() {
        $('#bigmap').css({'visibility': 'hidden'});
    });
    $('#train-inf').on('click', function() {
        window.location.href = 'tickets.html';
    });
    $('.underbar-left').on('click', function() {
      window.location.href = 'main.html';
    });
  });