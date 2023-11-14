import {arrayOfButtonClass,arrayOfDivs,arrayOfProjectButtonID} from "./attributes.js";
import  domManipulation from "./domManipulation.js";
import  {language,eng,geo,close,overlay} from"./selectors.js";
import "./passData.js";
import {description} from "./descriptions.js";
import popupDomManipulation from "./popupDomManipulation.js";

let translate = {
    key:0
}

language.addEventListener("click", function(e){
    domManipulation.selectLanguage();
});
eng.addEventListener("click",function(e){
    domManipulation.changeTranslateMenu(0);
    translate.key =0;
});
geo.addEventListener("click",function(e){
    domManipulation.changeTranslateMenu(1);
    translate.key =1;
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

arrayOfProjectButtonID.forEach((value,key) =>{
    document.getElementById(value).addEventListener("click",function(e){
        document.getElementById("popup").style.display ="block";
        document.getElementById("logo").innerHTML =" ";
        document.getElementById('list').innerHTML = " ";
        if(description[key].id ===value){
            popupDomManipulation.popupVisible(key);
        }
    });
});

close.addEventListener("click",function(e){
    document.getElementById("popup").style.display ="none";
    document.getElementById("overlay").style.display="none";
});
overlay.addEventListener("click",function (e){
    document.getElementById("popup").style.display ="none";
    document.getElementById("overlay").style.display="none";
});



