const callerObj = {
  name: 'jon',
}

function checkmyThis(age) {
  console.log(`What is this?: ${this}`)
  console.log(`Do I have a name?: ${this.name}`)
  this.age = age;
  console.log(`What is my age?: ${this.age}`)
}

checkmyThis();
// call의 첫번째 인자는 this, 두번째 인자는 함수 인자
// const callerObj에 age: 25가 추가된 형태랑 같음
checkmyThis.call(callerObj, 25);