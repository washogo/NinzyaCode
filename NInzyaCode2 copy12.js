'use strict';

{
  let target_str = "忍者CODE";
  function ninzya_judge (str) {
    if(str.indexOf(target_str) !== -1){
      alert('含む！');
    }
  }
  ninzya_judge("忍者コード");
}
/*文字列を含むかどうかを判断するにはindexOfを使う*/
//このときに対象とする文字列も変数にしておくのがポイント
//indexOf()は引数に対象となる文字列を入れて、含まなければ-1を返す