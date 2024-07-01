var NamespaceA;
(function (NamespaceA) {
    class A {
        constructor() {
            this.aname = "A";
        }
    }
    class B {
        constructor() {
            this.bname = "B";
        }
    }
    const a = new A();
    const b = new B();
    const c = Object.assign(Object.assign({}, a), b);
    const d = Object.assign(a, b);
    console.log(c);
    console.log(d);
    a.aname = 'a1';
    // spread는 사본값(copy)이라 원본값의 변화에 영향받지 않는다
    console.log(c);
    // assign은 얼라이언싱이라 원본값을 바라본다
    console.log(d);
})(NamespaceA || (NamespaceA = {}));
