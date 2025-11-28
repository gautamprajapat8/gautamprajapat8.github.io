$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar-navbar").addClass("sticky");
    }
    else {
      $(".navbar-navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    }
    else {
      $(".scroll-up-btn").removeClass("show");
    }
  });


  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar-navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar-navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: [
              ".NET Backend Developer",
              "ASP.NET Core Developer",
              "C# Developer",
              "Full Stack Web Developer (.NET + JS)",
              "REST API Developer"
            ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

    var typed1 = new Typed(".typing-2", {
    strings: [
              ".NET Backend Developer",
              "ASP.NET Core Developer",
              "C# Developer",
              "Full Stack Web Developer (.NET + JS)",
              "REST API Developer"
            ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });



});




//For getting the calendar data
GitHubCalendar(".calendar", "gautamprajapat8", { responsive: true ,tooltips: true});



// total git commit Live data

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}
sleep(100).then(() => {
  let x = document.querySelector(".contrib-number").innerText;
  
  if(x>0)
  {
    window.location.reload();
  }
  
  x = x.split(" ");
  x = (+(x[0])--);
  x = x - (x % 10);

  
  document.querySelector("#contrib-number").innerText = "";

  document.querySelector("#contrib-number").innerText = x + "+";
})






document.querySelector(".resumeDow1").addEventListener("click", function()
{
  window.open("resources/Gautam_Kumar_Resume.pdf", "_blank");
});


document.querySelector(".resumeDow2").addEventListener("click", function()
{
  window.open("resources/Gautam_Kumar_Resume.pdf", "_blank");
});


document.querySelector(".resumeDow3").addEventListener("click", function()
{
  window.open("resources/Gautam_Kumar_Resume.pdf", "_blank");
});




document.getElementById("send").addEventListener("click", function(){
  alert("message sent");
  // window.location.replace("https://gautamprajapat8.github.io/");
  Location.reload();
});


