async function delayedResult() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("I completed successfully");
      // reject("I failed");
    }, 1000)
  });
}

(async function execAsyncFunc() {
  const result = await delayedResult();
  console.log(result);
})();