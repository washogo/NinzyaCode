'use strict';

{
  // $(function() {
  //   $(window).on('resize', function() {
  //     let width = $(this).width();
  //     $('.val').text(width);
  //   });
  // });

  $(function(){
    $(window).on('resize', function(){
     $('.val').text($(this).width());
    });
   });
}
/*リサイズのイベントはresize()で設定できる*/
/*横幅の取得は様々であるが、width()で取得できる*/
