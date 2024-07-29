function myWork(work) {
  return new Promise((resolve, reject) => {
    if (work === "done") {
      resolve("게임 가능")
    } else {
      reject(new Error("게임 불가능"))
    }
  })
}

myWork("done")
  .then(
    (value) => {
      console.log(value)
  },
    (error) => {
      console.log(error)
  })

myWork("doing")
  .then((value) => {
    console.log(value)
  })
  .catch((error) => {
    console.log(error)
  })