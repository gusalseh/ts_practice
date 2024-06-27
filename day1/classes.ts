class Person {
  constructor() {
    console.log("생성자 정말 되니?");
  }
  msg: string;
  speak() {
    console.log(this.msg);
  }
  call() {
    console.log(this.msg + " call");
  }
}

const tom = new Person();
tom.msg = "hello";
tom.speak();
tom.call();

class Animal {
  constructor(private msg: string) {
    console.log("동물 생성자 되는구만");
  }
  zoo() {
    console.log(this.msg);
  }
}

const anm = new Animal("elephant");
anm.zoo();
