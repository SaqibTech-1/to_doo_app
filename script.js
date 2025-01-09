const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


// add task 

function addTask() {
    if (inputBox.value === '') {
        alert("Please enter a task before adding!..");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}


// select or remove 

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);


inputBox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTask(inputBox.value);
    }
});



function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();