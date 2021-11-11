'use strict';

{
  const ninzya = [5, 6, 3];
  let numbers = ninzya.every((number) => {
    return typeof number === 'number'
  });
  alert(numbers);
}
/*配列の中身全てが条件を満たしてるかどうかを判断するには、everyを使う*/
//everyは真偽値を返す