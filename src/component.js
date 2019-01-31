import template from "./component.html";

export class Component {

    constructor(){
        this.element = document.createElement('div');
        this.element.innerHTML = template;
    }
}