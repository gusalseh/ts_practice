const fs = require("fs").promises;

console.log("시작");

// 1번 시작
fs.readFile("./readme2.txt")
  .then((data) => {
    console.log("1번", data.toString());
    // 2번 시작
    fs.readFile("./readme2.txt")
      .then((data) => {
        console.log("2번", data.toString());
        // 3번 시작
        fs.readFile("./readme2.txt")
          .then((data) => {
            console.log("3번", data.toString());
            console.log("끝");
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(err);
  });
