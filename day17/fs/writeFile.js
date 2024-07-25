const fs = require("fs").promises;

fs.writeFile("./writeme.txt", "글을 입력했습니다.")
  .then(() => {
    return fs.readFile("./writeme.txt");
  })
  .then((data) => {
    console.log(data.toString());
  })
  .catch((err) => {
    console.log(err);
  });
