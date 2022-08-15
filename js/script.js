
// aside-bar active list
$('.aside-bar ul li').click(function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
   
    $(".section").siblings().removeClass("active");
   // $(".section").siblings().addClass("back-section");
    
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

// ============typing animation ==========

const typed = new Typed(".typing",{
    strings:["","web Designer","Frontend Developer","ui Designer"],
    typeSpeed:100,
    backSpeed:60,
    loop:true,
})


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

