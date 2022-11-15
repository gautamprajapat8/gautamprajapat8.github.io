import { sk, sky } from "./resources/skills.js";



$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    }
    else {
      $(".navbar").removeClass("sticky");
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
    strings: ["Java Back-End Developer", "Front End Web Developer", "Full Stack Web Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: ["Java Back-End Developer", "Front End Web Developer", "Full Stack Web Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // owl carousel script

  if (screen.width <= 500) {
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
  else if (screen.width > 501 && screen.width <= 900) {
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
  else {
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

if (screen.width >= 501 && screen.width <= 690) {
  document.getElementById("skills-content").innerHTML = "";
  document.getElementById("skills-content").innerHTML = (sk());
  // console.log(sk());
}
if (screen.width >= 691 && screen.width <= 947) {
  document.getElementById("skills-content").innerHTML = "";
  document.getElementById("skills-content").innerHTML = (sky());
  // console.log(sky());
}

//For getting the calendar data
GitHubCalendar(".calendar", "gautamprajapat8", { responsive: true });



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






// fro project section

var project = [
  {
    Imag: "Online_Trip_Management_System.jpg",
    ProjTitle: "Online Trip Management System (Travel Junky)",
    ProjDiscription: "This is Java_backend of online trip management System where the admin can manage all features, And the customer can also perform some task such as view routes, hotels, and etc.",
    TeachStack: "Java | Hibernate | MySQL | Springboot ",
    WorkDiscription: "It was collaborative project built by a team of 5 executed in 5 days and I was the Contributors in this.",
    live: "https://drive.google.com/file/d/1o0eMBOdv14uMpjXMojD8_8PZEQr1XaEz/view?usp=sharing",
    github: "https://github.com/prayagp8/kindhearted-afternoon-7542"
  },
  {
    Imag: "Course_monitoring_system.jpg",
    ProjTitle: "Course monitoring system",
    ProjDiscription: "This is a (mini) project for Course monitoring system, where Course Monitoring System will keep the records of all the courses, batches, faculties, and the day-wise update for every batch. It will also help the Faculty Head to maintain the course plan.",
    TeachStack: "Java | MySQL | JDBC ",
    WorkDiscription: "It was my individual project executed in 5 days.",
    live: "https://drive.google.com/file/d/1BtURKD-fof1Qc0eGCBrq4xYKPbNcGlou/view?usp=sharing",
    github: "https://github.com/gautamprajapat8/Course-monitoring-system"
  },
  {
    Imag: "lyst.jpg",
    ProjTitle: "lyst.com (clone)",
    ProjDiscription: "lyst is an e-commerce website for buying various types of Faison related products. We have tried our best to clone of the website.",
    TeachStack: "HTML | CSS | JAVASCRIPT | ES6",
    WorkDiscription: "It was collaborative project built by a team of 6 executed in 5 days and I was the co-leader in this.",
    live: "https://glowing-panda-1c570f.netlify.app/",
    github: "https://github.com/rhaegar7996/CW_Web19_lyst"
  },
  {
    Imag: "desktime.jpg",
    ProjTitle: "desktime.com (clone)",
    ProjDiscription: "deskTime is The ultimate all-in-one automatic time tracker website and We have tried our best to clone the website.",
    TeachStack: "HTML | CSS | JAVASCRIPT | ES6",
    WorkDiscription: "It was collaborative project built by a team of 5 executed in 5 days and I was the group's team leader in this.",
    live: "https://gautamprajapat8.github.io/quirky-eyes-4143/",
    github: "https://github.com/gautamprajapat8/quirky-eyes-4143"
  },
  // {
  //   Imag: "studentManagementSystem.jpg",
  //   ProjTitle: "student management system",
  //   ProjDiscription: "The student management system is a web Application where we can perform many operations on Student data. I have tried my best to make the website.",
  //   TeachStack: "HTML | CSS | JAVASCRIPT | ES6",
  //   WorkDiscription: "It was individual project which is given by masai school built by me in 1 day.",
  //   live: "https://gautamprajapat8.github.io/studentManagementSystem/",
  //   github: "https://github.com/gautamprajapat8/studentManagementSystem"
  // },
  // {
  //   Imag: "youtubeClone.jpg",
  //   ProjTitle: "YouTube (clone)",
  //   ProjDiscription: "This is YouTube clone web Application where we can watch videos. I have tried my best to make the website.",
  //   TeachStack: "HTML | CSS | JAVASCRIPT | ES6 | API",
  //   WorkDiscription: "It was individual project which is given by masai school built by me in 1 day.",
  //   live: "https://gautamprajapat8.github.io/YouTube_clone/",
  //   github: "https://github.com/gautamprajapat8/YouTube_clone"
  // },
  // {
  //   Imag: "jobApp.jpg",
  //   ProjTitle: "jobApp",
  //   ProjDiscription: "This is for the job apply web Application where we can perform many operations on job applied data. I have tried my best to make the website.",
  //   TeachStack: "HTML | CSS | JAVASCRIPT | ES6 | API",
  //   WorkDiscription: "It was individual project which is given by masai school built by me in 1 day.",
  //   live: "https://gautamprajapat8.github.io/jobApp/",
  //   github: "https://github.com/gautamprajapat8/jobApp",
  // },
  // {
  //   Imag: "liveClock.jpg",
  //   ProjTitle: "Live Clock",
  //   ProjDiscription: "This is live Clock web Application where we can see the live Time. I have tried my best to make the website.",
  //   TeachStack: "HTML | CSS | JAVASCRIPT",
  //   WorkDiscription: "It was my first project .",
  //   live: "https://gautamprajapat8.github.io/clock/",
  //   github: "https://github.com/gautamprajapat8/clock"
  // },

];


let x=false;

project.forEach(function (data) {

  let card = document.createElement("div");
  card.setAttribute("class", "card");

  let box = document.createElement("div");
  box.setAttribute("class", "box");

  let img = document.createElement("img");
  img.src = "/resources/" + data.Imag;
  img.alt = data.project_title;

  let project_ditels = document.createElement("div");
  project_ditels.setAttribute("class", "project-ditels");

  let project_title = document.createElement("h3");
  project_title.setAttribute("class", "project-title");
  project_title.innerText = data.ProjTitle;

  let p = document.createElement("p");
  p.innerText = data.ProjDiscription;

  let h4 = document.createElement("h4");
  h4.innerText = "Tech-Stack";

  let h5 = document.createElement("h5");
  h5.innerText = data.TeachStack;


  let li = document.createElement("li");
  li.innerText = data.WorkDiscription;

  let btn = document.createElement("div");
  btn.setAttribute("class", "btn");


  let live = document.createElement("a");
  live.href = data.live;
  live.target = "_blank";
  live.innerText = "LIVE ↗️";

  let github = document.createElement("a");
  github.href = data.github;
  github.target = "_blank";
  github.innerText = " GITHUB ↗️";

  btn.append(live, github);
  project_ditels.append(project_title, p, h4, h5, li, btn);

  box.append(img, project_ditels);

  card.append(box);

  // console.log(card);

  document.querySelector("#carousel").append(card);
});

// For open resume in another window
// document.querySelector(".resumeOpen").addEventListener("click", open);
// function open() {
//   window.location.href="https://gautamprajapat8.github.io/resources/Gautam_Kumar_Resume.pdf";
// };

// alert(window. innerWidth);