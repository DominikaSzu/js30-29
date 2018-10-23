let interval;
const timeDisplayer = document.querySelector('.display__time-left');

function timer(seconds) {
    const now = Date.now();
    const then = now + seconds * 1000;
    displaySecondsLeft(seconds);
    
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
}