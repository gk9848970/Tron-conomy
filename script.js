//  Mobile Nav

const hamBurger = document.querySelector('.hamburger__icon')
const mobileNav = document.querySelector('.mobile__ul')


hamBurger.addEventListener('click', () => {
    mobileNav.classList.toggle('active')
})

document.body.addEventListener('click', (e)=> {
    if(e.target.closest('.mobile__ul') || e.target.matches('.hamburger__icon')) return;

    mobileNav.classList.remove('active')
})

// Faq Box

const questionWrapper = document.querySelector('.faq__questionWrapper')

questionWrapper.addEventListener('click', (e) => {
    if(!e.target.closest('.faq__box')) return;

    const faqBox = e.target.closest('.faq__box');
    const faqContent = faqBox.querySelector('.faq__content')
    faqContent.classList.toggle('active')
})

// Modal

const modalBtn = document.querySelector('.modal-btn');
const modalBtnClose = document.querySelector('.modal-close-btn');
const modal = document.querySelector('.modal');

modalBtn.addEventListener("click", () => {
  setTimeout(()=> {
    modal.classList.add('open');
  }, 100)
})

modalBtnClose.addEventListener("click", () => {
    modal.classList.remove('open');
})
