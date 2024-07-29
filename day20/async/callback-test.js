const DB = [];

// 회원 가입 api 함수
function register(user) {
  return saveDB(user, (user) => {
    return sendEmail(user, (user) => {
      return getResult(user);
    })
  })
}

function saveDB(user, callback) {
  DB.push(user);
  console.log(`save ${user.name} to DB`)
  return callback(user);
}

function sendEmail(user, callback) {
  console.log(`email to ${user.email}`)
  return callback(user)
}

function getResult(user) {
  return `success register ${user.name}`
}

const obj = {
  email: "andy@test.com",
  password: "1234",
  name: "andy"
}
const result = register(obj)
console.log(result)