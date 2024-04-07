// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides((slideIndex += n));
// }

// function currentSlide(n) {
//   showSlides((slideIndex = n));
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");

//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].computedStyleMap.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace("active", "");
//   }
//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += "active";
// }

var i = 0;
var images = [];
var time = 3000;

images[0] = "images/slide1.jpg";
images[1] = "images/bg1.jpg";
images[2] = "images/bg2.jpg";

function changeImg() {
  document.slide.src = images[i];
  updateDots();
  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout(changeImg, time);
}

function updateDots() {
  var dots = document.querySelectorAll(".dots");
  for (let j = 0; j < dots.length; j++) {
    if (j === i) {
      dots[j].style.opacity = "1";
    } else {
      dots[j].style.opacity = "0.5";
    }
  }
}

window.onload = changeImg;
