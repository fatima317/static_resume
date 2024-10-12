document.addEventListener("DOMContentLoaded", function () {
    var toggleSkills = document.getElementById("toggleSkills");
    var skillsSection = document.getElementById("skills");
    if (!toggleSkills || !skillsSection) {
        console.error("Required elements are not found in the DOM.");
        return;
    }
    toggleSkills.addEventListener("click", function () {
        if (skillsSection.style.display === "none" ||
            skillsSection.style.display === "") {
            skillsSection.style.display = "block";
            toggleSkills.innerHTML = "<b>Hide Skills</b>";
        }
        else {
            skillsSection.style.display = "none";
            toggleSkills.innerHTML = "<b>Show Skills</b>";
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var toggleProjects = document.getElementById("toggleProjects");
    var projectsSection = document.getElementById("projects");
    if (!toggleProjects || !projectsSection) {
        console.error("Required elements are not found in the DOM.");
        return;
    }
    toggleProjects.addEventListener("click", function () {
        if (projectsSection.style.display === "none" ||
            projectsSection.style.display === "") {
            projectsSection.style.display = "block";
            toggleProjects.innerHTML = "<b>Hide Projects</b>";
        }
        else {
            projectsSection.style.display = "none";
            toggleProjects.innerHTML = "<b>Show Projects</b>";
        }
    });
});
