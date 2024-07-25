const crypto = require("crypto");

const pass = "pass";
const salt = "salt";
const start = Date.now();

// fs, crypto, zlib 모듈의 메서드 실행할 때,
// 백그라운드에서 동시에 스레드풀 실행됨
crypto.pbkdf2(pass, salt, 1000000, 128, "sha512", () => {
  console.log("1: ", Date.now() - start);
});

crypto.pbkdf2(pass, salt, 1000000, 128, "sha512", () => {
  console.log("2: ", Date.now() - start);
});

crypto.pbkdf2(pass, salt, 1000000, 128, "sha512", () => {
  console.log("3: ", Date.now() - start);
});

crypto.pbkdf2(pass, salt, 1000000, 128, "sha512", () => {
  console.log("4: ", Date.now() - start);
});

crypto.pbkdf2(pass, salt, 1000000, 128, "sha512", () => {
  console.log("5: ", Date.now() - start);
});

crypto.pbkdf2(pass, salt, 1000000, 128, "sha512", () => {
  console.log("6: ", Date.now() - start);
});

crypto.pbkdf2(pass, salt, 1000000, 128, "sha512", () => {
  console.log("7: ", Date.now() - start);
});

crypto.pbkdf2(pass, salt, 1000000, 128, "sha512", () => {
  console.log("8: ", Date.now() - start);
});

crypto.pbkdf2(pass, salt, 1000000, 128, "sha512", () => {
  console.log("9: ", Date.now() - start);
});

crypto.pbkdf2(pass, salt, 1000000, 128, "sha512", () => {
  console.log("10: ", Date.now() - start);
});

crypto.pbkdf2(pass, salt, 1000000, 128, "sha512", () => {
  console.log("11: ", Date.now() - start);
});

crypto.pbkdf2(pass, salt, 1000000, 128, "sha512", () => {
  console.log("12: ", Date.now() - start);
});

// 스레드풀을 직접 컨트롤할 수는 없지만
// 개수 조절은 가능
// 윈도우 -> 터미널에 SET UV_THREADPOOL_SIZE=개수
// 맥, 리눅스 -> 터미널에 UV_THREADPOOL_SIZE=개수
