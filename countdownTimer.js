import CountdownTimer from './timer.js';

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 25, 2021'),
});
