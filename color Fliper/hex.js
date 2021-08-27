const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F", "G", "H", "I", "a", "b", "c", "d", "e"];
const color = document.querySelector('.color');
const btn = document.getElementById('btn');

btn.addEventListener("click", function () {
    let hexColor = "#";
    for (var a = 0; a < 6; a++) {
        hexColor = hexColor + hex[getRandomNumber()];
    }
    color.textContent = hexColor;
    document.body.style.background = hexColor;
})

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}
