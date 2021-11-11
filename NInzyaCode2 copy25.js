'use strict';

{
  $(function () {
    $('input').on('change', function(){
      $('.val').text($('input').val());
    });
  });

  $(function(){
    $('input').on('change', function(){
     $('.val').text($(this).val());
    });
   });
}
/*値がchangeされたかはchangeを使う*/
/*発火されるのはカーソルが離れたとき*/