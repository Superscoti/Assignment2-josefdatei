export class buttonClass {
    constructor() {
        //import {questions} from './array';

        var button = document.querySelector("#nextquestion");
        var question = document.getElementById("question")! as HTMLElement;
        
        button?.addEventListener("click", function(){
        question.innerHTML = "josef";
        })
    }
}


