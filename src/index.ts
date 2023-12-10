import {
    age,
    name,
    toggle,
    empty,
    notInitialize,
    callback
} from './baseTypes/1';

import {
    str,
    obj,
    anything
} from './baseTypes/2';

import { str1 } from './baseTypes/3';

import { person } from './baseTypes/4';

import {
    str2,
    num,
    literal,
} from './baseTypes/5';

import {
    showMessage,
    calc,
} from './baseTypes/6';

import { Day, isWeekend } from './baseTypes/7';

import { myGender } from './baseTypes/8';

import { page1, page2 } from './baseTypes/9';

// ========== GENERIC
import { getPromise } from './generic/1';

console.log('========== Base Types');
console.log('Task 1');
console.log(age);
console.log(name);
console.log(toggle);
console.log(empty);
console.log(notInitialize);
console.log(callback(1));

console.log('Task 2');
console.log(str);
console.log(obj);
console.log(anything);

console.log('Task 3');
console.log(str1);

console.log('Task 4');
console.log(person);

console.log('Task 5');
console.log(str2);
console.log(num);
console.log(literal);

console.log('Task 6');
showMessage('Hello!');
console.log(calc(11, 11));

console.log('Task 7');
console.log(isWeekend(Day.MONDAY));

console.log('Task 8');
console.log(myGender);

console.log('Task 9');
console.log(page1);
console.log(page2);

console.log('========== Generic');
console.log('Task 1');
console.log(getPromise());