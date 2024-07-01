// return값이 객체
function getEmployee(id) {
  return {
    name: 'John',
    age: 35,
    address: '123 st',
    count: 'United States'
  }
}

const { name: fullName, age } = getEmployee(22);
console.log('employee', fullName, age);

// return값이 배열
function getEmployeeWorkInfo(id) {
  return [
    id,
    'Office St',
    'France'
  ];
}

const [id, officeAddress] = getEmployeeWorkInfo(33);
const list = getEmployeeWorkInfo(22);
console.log('employee', id, officeAddress);
console.log('employee', ...list)