$(document).ready(function() {
  let tttc =parseInt(localStorage.getItem('totalcount'));
  tttc += 1;
  localStorage.setItem('totalcount', tttc);
  $('.underbar-right').attr('id', 'normal');
  setTimeout(function() {
    let audioElement = $('#ada');
    $(".success-checkmark").fadeIn();
    $(".success-message").fadeIn();
    audioElement.play().catch(function(error) {
      console.log("자동 재생이 실패했습니다: 사용자 상호 작용이 필요합니다.", error);
  });
  }, 3000);
  setTimeout(function() {
    $('.hidden').removeClass('hidden');
}, 1500);
$('.b').on('click', function() {
  localStorage.setItem('ticketindex', tttc);
  window.location.href = 'request.html';
});
$('.c').on('click', function() {
  window.location.href = 'main.html';
});
$('.d').on('click', function() {
  // ID가 있는지 확인하고, 있으면 제거, 없으면 추가
  window.location.href = 'tickets.html';
});
      
  });