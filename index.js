let p = new Promise((resolve, reject) => {
  let a = 1 + 1
  if (a === 2) {
    resolve('success')
  } else {
    reject('failed to resolve')
  }
})

p.then((message) => {
  console.log('this is in the then')
  console.log(message)
}).catch((message) => {
  console.log('this is in the catch')
  console.log(message)
})


