function myFunction() {
    console.log(this);
}
myFunction();
var test = new myFunction();
var myFunc = function (title, message, number) {
    // console.log(title);
    // console.log(message);
    // console.log(number);
    console.log(title, message, number);
    return true;
};
myFunc("Arrow Func Test!", "Title", 3);
var func = function () { return console.log('func'); };
var func1 = function () { return ({ name: 'dave' }); };
var func2 = function () {
    var val = 30;
    return val;
};
console.log(func());
console.log(func1());
console.log(func2());
