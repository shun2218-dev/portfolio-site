"use strict";

AOS.init();

const swiper = new Swiper(".swiper",{
    slidesPerView: 1.5,
    loop: true,
    spaceBetween: 40,
    centeredSlides: true,
    breakpoints: {
        768: {
            slidesPerView: 4,
            spaceBetween: 60
        }
    }
})

/**
 * Convert boolean string like "true" to boolean
 * @param {string} booleanStr boolean string
 * @returns {boolean}
 */
const toBoolean = (booleanStr) => {
    return booleanStr.toLowerCase() === "true"
}

const menuButton = document.querySelector(".js-menu-button")
const hamburgerToggle = () => {
    const toggleItems = document.querySelectorAll("[data-is-menu-open]")
    toggleItems.forEach(item => {
        item.dataset.isMenuOpen = `${!toBoolean(item.getAttribute("data-is-menu-open"))}`
    })
}
menuButton.addEventListener("click", hamburgerToggle)

const contactForm = document.querySelector(".js-contact-form")
contactForm.addEventListener("submit", (e) => e.preventDefault())

const headerNav = document.querySelectorAll(".js-header-nav")
headerNav.forEach(nav => {
    nav.addEventListener("click", (e) => {
        e.preventDefault()
        const targetId = new URL(e.target.href).hash.replace("#", "")
        const targetSectionY = document.getElementById(targetId).getBoundingClientRect().top + window.scrollY

        window.scrollTo({
            top: targetSectionY - 87,
            left: 0,
            behavior: "smooth"
        })
        hamburgerToggle()
    })
})