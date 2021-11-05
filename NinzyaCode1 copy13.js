'use strict';

{
  $(function(){
    $('.target').after(
      '<div class="target">' +
      '<p>ダミーテキストF</p>' +
      '<p>ダミーテキストG</p>' +
      '<p>ダミーテキストH</p>' +
      '<p>ダミーテキストI</p>' +
      '<p>ダミーテキストJ</p>' +
      '</div>'
      );
  })
}
/*要素の後ろに要素を追加するには、after()を使う*/