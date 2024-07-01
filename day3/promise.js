const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("I completed successfully")
    // reject("I failed");
  }, 1000);
});

myPromise
  // resolve 실행
  .then(done => {
    console.log("done:", done)
  })
  // reject 실행
  .catch(err => {
    console.log("err:", err);
  });