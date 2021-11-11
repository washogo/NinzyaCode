'use strict';

{
//   $(function(){
//     $('.double').dblclick(function(){
//       alert('ダブルclickされました！');
//     });
//   });

$(function(){
  $('.double').on('dblclick', function(){
   alert("ダブルclickされました！");
  });
 });
}
/*ダブルクリックはdblclickを使う*/