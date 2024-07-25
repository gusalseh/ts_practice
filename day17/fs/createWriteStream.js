const fs = require("fs");

// createWriteStream에 인자로 파일 경로 전달
// write: chunk 입력
// end: 스트림 종료
// 스트림 종료 시 finish 이벤트 발생
const writeStream = fs.createWriteStream("./writeme2.txt");
writeStream.on;
"finish",
  () => {
    console.log("파일 쓰기 완료");
  };

writeStream.write("이 글을 씁니다.\n");
writeStream.write("한번 더 씁니다.");
writeStream.end();
