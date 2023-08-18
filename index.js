import {buttonText} from "./translateText.js";
import {arrayOfButtonClass,arrayOfDivs,stateOfScroll,arrayOfTextId} from "./attributes.js";
import  domManipulation from "./domManipulation.js";




const buttonAboutMe = document.querySelector("#buttonAboutMe");
const buttonSkill = document.querySelector("#buttonMySkills");
const contactButton = document.querySelector("#buttonContact");
const buttonProjects = document.querySelector("#myProjects");
const selectLanguage = document.querySelector("#language");

selectLanguage.addEventListener('click',function(e){
    let i =0;
    e.target.value ==="Eng"? i=0:i=1;
    buttonAboutMe.innerHTML =buttonText.aboutMe[i];
    buttonSkill.innerHTML =buttonText.mySkills[i];
    contactButton.innerHTML =buttonText.myContact[i];
    buttonProjects.innerHTML =buttonText.myProjects[i];

});
arrayOfButtonClass.forEach((value,key) =>{
    document.getElementById(value).addEventListener("click",function(){
         domManipulation.changeScrollLight(document.getElementById(arrayOfDivs[key]));
    });
});
addEventListener("scroll",function(){
    console.log(Math.floor(window.scrollY));
});
domManipulation.arrayFunction(arrayOfTextId);
setInterval(function () {
    domManipulation.changeTextTimeInterval(document.getElementById("profession"),100,99);
    domManipulation.changeTextTimeInterval(document.getElementById("name"),100,99);
    domManipulation.changeTextTimeInterval(document.getElementById("buttonAboutMe"),10,100);
    domManipulation.changeTextTimeInterval(document.getElementById("buttonMySkills"),10,100);
    domManipulation.changeTextTimeInterval(document.getElementById("buttonContact"),10,100);
    domManipulation.changeTextTimeInterval(document.getElementById("myProjects"),10,100);

},1000);




/*setInterval(function () {

        if(state.i % 2 ===0) {
            const elem = document.getElementById("profession");
            elem.innerHTML = span_it(elem.innerText);
            // now each letter
            var spans = elem.querySelectorAll(".random_javascript");

            console.log("spans length: " + spans.length);

            random = Math.floor(Math.random() * (spans.length - 1));
            setInterval(function(){
                spans[random].style.filter = "brightness(100%)";


            }, 10);
        }
        if(state.i % 2 !==0) {
            const elem = document.getElementById("profession");


            var spans = elem.querySelectorAll(".random_javascript");
            setInterval(function(){
                spans[random].style.filter = "brightness(10%)";
            }, 1);

        }
        state.i++;
        if(state.i === 3){
            state.i=0;
        }


}, 1000);*/


