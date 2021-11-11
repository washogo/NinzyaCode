'use strict';

{
  $(function(){
    $('.add').on('click', function(){
      $('.val').append($('input').val());
    });
  });
}
/*append()は対象とした要素の最後に要素を追加することができる*/
//値の取得はval()を使う