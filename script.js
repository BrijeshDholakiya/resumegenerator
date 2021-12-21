let resumeForm = document.querySelector(".resumeForm");
let resume = document.querySelector(".resume");
let resumeContainer = document.querySelector(".resumeGenerateBtn");
let printButton = document.getElementById("printBtn");
let resumeInputContainer = true;


//////////////////////////////////////// FOR GETTING TEXT EDITOR /////////////////////////////////////////

async function TextEditor(element) {
    const newEditor = await ClassicEditor
        .create(element, {
            toolbar: ['heading', 'bold', 'italic', 'bulletedList', 'numberedList', 'link', 'blockQuote'],
        })
    return newEditor;
}

let educationDetails;
TextEditor(resumeForm["education"]).then(nEditor => {
    educationDetails = nEditor;
});

let projectDetails;
TextEditor(resumeForm["project"]).then(nEditor => {
    projectDetails = nEditor;
});

let skillsDetails;
TextEditor(resumeForm["skill"]).then(nEditor => {
    skillsDetails = nEditor;
});

let foiDetails;
TextEditor(resumeForm["foi"]).then(nEditor => {
    foiDetails = nEditor;
});

let strengthDetails;
TextEditor(resumeForm["strength"]).then(nEditor => {
    strengthDetails = nEditor;
});

///////////////////////////////////////////////// CODE FOR RESUME TEMPELATE ///////////////////////////////////////

function addDetails() {
    if(resumeInputContainer){
        resumeForm.style.display = "none";
        resumeContainer.classList.add("resumeInputs");
        resumeInputContainer = false;
        resume.innerHTML = `
        <section id="heading">
        <div class="header"> <h1 class="title"><strong> ${resumeForm["fName"].value}</strong></h1></div>
        <div class="info">
            <p class="contactPara"> ${resumeForm["contactNumber"].value} ||</p>
            <p><a href="${resumeForm["email"].value}">${resumeForm["email"].value}</a></p>
        </div>
        </section>
        
        <section id="objective">
        <div class="objective-para"> <h3 class="objTitleTemp">Objective:-</h3>
            <p id="objDescTemp">&nbsp ${resumeForm["objective"].value}</p> </div>
        </section>
        
        <section id="education">
        <div class="divider"> <h2>Education</h2> </div>
        <div>${educationDetails.getData()}</div>
        </section>
        
        <section id="project">
        <div class="divider"> <h2>Projects</h2> </div>
        <div class="content"> ${projectDetails.getData()} </div>
        </section>
        
        <section id="skill">
        <div class="divider"> <h2>Skills</h2> </div>
        <div class="content" id="skillTemp"> ${skillsDetails.getData()} </div>
        </section>
        
        <section id="foi">
        <div class="divider"> <h2>Fields of Interest</h2> </div>
        <div class="content" id="foiTemp"> ${foiDetails.getData()} </div>
        </section>
        
        <section id="strength"> 
        <div class="divider"> <h2>Strengths</h2> </div>
        <div class="content"> ${strengthDetails.getData()} </div>
        </section>
        
        <div class="row">
        <div> 
        <a href="${resumeForm["linkedin"].value}">${resumeForm["linkedin"].value}</a>
        </div>
        <div> 
        <a href="${resumeForm["github"].value}">${resumeForm["github"].value}</a>
        </div>
        </div>
         <div class="footer">
                        <span>I hereby aknowledge that the information furnished above is correct to the best of my
                            knowledge.</span>
                        <p class="github">-<em>${resumeForm["salute"].value}</em></p>
         </div>
         
        `
    } else{
        resumeInputContainer = true;
        resumeForm.style.display = "block";
        resumeContainer.classList.remove("resumeInputs");
    }
}

/////////////////////////////////////////////  CODE FOR PRINT RESUME  ///////////////////////////////////////////

function printResume(){
    printButton.classList.add("resumeInputs");
    window.print(resume);
}