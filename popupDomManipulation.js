import {description} from "./descriptions.js";

class popupDomManipulation {

    constructor(props) {
        this.state = {
            logo:null,
            popup:null,
            language: localStorage.getItem("id")
        }

        this.popupVisible = this.popupVisible.bind(this);
    }
    data(key) {
        this.state.language = key;
    }

    popupVisible (key) {
        document.getElementById("overlay").style.display ="block";
        this.state.logo = `<p>Used - </p>`+
            description[key].images.map((value,key)=> {
                return `<img id=${key} class="img test" src=${value}>`
            }).join('');
        this.state.popup = `<p id="">${description[key].text[this.state.language]}</p>
        <img class="img" src="${description[key].gif}">`;
        this.renderDom();
    }

    renderDom(){
        document.getElementById('logo').insertAdjacentHTML("afterbegin",this.state.logo);
        document.getElementById('list').insertAdjacentHTML("afterbegin",this.state.popup);

    }
}

export default new popupDomManipulation();