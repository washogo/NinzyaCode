'use strict';

{
  $(function(){
    $('.x-scroll').on('scroll', function(){
      let scroll_value = $(this).scrollLeft();
      $('.scroll-val').text(scroll_value);
    });
  });

  // $(function(){
  //   $('.x-scroll').on('scroll', function(){
  //    let scroll_val = $(this).scrollLeft();
  //    $('.scroll-val').text(scroll_val);
  //   });
  //  });
   
}
/*横スクロールはscrollLeft()で、縦スクロールはscrollTop()で取得できる。*/