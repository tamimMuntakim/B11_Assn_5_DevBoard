// const current = new Date();
//     const currentTIme = current.toLocaleTimeString();
//     const currentDate = current.toLocaleDateString();
// random color changer
function rand() {
    return Math.floor(Math.random() * (255 + 1));
}
document.getElementById("color-btn").addEventListener('click', function () {
    let red = rand();
    let green = rand();
    let blue = rand();
    document.body.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
})

// current date setter function
function dateCalculator() {
    const weekDays = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Nov", "Dec"];
    const current = new Date();
    const day = weekDays[current.getDay()];
    const month = months[current.getMonth()];
    const today = current.getDate();
    const year = current.getFullYear();

    document.getElementById("current-day").innerText = day + ",";
    document.getElementById("current-date").innerText = month + " " + today + " " + year;
}
dateCalculator();

// Blog.html redirecting event listener
document.getElementById("discover").addEventListener('click', function () {
    window.location.href = "Blog.html";
})

// task complete event
const btns = Array.from(document.getElementsByClassName("complete-btn"));
for (const btn of btns) {
    btn.addEventListener('click', function (event) {
        alert("Board Updated Successfully!!!!!!!!!!");
        const total = document.getElementById("total-task");
        const remaining = document.getElementById("remaining-task");
        total.innerText = parseInt(total.innerText) + 1;
        let remainingTasks = parseInt(remaining.innerText) - 1;
        remaining.innerText = remainingTasks < 10 ? '0' + remainingTasks : remainingTasks;

        event.target.setAttribute("disabled", "true");
        event.target.classList.add("bg-[#afb9ff]");
        if (remainingTasks === 0) {
            alert("Congrats!! You have completed all of the tasks....");
        }
        let taskTitle = event.target.parentNode.parentNode.getElementsByClassName('task-title')[0].innerText;
        const currentTIme = new Date().toLocaleTimeString();
        const messege = document.createElement("p");
        messege.classList.add("bg-[#F4F7FF]","p-2","my-3","w-[90%]","mx-auto","rounded-lg");
        messege.innerText = "You have completed " + taskTitle + " at " + currentTIme;
        document.getElementById("message-container").appendChild(messege);
    });
}

// Clear history event
document.getElementById("clear-history-btn").addEventListener('click', function () {
    document.getElementById("message-container").innerHTML = "";
})