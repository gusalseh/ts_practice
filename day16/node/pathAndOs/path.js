const path = require("path");

const string = __filename;

console.log("path.sep:", path.sep);
console.log("path.delimiter:", path.delimiter);
console.log("----------------------------------");
console.log("path.dirname():", path.dirname(string));
console.log("path.extname():", path.extname(string));
console.log(
  "path.basename - extname:",
  path.basename(string, path.extname(string))
);
console.log("-------------------------------");
console.log("path.parse():", path.parse(string));
console.log(
  "path.format():",
  path.format({
    dir: "C:\\dev\\projects\\ts_practice\\path16",
    name: "path",
    ext: ".js",
  })
);

console.log(
  "path.normalize():",
  path.normalize("C:\\dev\\\\projects\\\ts_practice\\path16\\path.js")
);
console.log("---------------------------------------");
console.log("path.isAbsolute(C:\\):", path.isAbsolute("C:\\"));
console.log("path.isAbsolute(./home):", path.isAbsolute("./home"));
console.log("---------------------------------------");
console.log(
  "path.relative():",
  path.relative("C:\\dev\\projects\\ts_practice\\day16\\path.js", "C:\\")
);
// join은 /를 상대경로로 처리
console.log(
  "path.join():",
  path.join(
    __dirname,
    "..",
    "..",
    "/dev",
    ".",
    "/projects",
    ".",
    "/ts_practice",
    ".",
    "day16"
  )
);
// resolve는 /를 절대경로로 처리
console.log(
  "path.resolve():",
  path.resolve(
    __dirname,
    "..",
    "/dev",
    ".",
    "/projects",
    ".",
    "/ts_practice",
    ".",
    "day16"
  )
);
