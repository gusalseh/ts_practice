const { Worker, isMainThread, parentPort } = require("worker_threads");

// 부모일때
// isMainThread = 현재 코드가 메인 스레드 or 워커 스레드에서 실행되는지 구분
// node worker_threads 했으니 이 파일은 메인 스레드d
if (isMainThread) {
  // new Worker를 통해 현재 파일을 워커 스레드에서 실행
  const worker = new Worker(__filename);
  worker.on("message", (message) => console.log("from worker", message));
  worker.on("exit", () => console.log("worker exit"));
  // 부모에서 워커로 데이터를 보냄
  worker.postMessage("ping");
}
// 워커일때
else {
  // parentPort.on('message')로
  // 부모로부터 데이터를 받고
  // postMessage로 데이터 보냄
  parentPort.on("message", (value) => {
    console.log("from parent", value);
    parentPort.postMessage("pong");
    parentPort.close();
  });
}
