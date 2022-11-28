function getString() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello, World')
    },1000)
  })
}



async function  helloWorld() {
  let string = await getString()
  console.log(string)
}

export default helloWorld