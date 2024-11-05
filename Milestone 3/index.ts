const form = document.getElementById(`resume-form`) as HTMLFormElement;
const resumeOutput = document.getElementById(`resume-output`) as HTMLDivElement;

function generateResume (event:Event) : void{
    event.preventDefault();

 const name = (document.getElementById(`name`)as HTMLInputElement).value
 const email = (document.getElementById(`email`)as HTMLInputElement).value
 const phoneNumber = (document.getElementById(`phoneNumber`)as HTMLInputElement).value
 const institute = (document.getElementById(`institute`)as HTMLInputElement).value
 const degree = (document.getElementById(`degree`)as HTMLInputElement).value
 const Gradeyear = (document.getElementById(`Gradeyear`)as HTMLInputElement).value
 const jobTitle = (document.getElementById(`jobTitle`)as HTMLInputElement).value
 const company = (document.getElementById(`company`)as HTMLInputElement).value
 const duration = (document.getElementById(`duration`)as HTMLInputElement).value
 const skills = (document.getElementById(`skills`)as HTMLInputElement).value

    if (!name || !email || !phoneNumber || !institute || !degree || !Gradeyear || !jobTitle || !skills){
     alert ("Please fill in this field")
     return;
    }

  // Generated resume HTML
 
    resumeOutput.innerHTML =`
    <h1> Resume </h1>
    <h3>Personal Information</h3>
    <p><b>Name:</b> ${name}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>PhoneNumber:</b> ${phoneNumber}</p>

    <h3>Education</h3>
    <p><b>Institute:</b> ${institute}</p>
    <p><b>Degree:</b> ${degree}</p>
    <p><b>GraduationYear:</b> ${Gradeyear}</p>

    <h3>Experience</h3>
    <p><b>Job Title:</b> ${jobTitle}</p>
    <p><b>Company Name:</b> ${company}</p>
    <p><b>Duration:</b> ${duration}</p>

    <h3>Skills</h3>
    <ul>
    <li>${skills}</li>
    <ul>
    `;
}

form.addEventListener(`submit` , generateResume);


