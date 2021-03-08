function toggleMeny() {
    document.querySelector('.nav-links').classList.toggle('nav-active');
    document.querySelector('.hamburgare').classList.toggle('toggle');
}

document.querySelector('.hamburgare').addEventListener('click', toggleMeny);