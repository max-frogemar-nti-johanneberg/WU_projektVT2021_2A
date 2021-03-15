function toggleMeny() {
    document.querySelector('.nav-block-element').classList.toggle('nav-block-element-active');
    document.querySelector('.nav-links').classList.toggle('nav-active');
    document.querySelector('.hamburgare').classList.toggle('toggle');
}

document.querySelector('.hamburgare').addEventListener('click', toggleMeny);