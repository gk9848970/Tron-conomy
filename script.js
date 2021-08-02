const hamBurger = document.querySelector('.hamburger__icon')
const mobileNav = document.querySelector('.mobile__ul')


hamBurger.addEventListener('click', () => {
    mobileNav.classList.toggle('active')
})

const questionWrapper = document.querySelector('.faq__questionWrapper')

questionWrapper.addEventListener('click', (e) => {
    if(!e.target.closest('.faq__box')) return;

    const faqBox = e.target.closest('.faq__box');
    faqBox.classList.toggle('active')
})

document.body.addEventListener('click', (e)=> {
    console.log("Hi");
    if(e.target.closest('.mobile__ul') || e.target.matches('.hamburger__icon')) return;

    console.log("Hi");
    mobileNav.classList.remove('active')
})