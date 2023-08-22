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

const arr = [
    `<div class="divGeo"><img src="images/pngwing.com%20(1).png">ENG</div>`,
    `<div class="divGeo"><img src="images/georgia-flag-icon.png">Geo</div>`,];
document.querySelector("#target").innerHTML = arr[0];

selectLanguage.addEventListener("click", function(e){
    filter === true ?container.style.display = "block":container.style.display = "none";
    filter = !filter;
});

/* let State ={
    id: localStorage.getItem("id")?localStorage.getItem("id"):1
}*/
const id = ["#eng","#geo"];
document.querySelector("#eng").addEventListener("click",function(e){
    domManipulation.changeTranslateMenu(0,arr);
});
document.querySelector("#geo").addEventListener("click",function(e){
    domManipulation.changeTranslateMenu(1,arr);
});



/*
document.querySelector("#geo").addEventListener("click",function (e){
    document.querySelector("#target").innerHTML = arr[1];
    localStorage.setItem("id",1);
    buttonAboutMe.innerHTML =buttonText.aboutMe[1];
    buttonSkill.innerHTML =buttonText.mySkills[1];
    contactButton.innerHTML =buttonText.myContact[1];
    buttonProjects.innerHTML =buttonText.myProjects[1];

});
document.querySelector("#eng").addEventListener("click",function (e){
    document.querySelector("#target").innerHTML = arr[0];
    localStorage.setItem("id",0);
    container.style.display = "none";
    console.log(localStorage.getItem("id"));
    buttonAboutMe.innerHTML =buttonText.aboutMe[0];
    buttonSkill.innerHTML =buttonText.mySkills[0];
    contactButton.innerHTML =buttonText.myContact[0];
    buttonProjects.innerHTML =buttonText.myProjects[0];
});*/





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






