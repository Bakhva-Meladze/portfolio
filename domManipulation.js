

export default class screenChangeClass {

    constructor(props) {
        this.state = {
            scrollNumber: 200
        }
        this.documentButtonElements = this.documentButtonElements.bind(this);
    }

    documentDivs = () => {
        console.log("first Div");

        return document.getElementById("aboutMe");

    }

    documentButtonElements(divElementID) {

        let scroll = Math.floor(window.scrollY);
        let result = 0;
        let scrollheight = divElementID.offsetTop - this.state.scrollNumber;
        console.log(scrollheight);
        let k = scroll - scrollheight;
        let t = scrollheight - scroll;
        if (scroll > scrollheight) {
            result = (scroll - scroll) - k;
        }
        if (scroll < scrollheight) {
            result = (scroll - scroll) + t;
        }
        divElementID.id === "aboutMe" ?
            document.getElementById("aboutMe").style.boxShadow = "2px 40px 100px #3498db" :
            document.getElementById("aboutMe").style.boxShadow = "0px 0px 0px";

        divElementID.id === "mySkills" ?
            document.getElementById("mySkills").style.boxShadow = "2px 40px 100px #3498db" :
            document.getElementById("mySkills").style.boxShadow = "0px 0px 0px";

        divElementID.id === "address" ?
            document.getElementById("address").style.boxShadow = "2px 40px 100px #3498db" :
            document.getElementById("address").style.boxShadow = "0px 0px 0px";
        divElementID.id === "myProject" ?
            document.getElementById("myProject").style.boxShadow = "2px 40px 100px #3498db" :
            document.getElementById("myProject").style.boxShadow = "0px 0px 0px";
        window.scrollBy(0, result);
    }
}



