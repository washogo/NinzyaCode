'use strict';

{
  const ninzya = [2, 34, 561, 5, 14];
  // const futaketa = ninzya.filter((item) => {
  //   return String(item).length == 2;
  // });
  // alert(futaketa);

  const futaketa = ninzya.filter(function(item){
    return String(item).length == 2;
  });
  alert(futaketa);
}
/*配列に対して特定の条件で絞り込みたい時は、filterを使う*/