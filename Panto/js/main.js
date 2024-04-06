const infoButtons = document.querySelectorAll('.info-dot');
const infoHints = document.querySelectorAll('.info-hint');
for (let btn of infoButtons) {
    btn.addEventListener('click', function (e){
        e.stopPropagation();      
        this.parentNode.querySelector('.info-hint').classList.toggle('none')
    })

}

document.addEventListener('click', () => {
    
    for (let hint of infoHints) {
        hint.classList.add('none');
        hint.addEventListener('click', (e) => {
            e.stopPropagation();
        })
    }
 })

 //swiper-slider

 const swiper = new Swiper('.swiper', {
    slidesPerView: 4,
    spaceBetween: 42,
    freeMode: true,
    // breakpoints: {
    //     640: {
    //       slidesPerView: 2,
    //       spaceBetween: 20,
    //     },
    //     768: {
    //       slidesPerView: 4,
    //       spaceBetween: 40,
    //     },
    //     1024: {
    //       slidesPerView: 5,
    //       spaceBetween: 50,
    //     },
    //   },
    navigation: {
        nextEl: '.slider-button--next',
        prevEl: '.slider-button--prev',
      },
  });