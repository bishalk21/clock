let hoursElement = document.getElementById("hours");
let minutesElement = document.getElementById("minutes");
let secondsElement = document.getElementById("seconds");

currentTime();

function currentTime() {
  let d = new Date();
  let hour = d.getHours();
  let minutes = d.getMinutes();
  let seconds = d.getSeconds();

  hoursElement.textContent = hour + " : ";
  minutesElement.textContent = minutes + " : ";
  secondsElement.textContent = seconds;

  let timeMoment = setTimeout(function () {
    currentTime();
  }, 1000);
}
