const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');

for ( const element of toggle) {
    element.addEventListener('click', () => {
       nav.classList.toggle('show');
    })
}

const links = document.querySelectorAll('nav ul li a') 


for( const link of links ) {
    link.addEventListener('click', () => {
        nav.classList.remove('show');
    })
}

const header = document.querySelector('#header');
const navHeight = header.offsetHeight
window.addEventListener('scroll', () => {
    if(window.scrollY >= navHeight) {
        header.classList.add('scroll')

    } else {
        // menor que altura do header
        header.classList.remove('scroll')
    }
}) 



/* Testimonials carousel slider SWIPER */

const swiper = new Swiper('.swiper-container', {
   sliesPerView: 1,
   pagination: {
       el: '.swiper-pagination'
   },
   mousewheel: true,
   keyboard: true,
  });


  /*  scroll Reveal: mostrar elementos quando der scroll na página */

  const scrollReveal = ScrollReveal({
      origin: 'top',
      distance: '30px',
      duration: 700,
      reset: true
  })

  scrollReveal.reveal(`
    #home .image, #home .text, 
    #about .image, #about .text,    
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact p, #contact .button, #contact .links    
    `, {interval: 100}
    )