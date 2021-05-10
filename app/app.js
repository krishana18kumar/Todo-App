const dateElement = document.getElementById("date");
const trash = document.querySelector(".fas");
const addbtn = document.querySelector(".add");
const checkbtn = document.querySelector(".far");
var input = document.getElementById("input");
var list = document.getElementById("list");
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle";
const LINETHROUGH = "lineThrough";

//SHOW DATE
let options = {
    weekday: "long",
    month: "short",
    day: "numeric"
};
let today = new Date();
dateElement.innerHTML = today.toLocaleDateString("en-US", options);

//TOOGLE INPUT ON CLICKING ADD BUTTON 
addbtn.addEventListener("click", function () {
    input.classList.toggle("display");
});

//FUNTION TO ADD TODO ITEM TO THE LIST 
input.addEventListener("keypress", function (event) {
    if (event.keyCode == 13) {
        var todo = input.value;
        var text = `<li class="item">
                        <i class="far fa-circle" job="complete"></i>
                        <p class="text" job="none">${todo}</p>
                        <i class="fas fa-trash" job="delete"></i>
                    </li>`
        if (todo) {
            list.insertAdjacentHTML("beforeend", text);
        }
        input.value = "";
    }
});

//COMPLETED TODO
function completetodo(element) {
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle(LINETHROUGH);
}
//REMOVE TODO 
function removetodo(element) {
    element.parentNode.parentNode.removeChild(element.parentNode);
}


//ADD EVENT ON CLICKING CHECK AND TRASH BUTTON 
list.addEventListener("click", function (event) {
    let element = event.target;
    const elementJob = event.target.attributes.job.value;
    if (elementJob == "complete") {
        completetodo(element);
    } else if (elementJob == "delete") {
        removetodo(element);
    }
});