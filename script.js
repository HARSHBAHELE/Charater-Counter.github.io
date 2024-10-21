let input = document.querySelector("#input");
let total = document.querySelector(".total-counter");
let remaining = document.querySelector("#remaining-counter");
 
input.addEventListener("keyup",()=> {
    updateCounter();
});

updateCounter();

function updateCounter() {
    total.innerText = input.value.length;
    remaining.innerText =
    input.getAttribute("maxLength") - input.value.length;
}