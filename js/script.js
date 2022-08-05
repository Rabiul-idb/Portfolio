
// aside-bar active list
$('.aside-bar ul li').click(function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
});