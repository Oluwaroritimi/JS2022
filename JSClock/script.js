const secondEl = document.getElementById('seconds');
const minuteEl = document.getElementById('minute');
const hourEl = document.getElementById('hour')
 
//digital
const timeEl = document.getElementById("time");
const datel = document.getElementById("date");

//analog
function Analog() {
  const date = new Date();
  const second = (date.getSeconds() / 60) * 360;
  const minute = (second + date.getMinutes() / 60) * 360;
  const hour = (minute + date.getHours() / 12) * 360;

  setClock(second, minute, hour);
}



function setClock(second, minute, hour) {
  secondEl.style.transform = `rotate(${second}deg)`;
  minuteEl.style.transform = `rotate(${minute}deg)`;
  hourEl.style.transform = `rotate(${hour}deg)`;

  if (second > 350) {
    secondEl.style.transition = `none`;
  } else if (second > 6) {
    secondEl.style.transition = `.3s ease`;
  }
}

// digitalClock
const Months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",

];

const Days = [ "Sun", "Mon", "Tue", "We", "Thu", "Fri", "Sat"];

function DigitalTime() {
    const date = new Date();
    const second = date.getSeconds();
    const minute = date.getMinutes();
    const hour = date.getHours();

    const secondTxt = second <= 9 ? `0${second}` : `${second}`;
    const minuteTxt = minute <= 9 ? `0${minute}` : `${minute}`;

    const hourConvert12 = hour > 12 ? hour - 12 : hour;

    var Tm = '';

    if (hour <= 11) {
      Tm = 'AM'
    } else {
      Tm = 'PM'
    }

    const hourTxt =
      hourConvert12 <= 9 ? `0${hourConvert12}` : `${hourConvert12}`;

    timeEl.innerHTML = `${hourTxt}:${minuteTxt}:${secondTxt} ${Tm}`
}

const date = new Date();
const Month = Months[date.getMonth()];
const day = Days[date.getDay()];
datel.innerHTML= ` ${day}, ${Month}`
// timeEl.innerHTML = `${hourTxt}:${minuteTxt}:${secondTxt}`


// datel.innerHTML = 'Money'

setInterval(() => {
    Analog();
    DigitalTime();
  }, 100);
