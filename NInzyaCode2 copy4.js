'use strict';

{
  $(function(){
    $('li').on('click',function(){
      let click_li = $('li').index(this);
      alert(click_li);
    });
  });
}
/*「変数 = $('li').index(this);」はよく使う*/
