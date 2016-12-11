import '../stylesheets/javascript30.scss';

const hourHand = document.querySelector('.hour');
const minuteHand = document.querySelector('.minute');
const secondHand = document.querySelector('.second');

function setDate() {
  const now = new Date();  
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const hoursDegrees = ((hours / 12) * 360) + 90;
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  hourHand.style.transform = `translateX(-49%) rotate(${hoursDegrees}deg)`;
  minuteHand.style.transform = `translateX(-49%) rotate(${minutesDegrees}deg)`;
  secondHand.style.transform = `translateX(-49%) rotate(${secondsDegrees}deg)`;

}

setInterval(setDate,1000);