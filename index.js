import {buttonText} from "./translateText.js";
import {arrayOfButtonClass,arrayOfDivs,stateOfScroll,arrayOfTextId} from "./attributes.js";
import  domManipulation from "./domManipulation.js";
const buttonAboutMe = document.querySelector("#buttonAboutMe");
const buttonSkill = document.querySelector("#buttonMySkills");
const contactButton = document.querySelector("#buttonContact");
const buttonProjects = document.querySelector("#myProjects");
const selectLanguage = document.querySelector("#language");
const container = document.querySelector("#container");
let filter = true;

const arr = [`<img src="images/georgia-flag-icon.png">Geo</div>`,`<img src=\"images/pngwing.com%20(1).png\">Eng</div>`];
document.querySelector("#target").innerHTML = arr[1];

selectLanguage.addEventListener("click", function(e){
    filter === true ?container.style.display = "block":container.style.display = "none";
    filter = !filter;
});

 let State ={
    id: localStorage.getItem("id")?localStorage.getItem("id"):1
}
document.querySelector("#geo").addEventListener("click",function (e){
    document.querySelector("#target").innerHTML = arr[0];
    localStorage.setItem("id",1);
    State.id = localStorage.getItem("id");
    buttonAboutMe.innerHTML =buttonText.aboutMe[State.id];
    buttonSkill.innerHTML =buttonText.mySkills[State.id];
    contactButton.innerHTML =buttonText.myContact[State.id];
    buttonProjects.innerHTML =buttonText.myProjects[State.id];

    container.style.display = "none";
});
document.querySelector("#eng").addEventListener("click",function (e){
    document.querySelector("#target").innerHTML = arr[1];
    localStorage.setItem("id",0);
    container.style.display = "none";
    console.log(localStorage.getItem("id"));
    State.id = localStorage.getItem("id");
    buttonAboutMe.innerHTML =buttonText.aboutMe[State.id];
    buttonSkill.innerHTML =buttonText.mySkills[State.id];
    contactButton.innerHTML =buttonText.myContact[State.id];
    buttonProjects.innerHTML =buttonText.myProjects[State.id];


});
console.log(localStorage.getItem("id"));
console.log(State.id);




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

},1000);






