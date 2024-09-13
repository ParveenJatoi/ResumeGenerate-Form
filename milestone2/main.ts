// creating variables for form and display
var form = document.getElementById('resume-form') as HTMLFormElement
var resumeDisplyElement=document.getElementById('resume-display') as HTMLDivElement

// hamdle form submission
form.addEventListener('submit',(event:Event)=>{
    // revent page load
    
    event.preventDefault(); 

    // collect input values
    const name=(document.getElementById('name')as HTMLInputElement).value;
    const email=(document.getElementById('email')as HTMLInputElement).value;
    const phone=(document.getElementById('phone')as HTMLInputElement).value;
    const education=(document.getElementById('education')as HTMLTextAreaElement).value;
    const experience=(document.getElementById('experience')as HTMLTextAreaElement).value;
    const skills=(document.getElementById('skills')as HTMLTextAreaElement).value;


    // generate the resume

    const resumeHTML=`
    <h2><b>Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b>${name}</p>
     <p><b>Email:</b>${email}</p>
      <p><b>Phone:</b>${phone}</p>
      
      
      <h3>Education</h3>
      <p>${education}</p>

      
      <h3>Experience</h3>
      <p>${experience}</p>
      
      
      <h3>Skills</h3>
      <p>${skills}</p>`


    //   display generated resume
    if(resumeDisplyElement){
        resumeDisplyElement.innerHTML=resumeHTML;
    }
    else{
        console.error("The display element is missing")
    }
});
console.log(resumeDisplyElement);

    