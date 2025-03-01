// BG Color Change

const bgColors = ["bg-bg", "bg-slate-200", "bg-green-200", 'bg-red-200', 'bg-green-200', "bg-blue-200", "bg-black"]
let currentBgColor = 0;

const bodyColor = document.getElementById("bg-color");


document.getElementById("color-chnage-btn").addEventListener('click', function () {

    bodyColor.classList.remove(bgColors[currentBgColor]);
    currentBgColor = (currentBgColor + 1) % bgColors.length;
    bodyColor.classList.add(bgColors[currentBgColor]);

});

// Current Date & Time
let currentDateElement = document.getElementById('current-date');
let currentDate = new Date();
let options = { year: 'numeric', month: 'short', day: 'numeric' };
let date = currentDate.toLocaleDateString('en-US', options);
currentDateElement.textContent = date;

let currentDay = document.getElementById('current-day');
let optionsDay = { weekday: 'short' };
let day = currentDate.toLocaleDateString("en-us", optionsDay);
currentDay.innerText = day + ",";



// Button 

const completeBtn = document.querySelectorAll(".complete-btn");

const taskCount = document.getElementById('left-count')
taskCount.innerText = completeBtn.length.toString().padStart(2, '0');


for (let i = 0; i < completeBtn.length; i++) {
    const element = completeBtn[i];
    element.addEventListener("click", function (event) {
        event.target.classList.remove('cursor-pointer', "hover:bg-primary")
        event.target.classList.add('cursor-not-allowed', 'opacity-20');
        event.target.disabled = true;

        let count = parseInt(taskCount.innerText);
        count = count - 1;
        taskCount.innerText = count.toString().padStart(2, '0');

        // Total Count
        const countTask = document.getElementById('count-task');
        let countNumber = parseInt(countTask.innerText);
        countNumber = countNumber + 1;
        countTask.innerText = countNumber.toString().padStart(2, '0');

        alert('Task added');



        // log-container

        const cardBox = completeBtn[i].closest('.card-box');
        const titleText = cardBox.querySelector('.title').innerText;

        // let currentTime = currentDate.toLocaleTimeString("en-US");
        let currentTime = new Date();
        let formattedTime = currentTime.toLocaleTimeString("en-US");

        const logContainer = document.getElementById('log-container');
        const logText = document.createElement('div');
        logText.innerHTML = `
        <p class="p-3 bg-bg rounded-lg mb-5">You have Complete ${titleText} at ${formattedTime}</p>

        `
        logContainer.appendChild(logText);


    })
}

document.getElementById('clear-history').addEventListener('click', function () {
    document.getElementById('log-container').innerHTML = "";
})








