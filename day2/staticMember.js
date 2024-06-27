var ClassA = /** @class */ (function () {
    function ClassA() {
    }
    ClassA.getFullName = function () {
        return "ClassA " + ClassA.typeName;
    };
    ClassA.typeName = "myType";
    return ClassA;
}());
var a = new ClassA();
// console.log(a.typeName);
console.log(ClassA.typeName);
console.log(ClassA.getFullName());
