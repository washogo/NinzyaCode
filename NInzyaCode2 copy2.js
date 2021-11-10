'use strict';

{
  $(function() {
    let maxHeight = 0;
    $('li').each(function(index, el) {
      if ($(el).height() > maxHeight){
        maxHeight = $(el).height();
      }
    });
    $('li').height(maxHeight);
  });
}
/* jqueryにおける繰り返し処理ではeach*/
/* 
  HTML要素.each(function(index, element) {
 
    繰り返し処理を記述する
 
  })
*/
/*
  $.each(配列・オブジェクト, function(index, value) {
 
    繰り返し処理を記述する
 
  })
  →でも可
*/
/*「一番」「大きい」や「小さい」ではループ処理が必要*/
/*このパターンではカウンタ変数の使用が鉄板*/