var form = document.getElementById("resume-form");
var resumeOutput = document.getElementById("resume-output");
function generateResume(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var institute = document.getElementById("institute").value;
    var degree = document.getElementById("degree").value;
    var Gradeyear = document.getElementById("Gradeyear").value;
    var jobTitle = document.getElementById("jobTitle").value;
    var company = document.getElementById("company").value;
    var duration = document.getElementById("duration").value;
    var skills = document.getElementById("skills").value;
    if (!name || !email || !phoneNumber || !institute || !degree || !Gradeyear || !jobTitle || !skills) {
        alert("Please fill in this field");
        return;
    }
    // Generated resume HTML
    resumeOutput.innerHTML = "\n    <h3><u>Personal Information</u></h3>\n    <p><b>Name:</b> ".concat(name, "</p>\n    <p><b>Email:</b> ").concat(email, "</p>\n    <p><b>PhoneNumber:</b> ").concat(phoneNumber, "</p>\n\n    <h3><u>Education</u></h3>\n    <p><b>Institute:</b> ").concat(institute, "</p>\n    <p><b>Degree:</b> ").concat(degree, "</p>\n    <p><b>GraduationYear:</b> ").concat(Gradeyear, "</p>\n\n    <h3><u>Experience</u></h3>\n    <p><b>Job Title:</b> ").concat(jobTitle, "</p>\n    <p><b>Company Name:</b> ").concat(company, "</p>\n    <p><b>Duration:</b> ").concat(duration, "</p>\n\n    <h3><u>Skills</u></h3>\n    <ul>\n    <li>").concat(skills, "</li>\n    <ul>\n    ");
}
form.addEventListener("submit", generateResume);
