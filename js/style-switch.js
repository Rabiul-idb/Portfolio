// ======================style- switch toggle start ====================

        const styleSwitchToggle = document.querySelector(".style-switch-toggle");
          styleSwitchToggle.addEventListener("click", ()=>{
            document.querySelector(".style-switch").classList.toggle("open");
        });

    // hide style-switch on scroll
        window.addEventListener("scroll", ()=>{
           if(document.querySelector(".style-switch").classList.contains("open")){
                 document.querySelector(".style-switch").classList.remove('open');
            }
        });

      

//================= theme color change start  ===========================
 
 const alternateStyle = document.querySelectorAll(".alternate-style");

 function SetThemeColor(selectThemeColor){
    alternateStyle.forEach((style)=>{
        const atbr = style.getAttribute("title");
        if(selectThemeColor === atbr){
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled","true");
        }
    });
 }

//============== theme light and dark mode =============

const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", ()=>{
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
   
    if(document.body.classList.contains("dark")){
        dayNight.setAttribute("title", "light mode");
    }
    else{
        dayNight.setAttribute("title", "dark mode");
    }
});

  

window.addEventListener("load", () =>{
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else{
        dayNight.querySelector("i").classList.add("fa-moon");
    }
});


//=============================================================================================





// jquery

        // style- switch toggle start

            //$('.style-switch-toggle').click(function(){
            //    $('.style-switch').toggleClass('open');
            //});

        // hide style-switch on scroll

            // $(window).scroll(function(){
            //     $('.style-switch').removeClass('open');
            // });
