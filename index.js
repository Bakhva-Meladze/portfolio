import {arrayOfButtonClass,arrayOfDivs} from "./attributes.js";
import  domManipulation from "./domManipulation.js";
import  "./selectors.js";

document.querySelector("#language").addEventListener("click", function(e){
    domManipulation.selectLanguage();
});
document.querySelector("#eng").addEventListener("click",function(e){
    domManipulation.changeTranslateMenu(0);
});
document.querySelector("#geo").addEventListener("click",function(e){
    domManipulation.changeTranslateMenu(1);
});
addEventListener("load",function(){
    domManipulation.changeTranslateMenu(localStorage.getItem("id"));
});
arrayOfButtonClass.forEach((value,key) =>{
    document.getElementById(value).addEventListener("click",function(){
         domManipulation.changeScrollLight(document.getElementById(arrayOfDivs[key]));
    });
});
setInterval(function () {
    domManipulation.changeTextTimeInterval(document.getElementById("profession"),100,99);
    domManipulation.changeTextTimeInterval(document.getElementById("name"),100,99);
},1000);




