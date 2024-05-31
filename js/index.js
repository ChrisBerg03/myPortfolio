window.onscroll = function () {
    progressBar();
};

function progressBar() {
    const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add(`show`);
        }
    });
});

const hiddenElements = document.querySelectorAll(`.hidden`);
hiddenElements.forEach((el) => observer.observe(el));
