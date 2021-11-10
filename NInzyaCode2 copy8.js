'use strict';

{
  function ninzya(target){
    if(Number.isInteger(target)){
      alert('整数ですよ！');
    }
  }
  ninzya(34);
}
/*整数か判断するにはNumber.isInteger()を使う*/
//関数かすることで汎用性が増す