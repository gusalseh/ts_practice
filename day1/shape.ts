class Person {
  name: string;
}

const jill: Person = {
  name: "jill",
};

const person: Person = jill;

const result: Person = person;

console.log(person);
console.log(jill.name);
console.log(result);
console.log(result.name);
