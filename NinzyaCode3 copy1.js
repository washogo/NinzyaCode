'use strict';

{
  $(function(){
    let sum = 0;
    for(let i = 0; i < $('li').length; i++){
      if(i !== 2){
        sum += $('li').eq(i).width();
      }
    }
    $('.anser').text(sum);
  });

  // $(function(){
  //   let li_total = 0;
  //   $('li').each(function(index, el) {
  //     if(index !== 2){
  //       li_total += $(el).width();
  //       $('.anser').text(li_total);
  //     }
  //   });
  // });
}
/*HTML要素に対する繰り返し処理はeach(function(index, element)){}を使う*/
/*配列やオブジェクトに対してはelementではなくvalueを使う*/