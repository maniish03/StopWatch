let hr = (min = sec = ms = "0" + 0), // declare and initialize the variables for hour, minute, second and millisecond
 startTimer; // declare a variable for the timer

const startBtn = document.querySelector(".start"), // get the start button element
 stopBtn = document.querySelector(".stop"), // get the stop button element
 resetBtn = document.querySelector(".reset"); // get the reset button element

startBtn.addEventListener("click", start); // add a click event listener to the start button and call the start function
stopBtn.addEventListener("click", stop); // add a click event listener to the stop button and call the stop function
resetBtn.addEventListener("click", reset); // add a click event listener to the reset button and call the reset function

function start() {
 startBtn.classList.add("active"); // add the active class to the start button
 stopBtn.classList.remove("stopActive"); // remove the stopActive class from the stop button

 startTimer = setInterval(() => { // assign a setInterval function to the startTimer variable
 ms++; // increment the millisecond by 1
 ms = ms < 10 ? "0" + ms : ms; // add a leading zero if the millisecond is less than 10

 if (ms == 100) { // if the millisecond reaches 100
 sec++; // increment the second by 1
 sec = sec < 10 ? "0" + sec : sec; // add a leading zero if the second is less than 10
 ms = "0" + 0; // reset the millisecond to 00
 }
 if (sec == 60) { // if the second reaches 60
 min++; // increment the minute by 1
 min = min < 10 ? "0" + min : min; // add a leading zero if the minute is less than 10
 sec = "0" + 0; // reset the second to 00
 }
 if (min == 60) { // if the minute reaches 60
 hr++; // increment the hour by 1
 hr = hr < 10 ? "0" + hr : hr; // add a leading zero if the hour is less than 10
 min = "0" + 0; // reset the minute to 00
 }

 putValue(); // call the putValue function to update the display
 }, 10); //1000ms = 1s
}

function stop() {
 startBtn.classList.remove("active"); // remove the active class from the start button
 stopBtn.classList.add("stopActive"); // add the stopActive class to the stop button
 clearInterval(startTimer); // clear the interval of the timer
}
function reset() {
 startBtn.classList.remove("active"); // remove the active class from the start button
 stopBtn.classList.remove("stopActive"); // remove the stopActive class from the stop button
 clearInterval(startTimer); // clear the interval of the timer
 hr = min = sec = ms = "0" + 0; // reset all variables to 00
 putValue(); // call the putValue function to update the display
}

function putValue() { 
 document.querySelector(".millisecond").innerText = ms; // set the text of the millisecond span to ms
 document.querySelector(".second").innerText = sec; // set the text of the second span to sec
 document.querySelector(".minute").innerText = min; // set the text of the minute span to min
 document.querySelector(".hour").innerText = hr; // set the text of the hour span to hr
}
