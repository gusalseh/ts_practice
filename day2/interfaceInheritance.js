var InterfaceNamespace;
(function (InterfaceNamespace) {
    // 클래스가 인터페이스를 상속했기에 구현 존재
    var Motorcycle = /** @class */ (function () {
        function Motorcycle(name) {
            // no super for interfaces
            this.name = name;
        }
        Motorcycle.prototype.updateWheelCount = function (newWheelCount) {
            this.wheelCount = newWheelCount;
            console.log("Automobile has ".concat(this.wheelCount));
        };
        Motorcycle.prototype.showNumberOfWheels = function () {
            console.log("moved Automobile ".concat(this.wheelCount, " miles"));
        };
        Motorcycle.prototype.getFullName = function () {
            return "MC-" + this.name;
        };
        return Motorcycle;
    }());
    var moto = new Motorcycle("beginner-cycle");
    console.log(moto.getFullName());
})(InterfaceNamespace || (InterfaceNamespace = {}));
