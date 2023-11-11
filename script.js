// Add your JavaScript for animations here
document.addEventListener("DOMContentLoaded", function () {
    // Set the date we're counting down to
    const countDownDate = new Date("Feb 8, 2037 00:00:00").getTime();
  
    // Update the countdown every 1 second
    const x = setInterval(function () {
  
      // Get the current date and time
      const now = new Date().getTime();
  
      // Calculate the remaining time
      const distance = countDownDate - now;
  
      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      // Display the countdown
      document.getElementById("days").innerHTML = formatNumber(days);
      document.getElementById("hours").innerHTML = formatNumber(hours);
      document.getElementById("minutes").innerHTML = formatNumber(minutes);
      document.getElementById("seconds").innerHTML = formatNumber(seconds);
  
      // If the countdown is over, display a message
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
      }
    }, 1000);
  
    // Format numbers to have leading zeros if needed
    function formatNumber(number) {
      return number < 10 ? "0" + number : number;
    }
  });
  