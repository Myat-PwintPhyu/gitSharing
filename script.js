const input = document.getElementById("text-input");
const btn = document.getElementById("click-btn")
const body = document.getElementById("body");
const result = document.getElementById("result");


btn.addEventListener("click", (e) => {
    e.preventDefault();
    result.innerHTML = input.value
});
