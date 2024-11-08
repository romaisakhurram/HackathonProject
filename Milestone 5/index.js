var form = document.getElementById("resume-form");
var resumeOutput = document.getElementById("resume-output");
var ShareableResume = document.getElementById('ShareableResume');
var downloadpdf = document.getElementById('downloadpdf');
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
    resumeOutput.innerHTML = "\n    <h1> Resume </h1>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b> <span contenteditable=\"true\"> ".concat(name, " </span> </p>\n    <p><b>Email:</b> <span contenteditable=\"true\"> ").concat(email, " </span> </p>\n    <p><b>PhoneNumber:</b> <span contenteditable=\"true\"> ").concat(phoneNumber, " </span> </p>\n\n    <h3>Education</h3>\n    <p><b>Institute:</b> <span contenteditable=\"true\"> ").concat(institute, " </span> </p>\n    <p><b>Degree:</b> <span contenteditable=\"true\"> ").concat(degree, " </span> </p>\n    <p><b>GraduationYear:</b> <span contenteditable=\"true\"> ").concat(Gradeyear, " </span> </p>\n\n    <h3>Experience</h3>\n    <p><b>Job Title:</b> <span contenteditable=\"true\"> ").concat(jobTitle, " </span> </p>\n    <p><b>Company Name:</b> <span contenteditable=\"true\"> ").concat(company, " </span> </p>\n    <p><b>Duration:</b> <span contenteditable=\"true\"> ").concat(duration, " </span> </p>\n\n    <h3>Skills</h3>\n    <ul>\n    <li contenteditable=\"true\">").concat(skills, "</li>\n    <ul>\n    <br>\n    ");
}
form.addEventListener("submit", generateResume);
downloadpdf.addEventListener('click', function () {
    window.print();
});
