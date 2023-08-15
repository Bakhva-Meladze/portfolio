
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
            scrollNumber: 250
        }
        this.changeScrollLight = this.changeScrollLight.bind(this);

    }


    changeTextTimeInterval= (divElementID)=> {
        const that=this;
        function spanIt (str){
            return str.split("").map(letter => "<span class='random_javascript'>" + letter + "</span>").join("");
        }
            if(divElementID.id ==="name"){

                const elem = divElementID;
                elem.innerHTML = spanIt(elem.innerText);
                // now each letter
                var spans = elem.querySelectorAll(".random_javascript");
                randomName = Math.floor(Math.random() * (spans.length - 1));

                setInterval(function () {
                    spans[randomName].style.filter = "brightness(100%)";

                }, 10);
                setInterval(function () {

                    spans[randomName].style.filter = "brightness(10%)";

                }, 100);
            }
            if(divElementID.id ==="profession"){
                const elem = divElementID;
                elem.innerHTML = spanIt(elem.innerText);
                // now each letter
                var spans = elem.querySelectorAll(".random_javascript");
                random = Math.floor(Math.random() * (spans.length - 1));

                setInterval(function () {
                    spans[random].style.filter = "brightness(100%)";

                }, 10);
                setInterval(function () {

                    spans[random].style.filter = "brightness(10%)";

                }, 100);
            }






    }

    changeScrollLight(divElementID){

        let scroll = Math.floor(window.scrollY);
        let result = 0;
        let scrollheight = divElementID.offsetTop - this.state.scrollNumber;
        let k = scroll - scrollheight;
        let t = scrollheight - scroll;
        console.log(scrollheight);


        if (scroll > scrollheight) {
            result = -k;
            console.log(result);
        }
        if (scroll < scrollheight) {
            result = (scroll - scroll) + t;
            console.log(result);
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

export default new domManipulation();



