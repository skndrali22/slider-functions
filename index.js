

document.getElementById("sl-box1").style.display = "block";
function showSlider(divNumber) {
  if (divNumber === 1) {
    document.getElementById("sl-box1").style.display = "block";
    document.getElementById("sl-box2").style.display = "none";
    document.getElementById("sl-box3").style.display = "none";
    document.getElementById("sl-box4").style.display = "none";
  } else if (divNumber === 2) {
    document.getElementById("sl-box1").style.display = "none";
    document.getElementById("sl-box2").style.display = "block";
    document.getElementById("sl-box3").style.display = "none";
    document.getElementById("sl-box4").style.display = "none";
  } else if (divNumber === 3) {
    document.getElementById("sl-box1").style.display = "none";
    document.getElementById("sl-box2").style.display = "none";
    document.getElementById("sl-box3").style.display = "block";
    document.getElementById("sl-box4").style.display = "none";
  } else if (divNumber === 4) {
    document.getElementById("sl-box1").style.display = "none";
    document.getElementById("sl-box2").style.display = "none";
    document.getElementById("sl-box3").style.display = "none";
    document.getElementById("sl-box4").style.display = "block";
  }
}

var swiper = new Swiper(".mySwiper", {
  //         autoplay: {
  //         delay: 2000,
  //     disableOnInteraction: false,
  // },
  loop: "true",
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
