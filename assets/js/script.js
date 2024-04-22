let swiper = new Swiper(".reviews-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
    el: ".reviews__pagination-swiper",
    clickable: true,
    },
    navigation: {
    nextEl: ".reviews__btn-next",
    prevEl: ".reviews__btn-prev",
    },
});