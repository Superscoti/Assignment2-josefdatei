import {questions} from './array';

export default class buttonClass {

    private question = document.getElementById("question")! as HTMLElement;
    private index:number = 0;

    constructor() {
        this.initButton();
    }

    private nextIndex():void {
        if(this.index >= questions.length-1) {
            this.index = 0;
        }else{
            this.index += 1;
        }
    }

    private onClick():void {
        console.log(questions[this.index]);
        this.question.innerHTML = questions[this.index];
        this.nextIndex();
    }

    private initButton():void {
        let button = document.querySelector("#nextquestion")! as HTMLElement;
        button?.addEventListener("click", ()=> {
            console.log(this.index);
            this.onClick();
        });
    }
}