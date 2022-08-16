import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const btnStart = document.querySelector('[data-start]');
const inputEl = document.querySelector('input');
const div = document.querySelector('.timer');
const dayEl = div.querySelector('[data-days]');
const houtsEl = div.querySelector('[data-hours]');
const minEl = div.querySelector('[data-minutes]');
const secndsEl = div.querySelector('[data-seconds]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    console.log(new Date());

    const different = selectedDates[0] - new Date();
    console.log(different);

    if (different < 0) {
      Notify.failure('Please choose a date in the future');
      return;
    }

    btnStart.disabled = false;
    const interval = setInterval(() => {
      inputEl.disabled = true;
      btnStart.disabled = true;
      const different = selectedDates[0] - new Date();
      if (different <= 1000) {
        stop();
        inputEl.disabled = false;
        btnStart.disabled = false;
      }
      const { days, hours, minutes, seconds } = convertMs(different);
      dayEl.textContent = pad(days);
      houtsEl.textContent = pad(hours);
      minEl.textContent = pad(minutes);
      secndsEl.textContent = pad(seconds);
    }, 1000);

    function stop() {
      clearInterval(interval);
    }
    function pad(num) {
      return num.toString().padStart(2, '0');
    }

    function convertMs(ms) {
      // Number of milliseconds per unit of time
      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;

      // Remaining days
      const days = Math.floor(ms / day);
      // Remaining hours
      const hours = Math.floor((ms % day) / hour);
      // Remaining minutes
      const minutes = Math.floor(((ms % day) % hour) / minute);
      // Remaining seconds
      const seconds = Math.floor((((ms % day) % hour) % minute) / second);

      return { days, hours, minutes, seconds };
    }

    console.log(convertMs(different)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
  },
};

flatpickr('#datetime-picker', options);
