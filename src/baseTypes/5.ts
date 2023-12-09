/* 
  Як ви визначите змінну в TypeScript, яка може приймати рядок або число (union type)? 
  І так само визначте змінну, яка може приймати тільки одне з двох рядкових значень: 'enable' або 'disable' (literal type)?
*/

let union: string | number;

type EnableORDisable = 'enable' | 'disable';
let literal: EnableORDisable;

union = 'Text';
let str2: string = union;

union = 22;
let num: number = union;

if (Math.round(Math.random()) === 1) {
  literal = 'enable';
} else {
  literal = 'disable';
};

export {
  str2,
  num,
  literal,
};