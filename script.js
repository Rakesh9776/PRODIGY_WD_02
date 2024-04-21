// script.js
let timer;
let isRunning = false;
let startTime;
let elapsedTime = 0;

function displayTime(time) {
    const display = document.getElementById('display');
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);
    display.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;
}

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
    } else {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(function() {
            elapsedTime = Date.now() - startTime;
            displayTime(elapsedTime);
        }, 10);
        isRunning = true;
    }
}

function lapReset() {
    if (isRunning) {
        const lapsList = document.getElementById('laps');
        const lapTime = elapsedTime;
        const lapItem = document.createElement('li');
        lapItem.textContent = display.textContent;
        lapsList.appendChild(lapItem);
    } else {
        clearInterval(timer);
        isRunning = false;
        elapsedTime = 0;
        displayTime(elapsedTime);
        const lapsList = document.getElementById('laps');
        lapsList.innerHTML = '';
    }
}

document.getElementById('startStop').addEventListener('click', startStop);
document.getElementById('lapReset').addEventListener('click', lapReset);
