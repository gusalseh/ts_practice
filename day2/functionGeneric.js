function getLength(arg) {
    if (arg.hasOwnProperty("length")) {
        return arg["length"];
    }
    return 0;
}
// console.log(getLength(22));
console.log(getLength("Hello World."));
function getLength2(arg) {
    return arg.length;
}
console.log(getLength2("Hello World."));
