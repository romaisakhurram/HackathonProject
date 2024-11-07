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
    <p><b>Name:</b> <span contenteditable="true">${name}</span></p>
    <p><b>Email:</b> <span contenteditable="true"> ${email} </span> </p>
    <p><b>PhoneNumber:</b> <span contenteditable="true"> ${phoneNumber} </span> </p>

    <h3>Education</h3>
    <p><b>Institute:</b>  <span contenteditable="true"> ${institute} </span> </p>
    <p><b>Degree:</b>  <span contenteditable="true"> ${degree} </span> </p>
    <p><b>GraduationYear:</b> <span contenteditable="true">${Gradeyear} </span> </p>

    <h3>Experience</h3>
    <p><b>Job Title:</b>  <span contenteditable="true"> ${jobTitle} </span> </p>
    <p><b>Company Name:</b>  <span contenteditable="true"> ${company} </span> </p>
    <p><b>Duration:</b>  <span contenteditable="true"> ${duration} </span> </p>

    <h3>Skills</h3>
    <ul>
    <li  contenteditable="true">${skills}</li>
    <ul>
    `;
}

form.addEventListener(`submit` , generateResume);

