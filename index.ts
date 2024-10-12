document.addEventListener("DOMContentLoaded", () => {
    const toggleSkills = document.getElementById(
      "toggleSkills"
    ) as HTMLButtonElement;
    const skillsSection = document.getElementById("skills") as HTMLElement;
  
    if (!toggleSkills || !skillsSection) {
      console.error("Required elements are not found in the DOM.");
      return;
    }
  
    toggleSkills.addEventListener("click", () => {
      if (
        skillsSection.style.display === "none" ||
        skillsSection.style.display === ""
      ) {
        skillsSection.style.display = "block";
        toggleSkills.innerHTML = "<b>Hide Skills</b>";
      } else {
        skillsSection.style.display = "none";
        toggleSkills.innerHTML = "<b>Show Skills</b>";
      }
    });
  });
  document.addEventListener("DOMContentLoaded", () => {
    const toggleProjects = document.getElementById(
      "toggleProjects"
    ) as HTMLButtonElement;
    const projectsSection = document.getElementById("projects") as HTMLElement;
  
    if (!toggleProjects || !projectsSection) {
      console.error("Required elements are not found in the DOM.");
      return;
    }
  
    toggleProjects.addEventListener("click", () => {
      if (
        projectsSection.style.display === "none" ||
        projectsSection.style.display === ""
      ) {
        projectsSection.style.display = "block";
        toggleProjects.innerHTML = "<b>Hide Projects</b>";
      } else {
        projectsSection.style.display = "none";
        toggleProjects.innerHTML = "<b>Show Projects</b>";
      }
    });
  });
  