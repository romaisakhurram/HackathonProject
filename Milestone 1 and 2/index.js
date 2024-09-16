var toggleButton = document.getElementById("toggleSkills");
var skillSection = document.getElementById("Skill");
function toggleSkills() {
    if (skillSection.style.display === "none") {
        skillSection.style.display = "block";
    }
    else {
        skillSection.style.display = "none";
    }
}
toggleButton.addEventListener("click", toggleSkills);
