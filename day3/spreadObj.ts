namespace NamespaceA {
  class A {
    aname: string = "A";
  }

  class B {
    bname: string = "B";
  }

  const a = new A();
  const b = new B();
  const c = {...a, ...b}
  const d = Object.assign(a, b);
  console.log(c);
  console.log(d);

  a.aname = 'a1';
  // spread는 사본값(copy)이라 원본값의 변화에 영향받지 않는다
  console.log(c);
  // assign은 얼라이언싱이라 원본값을 바라본다
  console.log(d);
}