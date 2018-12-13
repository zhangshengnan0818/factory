/**
 * Created by Amh on 2018-09-10.
 */
//$("body").css("width", $(window).width());
/*footer切换-star*/
$('.footer').on('click', 'a', function () {
  if (!$(this).hasClass("active")) {
    var picSrc = $(this).children('img').attr('src');
    var str = picSrc.split("@")[0];
    picSrc = str.substring(0, str.length - 1) + "@" + picSrc.split("@")[1];
    $(this).children('img').attr('src', picSrc);
//      添加目标元素CSS
    $(this).parent().addClass('active');
//      找到要替换元素src
    var pic2 = $(this).parent().siblings('.active');
//      移除CSS
    pic2.removeClass('active');
//      重置路径
    var picSrc2 = pic2.children().children('img').attr('src');
    picSrc2 = picSrc2.split("@")[0] + "2@" + picSrc.split("@")[1];
    //console.log(picSrc2);
    pic2.children().children('img').attr('src', picSrc2);
  } else {
    return;
  }
})
/*footer切换-end*/
/*tab切换-star*/
$('.tab_head').on('click', 'a', function (e) {
  e.preventDefault();
  $this = $(this);
  if (!$this.hasClass('active')) {
    $this.addClass('active');
    $this.parent().siblings().children().removeClass('active');
    var m=$this.attr('href');
    $(m).addClass('current');
    //$(m).fadeIn(1000);
    $(m).siblings().removeClass('current');
    //$(m).siblings().fadeOut(1);
    var menu_d=$('.droplistmenu');
    menus(menu_d);
  } else {
    return;
  }
})
function menus(menu){
  if(!menu.is(":hidden")) {
    $('.mask').css('display', 'none');
    menu.slideUp();
  }
}
/*tab切换-end*/

/*select切换-star*/
function sel(){
  $this = $('#zpms');
  var m=$this.find("option:selected").val();
  //console.dir($(m));
  $(m).addClass('current');
  $(m).siblings().removeClass('current');
}
/*select切换-end*/

/*动态生成元素绑定手风琴效果 */
$(".menu_container").on('click',".menu_title",function(){
  $this=$(this);
  var menu_c = $this.siblings(".menu_content");
  var btn=$this.children().children('.close');
  if(menu_c.is(":hidden")){
    menu_c.slideDown();
    btn.html('收起');
    $this.children().children('i').removeClass("active");
  }else{
    menu_c.slideUp();
    btn.html('展开');
    $this.children().children('i').addClass("active");
  }
});


/*下拉菜单选择*/
$('.droplists').on('click','a',function(){
  $this=$(this);
  var menu_d=$this.siblings('ul[class$=listmenu]');
  menu(menu_d);
});
$('.chosedropdown').on('click',function(){
  $this=$(this);
  var menu_d=$this.parent().next('ul[class$=listmenu]');
  menu(menu_d);
});
function menu(menu){
  if(menu.is(":hidden")){
    $('.mask').css('display','block');
    $('ul[class$=listmenu]').not(menu).slideUp();
    menu.slideDown();
    $('.mask,.close').on('click',function(){
      $('.mask').css('display','none');
      menu.slideUp();
    });
    menu.on('click','a',function(){
      $(this).addClass('yet').children('i.xz').css('display','block');
      $(this).parent().siblings().children('a').removeClass('yet').children('i.xz').css('display','none');
      menu.slideUp();
      $('.mask').css('display','none');
    });
  }else{
    menu.slideUp();
    $('.mask').css('display','none');
  }
}

/*点星*/
$('.pjClick').on('click','i',function(){
  //alert($(this).index()+1);
  $(this).parent('.pj').prev('input.pjx').val($(this).index()+1);
  if($(this).attr('class')==="kxing"){
    $(this).attr('class','xing').prevAll('i').attr('class','xing');
    $(this).children('img').attr('src','img/xing.png');
    $(this).prevAll('i').children('img').attr('src','img/xing.png');
  }else{
    $(this).nextAll('i').attr('class','kxing');
    $(this).nextAll('i').children('img').attr('src','img/kxing.png');
  }

});

