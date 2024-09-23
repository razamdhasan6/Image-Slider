// const slider = document.querySelectorAll('.slides');
// const next = document.querySelector('.arrow.next');
// const prev = document.querySelector('.arrow.prev');

// let img = 0;

// function showSlide(index) {
//     for (let i = 0; i < slider.length; i++) {
//         slider[i].style.display = 'none';
//     }
//     slider[index].style.display = 'block';
// }

// showSlide(img);

// next.addEventListener("click", () => {
//     img++;
//     if (img >= slider.length) {
//         img = 0;
//     }
//     showSlide(img);
// });

// prev.addEventListener("click", () => {
//     img--;
//     if (img < 0) {
//         img = slider.length - 1;
//     }
//     showSlide(img);
// });




const slider = document.querySelectorAll('.slides');
const next = document.querySelector('.arrow.next');
const prev = document.querySelector('.arrow.prev');

let img = 0;

function showSlide(index) {
    for (let i = 0; i < slider.length; i++) {
        slider[i].style.display = 'none';
    }
    slider[index].style.display = 'block';
}

showSlide(img);

next.addEventListener("click", () => {
    img++;
    if (img >= slider.length) {
        img = 0;
    }
    showSlide(img);
});

prev.addEventListener("click", () => {
    img--;
    if (img < 0) {
        img = slider.length - 1;
    }
    showSlide(img);
});

// Automatic slideshow
setInterval(() => {
    img++;
    if (img >= slider.length) {
        img = 0;
    }
    showSlide(img);
}, 2000); // Change slide every 2 seconds

