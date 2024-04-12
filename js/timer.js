// set the date we're counting down to
var target_date = new Date('April, 15, 2024').getTime();
 
// variables for time units
var days, hours, minutes, seconds;
 
// get tag element
var countdown = document.getElementById('countdown');
 
// update the tag with id "countdown" every 1 second
setInterval(function () {
 
    // find the amount of "seconds" between now and target
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;
 
    // do some time calculations
    days = parseInt(seconds_left / 86400);
    seconds_left = seconds_left % 86400;
     
    hours = parseInt(seconds_left / 3600);
    seconds_left = seconds_left % 3600;
     
    minutes = parseInt(seconds_left / 60);
    seconds = parseInt(seconds_left % 60);
     
    // format countdown string + set tag value
    countdown.innerHTML = '<span class="days">' + days +  ' <b>Days</b></span> <span class="hours">' + hours + ' <b>Hours</b></span> <span class="minutes">'
    + minutes + ' <b>Minutes</b></span> <span class="seconds">' + seconds + ' <b>Seconds</b></span>';  
 
}, 1000);





document.addEventListener("DOMContentLoaded", function() {
    // Select the toggle button
    var toggleButton = document.querySelector('.custom-toggler');
    
    // Add click event listener to toggle the active class on the menu icon
    toggleButton.addEventListener('click', function() {
        // Toggle the active class on the menu icon
        toggleButton.querySelector('.menu-icon').classList.toggle('active');
        
        // Toggle the aria-expanded attribute value
        var expanded = toggleButton.getAttribute('aria-expanded') === 'true' || false;
        toggleButton.setAttribute('aria-expanded', !expanded);
    });
});