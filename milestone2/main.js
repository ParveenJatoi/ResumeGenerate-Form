// creating variables for form and display
var form = document.getElementById('resume-form');
var resumeDisplyElement = document.getElementById('resume-display');
// hamdle form submission
form.addEventListener('submit', function (event) {
    // revent page load
    event.preventDefault();
    // collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // generate the resume
    var resumeHTML = "\n    <h2><b>Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b>".concat(name, "</p>\n     <p><b>Email:</b>").concat(email, "</p>\n      <p><b>Phone:</b>").concat(phone, "</p>\n      \n      \n      <h3>Education</h3>\n      <p>").concat(education, "</p>\n\n      \n      <h3>Experience</h3>\n      <p>").concat(experience, "</p>\n      \n      \n      <h3>Skills</h3>\n      <p>").concat(skills, "</p>");
    //   display generated resume
    if (resumeDisplyElement) {
        resumeDisplyElement.innerHTML = resumeHTML;
    }
    else {
        console.error("The display element is missing");
    }
});
console.log(resumeDisplyElement);
