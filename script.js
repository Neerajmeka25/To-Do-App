const inputBox = document.getElementById("input-box");
const listConatainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must Write Something!!!");
    }
    else{
        const li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listConatainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listConatainer.addEventListener("click", function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listConatainer.innerHTML);
}

function showTask(){
    listConatainer.innerHTML = localStorage.getItem("data");
}
showTask();