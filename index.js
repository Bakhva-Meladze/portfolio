import {buttonText} from "./translateText.js";
import {arrayOfButtonClass,arrayOfDivs} from "./attributes.js";
import  domManipulation from "./domManipulation.js";

console.log(domManipulation);



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
/*
        const classes = new domManipulation();
*/
         domManipulation.changeScrollLight(document.getElementById(arrayOfDivs[key]));
/*
        classes.changeScrollLight(document.getElementById(arrayOfDivs[key]));
*/
    });
});

addEventListener("scroll",function(){
    console.log(Math.floor(window.scrollY));
});

 let state ={
     i:0,
     num:1000,
     test: "hi"
 }

 if(state.i >2){
     state.num =10;
 }

function span_it(str) {
    return str.split("").map(letter => "<span class='random_javascript'>" + letter + "</span>").join("")
}
let random = 0;
setInterval(function () {

        if(state.i % 2 ===0) {
            const elem = document.getElementById("profession");
            elem.innerHTML = span_it(elem.innerText);
            // now each letter
            var spans = elem.querySelectorAll(".random_javascript");

            console.log("spans length: " + spans.length);

            random = Math.floor(Math.random() * (spans.length - 1));
            setInterval(function(){
                spans[random].style.filter = "brightness(100%)";


            }, 100);
        }
        if(state.i % 2 !==0) {
            const elem = document.getElementById("profession");
            setTimeout(function(){


            },10);

            var spans = elem.querySelectorAll(".random_javascript");
            setInterval(function(){
                spans[random].style.filter = "brightness(10%)";
            }, 100);

        }
        state.i++;
        if(state.i === 3){
            state.i=0;
        }


}, 1000);

console.log(state.test);
state.test = "hop change";
console.log(state.test);


