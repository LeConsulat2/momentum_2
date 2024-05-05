const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    // Log time in a single line format
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
// Call the getClock function every 1000 milliseconds (1 second)
setInterval(getClock, 1000);
