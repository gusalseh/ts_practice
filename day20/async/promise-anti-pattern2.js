function myWork(work) {
  return new Promise((resolve) => {
    resolve(work.toUpperCase())
  })
}

function playGame(work) {
  return new Promise((resolve, reject) => {
    if (work === "DONE") {
      resolve("GO PLAY GAME")
    } else {
      reject(new Error("DON'T PLAY GAME"))
    }
  })
}

// 프로미스를 중첩해서 사용
myWork("done")
  .then((result) => {
    playGame(result)
      .then((val) => {
        console.log(val)
      })
  })

// 결과를 then으로 넘김
myWork("done")
  .then(playGame)
  .then(console.log)