let result = document.getElementById("result");
let button = document.getElementById("button");
button.onclick = () => {
    button.textContent = "Toss again"
    const displayresult = Math.random() < 0.5 ? "Heads" : "Tails";
    result.textContent = "Result: "+ displayresult;
}