"use strict";
exports.__esModule = true;
var test = "test";
var test1 = 'test1';
var timeoutPromise = new Promise(function (resolve, reject) {
    setTimeout(("1 sec"));
});
{
    resolve('1 sec');
}
1000;
;
timeoutPromise.then(console.log);
var util_1 = require("./util");
var value = util_1["default"](1, 2);
console.log(value);
