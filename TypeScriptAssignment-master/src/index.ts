import { helloWorld, Beispiel } from './myModule';
import { alertMe } from './myOtherModule';
import {questions} from './array';

console.log(helloWorld);
customElements.define('my-beispiel', Beispiel)


alertMe();