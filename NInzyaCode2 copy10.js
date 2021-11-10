'use strict';

{
  let today = new Date();
  function month_judge(month) {
    if (month == today.getMonth() + 1) {
      alert('今月の月です！');
    } else{
      alert('今月の月ではありません');
    }
  }
  month_judge(11);

  const now   = new Date();       
  const now_month = now.getMonth() + 1;    //月

  function month_judge( month ){
  if( now_month == month ){
    alert("今月の月です！");
  }else{
    alert("今月の月ではありません！");
  }
  }

  month_judge(3);
}
/*new.Date()はDateクラスをインスタンス化することで、
オブジェクトにはデフォルトで今日が入る*/
//プログラミングは0から始まるため、＋１しなければならない