let interval;

function timer(seconds) {
    const now = Date.now();
    const then = now + seconds * 1000;
    
    interval = setInterval(()=> {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        if (secondsLeft < 0) {
            clearInterval(interval);
            return;
        }
        
        console.log(secondsLeft)
    }, 1000)
}