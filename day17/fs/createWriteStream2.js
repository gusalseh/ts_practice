// 아래와 같은 모양을 writeme2-1.txt에 저장하시오
// 00001
// 00011
// 00111
// 01111
// 11111

const fs = require("fs");

// createWriteStream에 인자로 파일 경로 전달
// write: chunk 입력
// end: 스트림 종료
// 스트림 종료 시 finish 이벤트 발생
const writeStream = fs.createWriteStream("./writeme2-1.txt");
writeStream.on;
"finish",
  () => {
    console.log("파일 쓰기 완료");
  };

for (let i = 0; i < 5; i++) {
  // 1의 갯수 = i+1
  let input = "";
  for (let j = 0; j < 5; j++) {
    if (j < 4 - i) {
      input = input.concat("0");
    } else {
      input = input.concat("1");
    }
  }
  console.log(input);

  // writeStream.write(input1 + input2 + "\n");
}

writeStream.end();
