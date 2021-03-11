const progress = document.getElementById('line-progress');
const circles = document.querySelectorAll('.circle');
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const forms = document.querySelectorAll('.form');



console.log(forms);

curruntActive = 1;
next.addEventListener("click", () => {
    curruntActive++;
    if (curruntActive > circles.length)
        curruntActive = circles.length;
    circles.forEach((circle, index) => {
        circle.classList.remove("active");
        forms[index].classList.add("hide");
        forms[index].classList.remove("show");
        forms[curruntActive - 1].classList.remove("hide");
        forms[curruntActive - 1].classList.add("show");
        forms[index].style.animation = "scale 1s ease"
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
        circle.classList.remove("active");
        forms[index].classList.add("hide");
        forms[index].classList.remove("show");
        forms[curruntActive - 1].classList.remove("hide");
        forms[curruntActive - 1].classList.add("show");
        forms[index].style.animation = "scale 1s ease"

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