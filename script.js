const input = document.getElementById("text-input");
const body = document.getElementById("body");
const div = document.createElement("div");
body.appendChild(div);

input.addEventListener("click", () => {
    div.innerHTML = input.value;
    console.log("hello");
});
