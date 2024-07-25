// 스트림: 데이터의 흐름
// 일정한 크기로 나눠서 여러 번에 걸쳐 처리
// 버퍼(또는 chunk)의 크기를 작게 만들어서 주기적으로 데이터 전달
// 스트리밍: 일정한 크기의 데이터를 지속적으로 전달하는 작업
const fs = require("fs");

// createReadStream에 인자로 파일 경로와 옵션 객체 전달
// highWaterMark 옵션은 버퍼의 크기(바이트 단위)
// data, end, error 이벤트 리스너와 같이 사용
const readStream = fs.createReadStream("./readme3.txt", {
  highWaterMark: 16,
});
const data = [];

readStream.on("data", (chunk) => {
  data.push(chunk);
  console.log("data :", chunk, chunk.length);
});

readStream.on("end", () => {
  console.log("end :", Buffer.concat(data).toString());
});

readStream.on("error", (err) => {
  console.log("error :", err);
});
