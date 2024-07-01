class A {
  name: string = "A";
  go() {
    console.log(`class A output: ${this.name}`);
  }
}

class B {
  name: string = "B";
  go() {
    console.log(`class B output: ${this.name}`);
  }
}

const a = new A();
a.go();

const b = new B();
b.go = b.go.bind(a);
b.go();

console.log(b);
console.log(b.go)