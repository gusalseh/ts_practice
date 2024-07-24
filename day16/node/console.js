const string = "abc";
const number = 1;
const boolean = true;
const obj = {
  Outside: {
    inside: {
      key: "value",
    },
  },
};

console.log("전체 시간");

console.table([
  { name: "제로", birth: 1994 },
  { name: "hero", birth: 2008 },
]);

console.dir(obj, { colors: true, depth: 2 });
console.dir(obj, { colors: false, depth: 2 });
console.dir(obj, { colors: true, depth: 1 });

console.time("시간 측정");
for (let i = 0; i < 100000; i++) {}
console.timeEnd("시간 측정");

function b() {
  console.trace("에러 위치 추적");
}

function a() {
  b();
}

console.timeEnd("전체 시간");
