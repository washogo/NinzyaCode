'use strict';

{
  $(function(){
    $('.trigger').click(function(){
      $('.target').fadeIn('slow');
    });
  })
}
/*display:noneが付与されている要素のフェードインの表出は、fadeIn()を使う*/
//オプションには、slow,normal,fast,〇〇ミリ秒などを引数に入れる