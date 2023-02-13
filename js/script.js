
// aside-bar active list
$('.aside-bar ul li').click(function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');

   // for section slide
    $(".section").siblings().removeClass("active");
    const attbr = $('.aside-bar ul li.active a').attr("href");
    if (attbr == '#particles-js') {
        $(".home").addClass("active");
    }else if(attbr == '#about') {
        $(".about").addClass("active");
    }else if(attbr == '#service') {
        $(".service").addClass("active");
    }else if(attbr == '#portfolio') {
        $(".portfolio").addClass("active");
    }else if(attbr == '#contact') {
        $(".contact").addClass("active");
    }else{
       
    }
});

//================================================================

    // hire btn click event
$(".hireBtn").click(function(){
    $(".aside-bar ul li").siblings().removeClass('active');
    $('#forhireBtn').addClass("active");
    $(".contact").addClass("active");
});

// portfolio btn click event
$(".portfolioBtn").click(function(){
    $(".aside-bar ul li").siblings().removeClass('active');
    $('#forportfolioBtn').addClass("active");
    $(".portfolio").addClass("active");
});

//==================================================================

$(".nav-toggler").click(function(){

    // for nav-toggler icon
    $(this).toggleClass("open");
    if($(".nav-toggler").hasClass("open")){
        $(".nav-toggler i").removeClass("fa-bars");
        $(".nav-toggler i").addClass("fa-xmark");
    }else{
        $(".nav-toggler i").removeClass("fa-xmark"); 
        $(".nav-toggler i").addClass("fa-bars");
    }

    // for side bar and section
    $(".aside-bar").toggleClass("open");
    if ($(".aside-bar").hasClass("open")) {
        $(".section").addClass("side");
    }else{
        $(".section").removeClass("side");
    }

});
// ===================================================================

// for responsive 
 const win_width = $(window).width(); 
    if ( win_width > 1000) {
    $(".aside-bar").addClass("open")
    $(".nav-toggler").addClass("open")
    $(".nav-toggler i").addClass("fa-xmark");
    $(".section").addClass("side");
    }
    else{
        $('.aside-bar ul li').click(function(){
            $(".aside-bar").removeClass("open")
            $(".nav-toggler").removeClass("open")
            $(".nav-toggler i").removeClass("fa-xmark");
            $(".nav-toggler i").addClass("fa-bars");
            $(".section").removeClass("side");
        });
    }
 

// ============typing animation ==========

const typed = new Typed(".typing",{
    strings:["","web Designer","Frontend Developer","Freelancer"],
    typeSpeed:100,
    backSpeed:60,
    loop:true,
})

//========================= personal testing ==================================
// const sec = document.querySelectorAll(".section");
// const li = document.querySelectorAll("li");
//  totalsec = sec.length;
// console.log(totalsec);

// for (let i = 0; i < sec.length; i++) {
//     if(li[i].classList.contains("active")){
//         sec[i].classList.remove("back-section");
//         console.log(sec[i]);
//         console.log(li[i]);
//     }
    
// }

// const sectionattr = document.querySelector(".section");
//  function slideSection(sa){
//     const attbr = $('.aside-bar ul li.active a').attr("href");
//     const abr = attbr.split("#");
//     sectionattr.forEach((at) => {
//         const attrid = at.getAttribute("id");
//         if (sa === attrid) {
//             alert("hell");
//         } else {
//             at.removeClass("active");
//         }
//     });
// }


// $('section').siblings.removeClass('active');

// const attbr = $('.aside-bar ul li.active a').attr("href");
//  const abr = attbr.split("#");
//     $('#abr').addClass('active');

// const navli = document.querySelectorAll('.aside-bar ul li.active a');
// console.log(navli);

// const attbr = $('.aside-bar ul li.active a').attr("href");
// const abr = attbr.split("#");
// console.log(attbr);
// console.log(abr);

// const secat = $('.section').attr("id");
// console.log(secat);

// if(abr == secat){
//     alert("hello world");
//     $('.section').addClass('active');
// }
// else{
//     $('.section').removeClass('active');
// }


// const att = $('.aside-bar ul li.active a').attr("href");

// const attid = $('.section').attr("id");
// console.log(attid);

