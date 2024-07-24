// 4
setImmediate(() => {
  console.log("immediate");
});

// 1
// nextTick의 콜백 함수를 우선적으로 처리
process.nextTick(() => {
  console.log("nextTick");
});

// 3
setTimeout(() => {
  console.log("timeout");
}, 0);

// 2
// setImmediate, setTimeout 보다 promise가 먼저 실행됨
Promise.resolve().then(() => console.log("promise"));
