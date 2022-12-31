//selectors
let secondsSpan = document.querySelector("#seconds");
let minutesSpan = document.querySelector("#minutes");
let hoursSpan = document.querySelector("#hours");
let daysSpan = document.querySelector("#days");

function countDown(){
let currentDate = new Date();
let endOfYear = new Date(`01 January ${currentDate.getFullYear()+1} 00:00:00`);
let difference = (endOfYear - currentDate) / 1000; // seconds from milliseconds
let secondsLeft = Math.floor(difference) % 60;
let minutesLeft = Math.floor(difference / 60) % 60;
let hoursLeft = Math.floor(difference / 60 / 60) % 24; // % accounts for the number of hours passed already
let daysLeft = Math.floor(difference / 60 / 60 / 24);
secondsSpan.innerText = secondsLeft < 10 ? ` 0${secondsLeft}`: ` ${secondsLeft}`;
minutesSpan.innerText = minutesLeft < 10 ? ` 0${minutesLeft}`: ` ${minutesLeft}`;
hoursSpan.innerText = hoursLeft < 10 ? ` 0${hoursLeft}`: ` ${hoursLeft}`;
daysSpan.innerText = daysLeft < 10 ? ` 0${daysLeft}`: ` ${daysLeft}`;

};



setInterval(countDown, 1000)

