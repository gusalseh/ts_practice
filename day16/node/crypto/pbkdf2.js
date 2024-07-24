// 단방향 알고리즘
const crypto = require("crypto");

crypto.randomBytes(64, (err, buf) => {
  // 원래면 salt를 랜덤 생성하면 안됨
  // salt를 외부에서 변수로 따로 관리해야함
  const salt = buf.toString("base64");
  console.log("salt:", salt);
  crypto.pbkdf2("비밀번호", salt, 100000, 64, "sha512", (err, key) => {
    console.log("password:", key.toString("base64"));
  });
});
