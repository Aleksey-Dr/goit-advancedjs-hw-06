let anything: any = -20;
anything = 'Text';

let str: string;
str = anything;

anything = {};

let obj: object = anything;

export {
    str,
    obj,
    anything
};