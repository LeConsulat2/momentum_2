const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    // Log time in a single line format
    clock.innerText =(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
}

getClock();
// Call the getClock function every 1000 milliseconds (1 second)
setInterval(getClock, 1000);
