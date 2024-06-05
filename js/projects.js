document.addEventListener("DOMContentLoaded", () => {
    const projectData = JSON.parse(localStorage.getItem("projectData"));
    if (projectData) {
        document.getElementById("projectImage").src = projectData.image;
        document.getElementById("projectTitle").textContent = projectData.title;
        document.getElementById("projectDescription").textContent =
            projectData.description;
        document.getElementById("githubLink").href = projectData.github;
        document.getElementById("liveLink").href = projectData.live;
    } else {
        document.getElementById("projectDetailsContainer").textContent =
            "No project data available.";
    }
});
