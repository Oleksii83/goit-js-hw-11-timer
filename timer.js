export default function CountdownTimer({ selector, targetDate }) {
  const refs = {
    timeDate: document.querySelector(`${selector}`),
    timeDays: document.querySelector(`${selector} [data-value="days"]`),
    timeHours: document.querySelector(`${selector} [data-value=hours]`),
    timeMins: document.querySelector(`${selector} [data-value=mins]`),
    timeSecs: document.querySelector(`${selector} [data-value=secs]`),
  };

  const updateTime = (days, hours, mins, secs) => {
    refs.timeDays.textContent = days;
    refs.timeHours.textContent = hours;
    refs.timeMins.textContent = mins;
    refs.timeSecs.textContent = secs;
  };

  function pad(value) {
    return String(value).padStart(2, '0');
  }

  window.onload = function () {
    setInterval(() => {
      const time = targetDate - Date.now();
      const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
      const hours = pad(
        Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      );
      const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
      const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
      updateTime(days, hours, mins, secs);
    }, 1000);
  };
}

// function getTimeComponents(time) {
//   const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
//   const hours = pad(
//     Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//   );
//   const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//   const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

//   return { days, hours, mins, secs };
// }
