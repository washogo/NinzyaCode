'use strict';

{
  // $(function(){
  //   $('[data-delete]').eq(0).on('click' , function(){
  //     $('[data-delete-target]').removeAttr('id');
  //   });
  //   $('[data-delete]').eq(1).on('click' , function(){
  //     $('[data-delete-target]').removeClass('blue');
  //   });
  // });

  $(function(){
    $('[data-delete]').on('click', function(){
     let my_attr = $(this).attr('data-delete');
     $('[data-delete-target]').attr(my_attr, '');
    });
   });
}
/*idを削除したいときはremoveAttr()を使う*/
/*classを削除したいときはremoveClass()を使う*/
/*attr()は属性値を操作することができる*/