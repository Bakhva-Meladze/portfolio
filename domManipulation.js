
import {buttonText,titleText,TextAboutMe,descriptionText} from "./translateText.js";
import {htmlAttributesOfTranslate,arrayOfTextId} from "./attributes.js";
import  {
    buttonAboutMe,buttonSkill,contactButton,
    buttonProjects,container,profession,name,
    aboutOne,aboutTwo,aboutThree,aboutFour,aboutFive,text} from "./selectors.js";
import popupDomManipulation from "./popupDomManipulation.js";

let filter = true;


class domManipulation {
    constructor(props) {
        this.state = {
            scrollNumber: 250,
            array: [],
        }
        document.querySelector("#target").innerHTML = htmlAttributesOfTranslate[0];
        this.changeScrollLight = this.changeScrollLight.bind(this);
        this.changeTranslateMenu = this.changeTranslateMenu.bind(this);
    }
    selectLanguage() {
        filter === true ?container.style.display = "block":container.style.display = "none";
        filter = !filter;
    }
    changeTranslateMenu (key) {
        let i = key == null?0:key;

        document.querySelector("#target").innerHTML = htmlAttributesOfTranslate[i];
        buttonAboutMe.innerHTML =buttonText.aboutMe[i];
        buttonSkill.innerHTML =buttonText.mySkills[i];
        contactButton.innerHTML =buttonText.myContact[i];
        buttonProjects.innerHTML =buttonText.myProjects[i];
        profession.innerHTML = titleText.myExperienceName[i];
        name.innerHTML = titleText.myName[i],
        aboutOne.innerHTML = TextAboutMe.textOne[i],
        aboutTwo.innerHTML = TextAboutMe.textTwo[i],
        aboutThree.innerHTML = TextAboutMe.textThree[i],
        aboutFour.innerHTML = TextAboutMe.textFour[i],
        aboutFive.innerHTML = TextAboutMe.textFive[i],
        container.style.display ="none";
        localStorage.setItem("id",i);
        popupDomManipulation.data(i);
    }

    changeTextTimeInterval = (divElementID,light,lightOff) => {
        const that = this;
        function spanIt(str) {
            return str.split("").map(letter => "<span class='random_javascript'>" + letter + "</span>").join("");
        }
        arrayOfTextId.forEach(function (value, key) {
            if (divElementID.id === value) {
                let random = 0;
                const elem = divElementID;
                elem.innerHTML = spanIt(elem.innerText);
                // now each letter
                var spans = elem.querySelectorAll(".random_javascript");
                random = Math.floor(Math.random() * (spans.length - 1));
                setInterval(function () {
                    spans[random].style.filter = "brightness(100%)";
                }, light);
                setInterval(function () {
                    spans[random].style.filter = "brightness(10%)";

                }, lightOff);
            }
        });
    }

    changeScrollLight(divElementID) {
        let scroll = Math.floor(window.scrollY);
        let result = 0;
        let scrollheight = divElementID.offsetTop - this.state.scrollNumber;
        let k = scroll - scrollheight;
        let t = scrollheight - scroll;

        if (scroll > scrollheight) {
            result = -k;
        }
        if (scroll < scrollheight) {
            result = (scroll - scroll) + t;
        }
        divElementID.id === "aboutMe" ?
            document.getElementById("aboutMe").style.boxShadow = "40px 40px 100px #ffcc00" :
            document.getElementById("aboutMe").style.boxShadow = "0px 0px 0px";

        divElementID.id === "mySkills" ?
            document.getElementById("mySkills").style.boxShadow = "40px 40px 100px #ffcc00" :
            document.getElementById("mySkills").style.boxShadow = "0px 0px 0px";

        divElementID.id === "address" ?
            document.getElementById("address").style.boxShadow = "40px 40px 100px #ffcc00" :
            document.getElementById("address").style.boxShadow = "0px 0px 0px";
        divElementID.id === "myProject" ?
            document.getElementById("myProject").style.boxShadow = "40px 40px 100px #ffcc00" :
            document.getElementById("myProject").style.boxShadow = "0px 0px 0px";
        window.scrollBy(0, result);
    }
}

export default new domManipulation();



