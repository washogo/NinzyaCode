'use strict';

{
  // let text1 = "リンゴ・バナナ";
  // let text2 = "レモン";
  // let fruits = (text1 + text2).replace("バナナ","");
  
  // alert(fruits);

  let text1 = "リンゴ・バナナ・ミカン";
  let text2 = "レモン";
  let fruits = (text1 + text2).replace("バナナ","梨");
  let more_fruits = (fruits).replace('レモン','・レモン')
  
  alert(more_fruits);
}
