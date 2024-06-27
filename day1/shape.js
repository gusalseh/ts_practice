var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var jill = {
    name: "jill",
};
var person = jill;
var result = person;
console.log(person);
console.log(jill.name);
console.log(result);
console.log(result.name);
