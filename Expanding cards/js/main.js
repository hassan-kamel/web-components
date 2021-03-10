const cards = document.querySelectorAll(".card");
const h2 = document.querySelectorAll(".card h2");

for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", () => {
        for (let j = 0; j < cards.length; j++) {
            cards[j].classList.remove("big");
        }
        cards[i].classList.add("big");

    })
}