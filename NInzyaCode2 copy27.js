'use strict';

{
  // $(function(){
  //   $('input').keyup(function(){
  //     $('.val').text($(this).val());
  //   });
  // });

  $(function(){
    $('input').on('keyup', function(){
     $('.val').text($(this).val());
    });
   });
   
}
/*リアルタイム感のある入力反映をするにはkeyupが有効*/