//Menubar
let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".menu");

menu.onclick = ()=> {
    navbar.classList.toggle("active");
    menu.classList.toggle('move');
    bell.classList.remove("active");
}

// //Notification
// let bell = document.querySelector("#bell-icon");
// let notification = document.querySelector(".notification")

// bell.onclick = ()=> {
//     notification.classList.toggle("active");
// }

//Notification
let bell = document.querySelector(".notification");
document.querySelector("#bell-icon").onclick = () => {
    bell.classList.toggle("active");
}


//Swiper
var swiper = new Swiper(".trending-content", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay:{
        delay:5000,
        disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      1168: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
  });

  //Swiper 1
  var swiper = new Swiper(".screenshots-content", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay:{
        delay:5000,
        disableOnInteraction: false,
    },
    breakpoints: {
      768: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      1168: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
  });


