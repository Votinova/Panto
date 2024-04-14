const infoButtons = document.querySelectorAll('.info-dot');
const infoHints = document.querySelectorAll('.info-hint');
for (let btn of infoButtons) {
    btn.addEventListener('click', function (e){
        e.stopPropagation();   
        for (let hint of infoHints) {
            hint.classList.add('none');
            hint.addEventListener('click', (e) => {
                e.stopPropagation();
            })
        }   
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

 var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 42,
    breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1230: {
            slidesPerView: 4,
            spaceBetween: 42
        }
      },
    navigation: {
        nextEl: '.slider-button--next',
        prevEl: '.slider-button--prev',
      },
  });


  const mobileButton = document.querySelector('.nav-button');
  console.log(mobileButton);
  const mobileNav = document.querySelector('.mobile-nav-wrapper');
  const closeMobile = document.querySelector('.mobile-nav-btn-close')
  mobileButton.addEventListener('click', () => {
    mobileNav.classList.add('mobile-nav-wrapper--open')
  })
  console.log(mobileNav);
  closeMobile.addEventListener('click', () => {
    mobileNav.classList.remove('mobile-nav-wrapper--open');
  })
