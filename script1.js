const slider = document.querySelectorAll('.slides')
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')

let img = 0;

function slideShow(index) {
    for (let i = 0; i < slider.length; i++){
        slider[i].style.display = 'none';
    }
    slider[index].style.display='block'
}
slideShow(img);

next.addEventListener("click", () => {
    img++;
    if (img >= slider.length) {
        img = 0;
    }
    slideShow(img);
});

prev.addEventListener("click", () => {
    img--;
    if (img < 0) {
        img = slider.length - 1;
    }
    slideShow(img);
})


