var test = "test";
let test1 = 'test1';

let timeoutPromise = new Promise((resolve, reject)=>{
    setTimeout(("1 sec")=>{
        resolve('1 sec');
    },1000);
})

timeoutPromise.then(console.log);

import add from './util';
const value = add(1,2);
console.log(value);