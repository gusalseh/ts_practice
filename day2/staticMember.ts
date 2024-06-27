class ClassA {
  static typeName: string = "myType";

  constructor() {}

  static getFullName() {
    return "ClassA " +  ClassA.typeName;
  }
}

const a = new ClassA();
// console.log(a.typeName);
console.log(ClassA.typeName);
console.log(ClassA.getFullName());