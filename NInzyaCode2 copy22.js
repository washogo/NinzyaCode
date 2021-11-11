'use strict';

{
  // $(function(){
  //   $(window).scroll(function(){
  //     let scroll_val = $(this).scrollTop();
  //     $('.scroll-val').text(scroll_val);
  //   });
  // });

  $(function(){
    $(window).on('scroll', function(){
     $('.scroll-val').text($(this).scrollTop());
    });
   });
}
/*画面のスクローつ位置を取得するときにはscrollTop()を使う*/
//$(this)は$(window)のことを指す