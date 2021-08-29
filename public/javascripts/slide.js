const buttonNext = document.querySelector('.carousel-button_next')

const buttonPrev = document.querySelector('.carousel-button')

const slidesContainer = document.querySelector('.slides')

const carousel = document.querySelector('.carousel')


buttonNext.addEventListener('click', handleNext);

buttonPrev.addEventListener('click', handlePrev);

setInterval(handleNext, 3000)

let currentSlide = 0;
const numSlides = slidesContainer.children.length;

function handleNext() {
    // currentSlide = (currentSlide + 1) % numSlides;
    // slidesContainer.style.transform = `translateX(${currentSlide * -100}%)`;
    currentSlide = (currentSlide + 1) % (numSlides/2);
    // slidesContainer.style.setProperty('--current-slide', currentSlide)
    console.log(currentSlide, '------------------')
    carousel.style.setProperty('--current-slide', currentSlide)
}

function handlePrev() {
    // currentSlide = (currentSlide + 1) % numSlides;
    // slidesContainer.style.transform = `translateX(${currentSlide * -100}%)`;
    // currentSlide -= 1;
    currentSlide = (currentSlide - 1) % (numSlides/2);
    if (currentSlide < 0) {
        currentSlide = (numSlides/2) - 1
    }

    // slidesContainer.style.setProperty('--current-slide', currentSlide)
    carousel.style.setProperty('--current-slide', currentSlide)

}
