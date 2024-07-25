const fs = require("fs");

// fs는 파일/폴더 생성, 삭제, 읽기, 쓰기 가능
fs.readFile("./readme.txt", (err, data) => {
  // file read는 크리티컬한 에러를 예외처리 해준다.
  if (err) {
    throw err;
  }
  console.log(data);
  console.log(data.toString());
});
