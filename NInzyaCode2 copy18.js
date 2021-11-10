'use strict';

{
  // $(function(){
  //   $('input').focus(function(){
  //     $('.anser').text(input.text());
  //   });
  // });

  // $(function(){
  //   $('input').focus(function() {
  //    $('.anser').text($(this).val());
  //   });
  //  });

   $(function(){
    $('input').change(function() {
      $('.anser').text($(this).val());
    });
   });
}
/*フォーカスを判別するにはfocus()を使う*/
/*フォーカスから離れたの指定はchange()を使う*/

