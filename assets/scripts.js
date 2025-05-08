
var countDownDate = new Date("Apr 19, 2025 00:00:00").getTime();

function updateCountdown() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));

    // Output the result in an element with id="countdown"
    document.getElementById("countdown").innerHTML = "Nog " + days + " dagen tot de sponsorloop!";
}

// Update the countdown every hour
// setInterval(updateCountdown, 1000 * 60 * 60);


let slideIndex = 0;
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slideshow");
  if (slides.length > 0) {
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
  }
}


$(function () {
  $('[data-toggle="tooltip"]').tooltip()

  showSlides();

  // // Update the countdown when the page has loaded
  // updateCountdown();
})