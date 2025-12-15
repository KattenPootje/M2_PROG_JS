let daysEL = document.getElementById("days");
let hoursEL = document.getElementById("hours");
let minuteEL = document.getElementById("minutes");
let secondsEL = document.getElementById("seconds");

function CountDown(){
    let now = new Date();

    let release = new Date("November 19, 2026");

    let difference = release-now;
    console.log(difference);
    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    daysEL.innerText = days + " days";
    hoursEL.innerText = hours + " hours";
    minuteEL.innerText = minutes + " minutes";
    secondsEL.innerText = seconds + " seconds";
}

setInterval(CountDown, 1000);