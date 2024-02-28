// Set the giveaway duration in seconds
var giveawayDuration = 60 * 60 * 24 * 7; // 1 week

// Function to update the time remaining
function updateTimeRemaining() {
  // Get the current time
  var now = new Date().getTime();

  // Calculate the time remaining
  var timeRemaining = giveawayDuration - Math.floor((now - startTime) / 1000);

  // Display the time remaining in the element with id="giveaway-timer"
  document.getElementById("giveaway-timer").textContent = formatTime(timeRemaining);

  // If the giveaway is finished, reset the start time
  if (timeRemaining <= 0) {
    startTime = new Date().getTime();
  }
}

// Function to format the time remaining as days, hours, minutes, and seconds
function formatTime(time) {
  var days = Math.floor(time / (60 * 60 * 24));
  var hours = Math.floor((time % (60 * 60 * 24)) / (60 * 60));
  var minutes = Math.floor((time % (60 * 60)) / 60);
  var seconds = Math.floor(time % 60);
  return days + "d " + hours + "h " + minutes + "m " + seconds + "s";
}

// Initialize the start time
var startTime = new Date().getTime();

// Update the time remaining every 1 second
setInterval(updateTimeRemaining, 1000);