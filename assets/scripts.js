
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
setInterval(updateCountdown, 1000 * 60 * 60);

$(function () {
  $('[data-toggle="tooltip"]').tooltip()

  // Updte the countdown when the page has loaded
  updateCountdown();
})