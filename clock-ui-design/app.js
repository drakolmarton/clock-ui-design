const deg = 6;
const h = document.querySelector('#h');
const m = document.querySelector('#m');
const s = document.querySelector('#s');

setInterval(() => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg;
  
  h.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
  m.style.transform = `rotateZ(${mm}deg)`;
  s.style.transform = `rotateZ(${ss}deg)`;
});