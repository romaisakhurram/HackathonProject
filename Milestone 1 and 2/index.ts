
const toggleButton = document.getElementById(`toggleSkills`) as HTMLButtonElement;
const skillsSection = document.getElementById(`Skills`) as HTMLElement;

function toggleSkills() : void {

    if (skillsSection.style.display === "none"){
        skillsSection.style.display = "block"
    } else {
        skillsSection.style.display = "none"
    }
    
}

toggleButton.addEventListener(`click` , toggleSkills );