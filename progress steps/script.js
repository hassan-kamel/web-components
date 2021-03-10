const progress = document.getElementById('line-progress');
const circles = document.querySelectorAll('.circle');
const prev = document.getElementById("prev");
const next = document.getElementById("next");

console.log(progress);

curruntActive = 1;
next.addEventListener("click", () => {
    curruntActive++;
    if (curruntActive > circles.length)
        curruntActive = circles.length;
    circles.forEach((circle, index) => {
        circle.classList.remove("active");
    })
    for (let i = 0; i < curruntActive; i++) {
        circles[i].classList.add("active")
    }
    progress.style.width =
        `${(curruntActive-1)*100/(circles.length-1)}%`;
    updateButtons();
})
prev.addEventListener("click", () => {
    curruntActive--;
    if (curruntActive < 1)
        curruntActive = 1;
    circles.forEach((circle, index) => {
        circle.classList.remove("active");
    })
    for (let i = 0; i < curruntActive; i++) {
        circles[i].classList.add("active")
    }
    progress.style.width =
        `${(curruntActive-1)*100/(circles.length-1)}%`;
    updateButtons();
})

function updateButtons() {
    if (curruntActive <= 1) {
        prev.disabled = true;
    } else {
        prev.disabled = false;

    }
    if (curruntActive >= circles.length) {
        next.disabled = true;
    } else {
        next.disabled = false;

    }
}