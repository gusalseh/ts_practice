// 비동기는 코드의 순서와 실행 순서가 일치 X
const fs = require("fs").promises;

console.log("시작");

fs.readFile("./readme2.txt")
  .then((data) => {
    console.log("1번", data.toString());
  })
  .catch((err) => {
    console.log(err);
  });

fs.readFile("./readme2.txt")
  .then((data) => {
    console.log("2번", data.toString());
  })
  .catch((err) => {
    console.log(err);
  });

fs.readFile("./readme2.txt")
  .then((data) => {
    console.log("3번", data.toString());
  })
  .catch((err) => {
    console.log(err);
  });

console.log("끝");
