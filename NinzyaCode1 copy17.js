'use strict';

{
  $(function(){
    $('.trigger').click(function(){
      $('.target').fadeOut("slow");
    });
  })
}
/*要素のフェードアウトはfadeOut()*/
//引数はfadeInと変わらない