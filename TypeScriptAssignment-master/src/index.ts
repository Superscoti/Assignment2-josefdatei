import { helloWorld, Beispiel } from './myModule';
import { alertMe } from './myOtherModule';
import {questions} from './array';
//import {getButtonOnClick} from './button';
import {buttonClass} from './button';

var getbutton = new buttonClass;
getbutton;

console.log(helloWorld);
customElements.define('my-beispiel', Beispiel)

alertMe();