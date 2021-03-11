const _menuElement = document.querySelector('[class="menu"]');
const _menuMob = document.querySelector('[class="mob-links"]')
const _menuMobLinks = document.querySelectorAll('.mob-links ul li');
console.log(_menuMobLinks);
const _menuCheck = document.getElementById('menu-check');


_menuElement.addEventListener('click', (e) => {
    if (_menuMob.style.width == '75%') {
        _menuMob.style.width = '0';
        _menuMob.style.transition = 'width 0.5s 0.2s ease-in';
        for (let i = 0; i < _menuMobLinks.length; i++) {
            _menuMobLinks[i].style.opacity = '1';
            _menuMobLinks[i].style.animation = `hideLinks 0.3s forwards `;
        }
    } else {
        _menuMob.style.width = '75%';
        _menuMob.style.transition = 'width 0.5s ease-in-out';
        for (let i = 0; i < _menuMobLinks.length; i++) {
            _menuMobLinks[i].style.opacity = '0';
            _menuMobLinks[i].style.animation = `moveLinks 0.5s forwards ${(i/5)+0.5}s`;
        }
    }
})



function RecursionFunction() {
    if (InceptionMovie().includes("understood"))
        return "Recursion Function Understood";
    return "" + RecursionFunction();
}

function InceptionMovie() {
    if (RecursionFunction().includes("understood"))
        return "Inception Movie Understood";
    return "" + InceptionMovie();
}