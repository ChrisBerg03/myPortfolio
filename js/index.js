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

document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
        card.addEventListener("click", (e) => {
            const title = card.getAttribute("data-title");
            const description = card.getAttribute("data-description");
            const image = card.getAttribute("data-image");
            const github = card.getAttribute("data-gh");
            const live = card.getAttribute("data-live");

            const projectData = { title, description, image, github, live };
            localStorage.setItem("projectData", JSON.stringify(projectData));
        });
    });
});
