let interval;
const timeDisplayer = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');
//const form = document.querySelector('[name="customForm"]');

function timer(seconds) {
    clearInterval(interval); // clear any Interval in progress
    document.customForm.reset();
    const now = Date.now();
    const then = now + seconds * 1000;
    displaySecondsLeft(seconds);
    displayEndDate(then);
    
    interval = setInterval(()=> {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        if (secondsLeft < 0) {
            clearInterval(interval);
            return;
        }    
      displaySecondsLeft(secondsLeft);
    }, 1000);   
}

function displaySecondsLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secondsLeft = seconds % 60;
    const displayInfo =  timeDisplayer.textContent = `${minutes < 10 ? 0 : ''}${minutes}:${secondsLeft < 10 ? 0 : ''}${secondsLeft}`;
    timeDisplayer.textContent = displayInfo;
    document.title = displayInfo;
}

function displayEndDate(timestamp) {
    const endDate = new Date(timestamp);
    let hours = endDate.getHours();
    const adjustedHour = hours > 12 ? hours - 12 : hours;
    const minutes = endDate.getMinutes();
    endTime.textContent = `Be back here at ${adjustedHour < 10 ? 0 : ''}${adjustedHour}:${minutes < 10 ? 0 : ''}${minutes}`;
}

function addTime() {
    const secsToBeAdded = this.dataset.time;
    timer(secsToBeAdded);
}

function addMinutes(e) {
    e.preventDefault();
    const minutes = this.minutes.value;
    const seconds = minutes * 60;
    if(!Number(minutes)) return;
    timer(seconds);
    this.reset();
}

document.customForm.addEventListener('submit', addMinutes);
buttons.forEach(button => button.addEventListener('click', addTime));