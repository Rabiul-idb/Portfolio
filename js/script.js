
// aside-bar active list
$('.aside-bar ul li').click(function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
});



// ============typing animation ==========

var typed = new typed(".typing",{
    strings:["web designer","frontend developer","psd / figma file conversion"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
})

