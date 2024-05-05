const previews = document.querySelectorAll('.watch__preview');
const modalWindow = document.querySelector('.modal');
const closeButton = document.querySelectorAll('.modal__close');
const watchItem = document.querySelectorAll('.watch__item');
const video = document.querySelector('iframe');

const links = [
    'https://www.youtube.com/embed/9osre3R0LvA?autoplay=1',
    'https://www.youtube.com/embed/PHf83VFDw6g?autoplay=1',
    'https://www.youtube.com/embed/huKIml0hliE?autoplay=1'
];

modalWindow.addEventListener('click', () => {
    video.src = '';
    modalWindow.classList.remove('modal_open');
})

watchItem.forEach((item, index) => {
    item.addEventListener('click', () => {
        video.src = links[index];
        modalWindow.classList.add('modal_open');
    });
});

closeButton.forEach((button, index) => {
    button.addEventListener('click', () => {
        const video = modalWindow.querySelector('iframe');
        video.src = '';
        modalWindow.classList.remove('modal_open');
    });
});



// watchItem.forEach((item, index) => {
//     item.dataset.src = links[index];
// });
