let currentSlide = 0;
const slides = document.querySelectorAll(`.carousel-slide`);
setInterval(function() {
    currentSlide = currentSlide + 1;

    if (currentSlide >= slides.length){
        currentSlide = 0;
}
slides.forEach(function(slide, index){
    slide.style.display = `none`;
});
slides[currentSlide].style.display = `block`;
}, 2000);