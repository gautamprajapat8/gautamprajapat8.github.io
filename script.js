import{sk, sky}from "./resources/skills.js";



$(document).ready(function ()
{
  $(window).scroll(function ()
  {
    // sticky navbar on scroll script
    if (this.scrollY > 20)
    {
      $(".navbar").addClass("sticky");
    }
    else
    {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500)
    {
      $(".scroll-up-btn").addClass("show");
    }
    else
    {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function ()
  {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: ["Java Back-End Developer","Front End Developer", "Full Stack Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: ["Java Back-End Developer", "Front End Developer", "Full Stack Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // owl carousel script

  if(screen.width<=500)
  {
    $(".carousel").owlCarousel({
      margin: 10,
      loop: true,
      autoplay: true,
      autoplayTimeOut: 2000,
      autoplayHoverPause: true,
      responsive: 
      {
        0: {
          items: 1,
          nav: false,
        },
        
      },
    });
  }
  else if(screen.width >501 && screen.width<=900)
  {
    $(".carousel").owlCarousel({
      margin: 15,
      loop: true,
      autoplay: true,
      autoplayTimeOut: 2000,
      autoplayHoverPause: true,
      responsive: 
      {
        0: {
          items: 1,
          nav: false,
        },
        600: {
          items: 2,
          nav: false,
        },
        
      },
    });
  }
  else
  {
    $(".carousel").owlCarousel({
      margin: 20,
      loop: true,
      autoplay: true,
      autoplayTimeOut: 2000,
      autoplayHoverPause: true,
      responsive: 
      {
        0: {
          items: 1,
          nav: false,
        },
        600: {
          items: 2,
          nav: false,
        },
        1000: {
          items: 3,
          nav: false,
        },
      },
    });
  }


});

if(screen.width >=501 && screen.width <=690)
{
  document.getElementById("skills-content").innerHTML="";
  document.getElementById("skills-content").innerHTML=(sk());
  // console.log(sk());
}
if(screen.width>=691 && screen.width<=947)
{
  document.getElementById("skills-content").innerHTML="";
  document.getElementById("skills-content").innerHTML=(sky());
  // console.log(sky());
}

//For getting the calendar data
GitHubCalendar(".calendar", "gautamprajapat8", { responsive: true });
// GitHubCalendar(".calendar", "brajesh623", { responsive: true });