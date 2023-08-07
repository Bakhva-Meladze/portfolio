import {buttonText} from "./translateText.js";
console.log("hi");
const buttonAboutMe = document.querySelector("#buttonAboutMe");
const buttonSkill = document.querySelector("#buttonMySkills");
const contactButton = document.querySelector("#buttonContact");
const buttonProjects = document.querySelector("#myProjects");
const selectLanguage = document.querySelector("#language");
const infoDiv = document.getElementById("aboutMe");
const skillsDiv = document.getElementById("mySkills");

buttonSkill.addEventListener('click', function (){
    if(skillsDiv.style.display === "none") {
        skillsDiv.style.display = "block";
    }
    else{
        skillsDiv.style.display ="none"
    }

});

buttonAboutMe.addEventListener('click',function(){
    if(infoDiv.style.display === "none") {
        infoDiv.style.display = "block";
    }
    else{
        infoDiv.style.display ="none"
    }
});

selectLanguage.addEventListener('click',function(e){
    let i =0;
    e.target.value ==="Eng"? i=0:i=1;
    buttonAboutMe.innerHTML =buttonText.aboutMe[i];
    buttonSkill.innerHTML =buttonText.mySkills[i];
    contactButton.innerHTML =buttonText.myContact[i];
    buttonProjects.innerHTML =buttonText.myProjects[i];


})
