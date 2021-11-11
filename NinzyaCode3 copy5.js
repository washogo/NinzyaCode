'use strict';

{
  const fruits = ["りんご", "みかん", "バナナ"];
  function judge (str) {
    return fruits.indexOf(str) >= 0?true:false;
    }
  alert(judge("みかん"));
}
/*配列に含まれているかどうかはindexOfやincludesが使える*/
//含む場合は >=0 ,含まない場合は ==-1　となる