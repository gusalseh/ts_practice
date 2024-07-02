function introduced(name: string, age: number): string {
  return `내 이름은 ${name}이고, 나이는 ${age}살이야`
}
console.log(introduced("철수",30));

type InputValue = {
  name: string;
  age: number;
}
function introduce(name: InputValue["name"], age: InputValue["age"]):string {
  return `내 이름은 ${name}이고, 나이는 ${age}살이야`
}
console.log(introduce("영희",20));