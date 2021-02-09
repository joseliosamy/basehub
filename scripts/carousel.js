const carouselSlide = document.querySelector('.slide-images');
const carouselImages = document.querySelectorAll('.slide-images .box-img');
const boxImg = document.querySelectorAll('.box-img');

const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');

let counter = 0;
const size = carouselImages[0].clientWidth;

// carousel
nextBtn.addEventListener('click', ()=>{
    if(counter >= carouselImages.length -1) return;
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    carouselSlide.style.transform = 'translateX(' + ((-size * counter) + 50) + 'px)';
})
prevBtn.addEventListener('click', ()=>{
    if(counter <= 0) return;
    console.log(counter)
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

// open img

carouselImages.forEach(carouselImages=>{
    carouselImages.addEventListener('click',()=>{
        if(carouselImages.getAttribute('class') == "original"){
            carouselImages.classList.remove('original');
            carouselImages.classList.add('modal');
        }else{
            carouselImages.classList.remove('modal');
            carouselImages.classList.add('original');
        }
    })
    carouselImages.addEventListener(e=>{
        if(e.target.classList.contains('modal')){
            carouselImages.classList.remove('modal');
            carouselImages.classList.add('original');
        }
    })
})
