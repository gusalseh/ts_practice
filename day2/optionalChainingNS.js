var OptionalChainingNS;
(function (OptionalChainingNS) {
    var _a;
    var Automobile = /** @class */ (function () {
        function Automobile(wheels) {
            this.wheels = wheels;
        }
        return Automobile;
    }());
    var car = new Automobile({
        count: undefined
    });
    console.log("car ", car);
    console.log("wheels ", car === null || car === void 0 ? void 0 : car.wheels);
    console.log("count ", (_a = car === null || car === void 0 ? void 0 : car.wheels) === null || _a === void 0 ? void 0 : _a.count);
    //   // 선택적 연결 (optional chaining)을 하지 않으면 아래 삼항연산자처럼 복잡해짐
    //   const count = !car ? 0
    //   : !car.wheels ? 0
    //   : !car.wheels.count ? 0
    //   : car.wheels.count;
    // 널병합의 경우, null이나 undefined만 확인함
    var val1 = undefined;
    var val2 = 10;
    var result = val1 !== null && val1 !== void 0 ? val1 : val2;
    console.log(result);
})(OptionalChainingNS || (OptionalChainingNS = {}));
