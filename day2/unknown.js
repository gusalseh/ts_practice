var val = 22;
val = 'string value';
val = new Array();
console.log("Is this a String Type?: ", val instanceof String);
console.log("Is this an Array Type?: ", val instanceof Array);
if (val instanceof Array) {
    val.push(33, 22, 11);
    console.log(val[1]);
}
console.log(val);
