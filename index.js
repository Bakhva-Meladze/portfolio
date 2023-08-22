import {buttonText} from "./translateText.js";
import {arrayOfButtonClass,arrayOfDivs,stateOfScroll,arrayOfTextId} from "./attributes.js";
import  domManipulation from "./domManipulation.js";
const selectLanguage = document.querySelector("#language");
const container = document.querySelector("#container");
let filter = true;



selectLanguage.addEventListener("click", function(e){
    filter === true ?container.style.display = "block":container.style.display = "none";
    filter = !filter;
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

domManipulation.arrayFunction(arrayOfTextId);
setInterval(function () {
    domManipulation.changeTextTimeInterval(document.getElementById("profession"),100,99);
    domManipulation.changeTextTimeInterval(document.getElementById("name"),100,99);

},1000);






