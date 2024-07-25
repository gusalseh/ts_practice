// 파일을 압축한 후 복사
// 압축에는 zlib 내장 모듈 사용
// createGzip으로 .gz 파일 생성
const zlib = require("zlib");
const fs = require("fs");

const readStream = fs.createReadStream("./readme4.txt");
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream("./readme4.txt.gz");
readStream.pipe(zlibStream).pipe(writeStream);
