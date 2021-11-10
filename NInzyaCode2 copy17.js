'use strict';

{
  // $(function(){
  //   $('.clone').click(function(){
  //     $('<li>忍者CODE</li>').clone().appendTo('ul');
  //   });
  // });
  // }
  $(function(){
    $('.clone').on('click', function(){
     let li_clone = $('li').eq(0).clone();
     $('ul').append(li_clone);
    });
   });

}
/*colne()は特定の要素を複製する*/
/*eq()は引数に要素のインデックス番号を入れて、何番目化の要素を取得する*/
/*$(対象の要素).append(追加する要素)と$(追加する要素).appendTo(対象の要素)とがある*/