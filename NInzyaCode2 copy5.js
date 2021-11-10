'use strict';

{
  $(function(){
    const birthday = '1992-07-03';
    $('#birthday').on("change",function(){
      if($(this).val() == birthday) {
        $('h1').fadeIn();
      }
    });
  });
}
/*on()について*/
//対象要素.on(イベント名,セレクタ,データ,関数)
//対象要素.on(イベント名,関数)
/*val()について*/
//HTML要素にval()を実行するだけでOK