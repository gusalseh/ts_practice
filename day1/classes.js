var Person = /** @class */ (function () {
    function Person() {
        console.log("생성자 정말 되니?");
    }
    Person.prototype.speak = function () {
        console.log(this.msg);
    };
    Person.prototype.call = function () {
        console.log(this.msg + " call");
    };
    return Person;
}());
var tom = new Person();
tom.msg = "hello";
tom.speak();
tom.call();
var Animal = /** @class */ (function () {
    function Animal(msg) {
        this.msg = msg;
        console.log("동물 생성자 되는구만");
    }
    Animal.prototype.zoo = function () {
        console.log(this.msg);
    };
    return Animal;
}());
var anm = new Animal("elephant");
anm.zoo();
