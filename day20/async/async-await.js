async function myName() {
  return "Andy"
}

async function showName() {
  const name = await myName()
  console.log(`name: ${name}`)
}

console.log(showName())