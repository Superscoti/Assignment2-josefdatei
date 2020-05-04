import { helloWorld, Beispiel } from './myModule';
import { alertMe } from './myOtherModule';
import {questions} from './array';
import buttonClass from './button';

new buttonClass;

console.log(helloWorld);
customElements.define('my-beispiel', Beispiel)

alertMe();