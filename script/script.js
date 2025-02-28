// BG Color Change

const bgColors = ["bg-bg", "bg-slate-200", "bg-green-200", 'bg-red-200', 'bg-green-200', "bg-blue-200", "bg-black"]
let currentBgColor = 0;

const bodyColor = document.getElementById("bg-color");


document.getElementById("color-chnage-btn").addEventListener('click', function () {

    bodyColor.classList.remove(bgColors[currentBgColor]);
    currentBgColor = (currentBgColor + 1) % bgColors.length;
    bodyColor.classList.add(bgColors[currentBgColor]);

});

// Current Date
const currentDateElement = document.getElementById('current-date');
const currentDate = new Date();
const options = { year: 'numeric', month: 'short', day: 'numeric' };
const date = currentDate.toLocaleDateString('en-US', options);
currentDateElement.textContent = date;

const currentDay = document.getElementById('current-day');
const optionsDay = { weekday: 'short' };
const day = currentDate.toLocaleDateString("en-us", optionsDay);
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

        // total Count
        const countTask = document.getElementById('count-task');
        let countNumber = parseInt(countTask.innerText);
        countNumber = countNumber + 1;
        countTask.innerText = countNumber.toString().padStart(2, '0');

    })
}





