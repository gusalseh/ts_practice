function getLength(arg) {
    // if((arg as any).hasOwnProperty("length")) {
    //   return arg["length"]
    // }
    // return 0;
    return arg.length;
}
// console.log(getLength(22));
console.log(getLength("Hello World."));
