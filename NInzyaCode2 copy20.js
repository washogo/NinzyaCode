'use strict';

{
  $(function(){
    $('.delete').on('click', function(){
      $('li:last').remove();
    });
  });

  $(function(){
    $('.delete').on('click', function(){
     $('ul li:last-child').remove();
    });
   });
}
/*要素の削除はremove()を使う*/
//最後の番目を指定するにはcssと同じようにlast-childが使える
//または:lastを使うと良い