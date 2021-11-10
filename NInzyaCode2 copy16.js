'use strict';

{
  let my_array = [2, 19, 59, 203, 5];
  // alert(Math.max.apply(null,my_array)); //203
  alert(Math.max(...my_array)); //203
  
}
/*配列の最大値を求めるには、Math.maxを使う*/
//ただし使用は限定的にすること
//reduceを使う方が良い