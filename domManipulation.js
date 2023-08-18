
let random = 0;
let randomName =0;
let state = {
    i: 0,
    num: 1000,
    test: "hi"
}
class domManipulation {

    constructor(props) {
        this.state = {
            i: 0,
            scrollNumber: 250,
            array: []
        }
        this.arrayFunction();
        this.changeScrollLight = this.changeScrollLight.bind(this);

    }

    arrayFunction (array) {
        this.state.array = array;
    }

    changeTextTimeInterval = (divElementID,light,lightOff) => {
        const that = this;
        function spanIt(str) {
            return str.split("").map(letter => "<span class='random_javascript'>" + letter + "</span>").join("");
        }
        this.state.array.forEach(function (value, key) {
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



