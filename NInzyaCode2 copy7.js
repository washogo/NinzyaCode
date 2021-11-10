'use strict';

{
  $(function(){
    $('li').on('click',function(){
      if($(this).css('background-color') == 'rgb(255, 0, 0)'){
        $(this).css('background-color', 'rgb(0, 0, 255)');
      }
    });
  });

  // $(function(){
  //   $('li').on('click',function(){
  //     if($(this).css('background-color') == 'rgb(255, 0, 0)'){
  //       $(this).css('background-color', 'rgb(0, 0, 255)');
  //     }
  //   });
  // });
  
}
/*色はrgbで取得できる*/
/*rgbを記述するときはスペースの使い方に注意*/
/*.css()は直接にstyleを書きたいときに使う*/