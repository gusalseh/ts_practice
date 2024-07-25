// 동기와 비동기: 백그라운드 작업 완료 확인 여부
// 블로킹과 논블로킹: 함수가 바로 return 되는지 여부
// node -> 동기-블로킹, 비동기-논블로킹

const fs = require("fs");

console.log("시작");

let data = fs.readFileSync("./readme2.txt");
console.log("1번", data.toString());

data = fs.readFileSync("./readme2.txt");
console.log("2번", data.toString());

data = fs.readFileSync("./readme2.txt");
console.log("3번", data.toString());

console.log("끝");
