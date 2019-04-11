$(document).ready(function() {
  // スライダー
  $(".slider").slick({
    autoplay: true
  });

  // 上へ戻る
  var pagetop = $('.goUp');
    $(window).scroll(function () {
       if ($(this).scrollTop() > 100) {
            pagetop.fadeIn();
       } else {
            pagetop.fadeOut();
            }
       });
       pagetop.click(function () {
           $('body, html').animate({ scrollTop: 0 }, 500);
              return false;
   });
});
