// Replace callbacks
const userLeft = false
const userWatchingYoutube = false

let userStatusCallback = (successCallback, errorCallback) => {
  if (userLeft) {
    errorCallback({
      name: 'User Did Leave to unknown path',
      message: 'What a bummer'
    })
  } else if (userWatchingYoutube) {
    errorCallback({
      name: 'user exited to Youtube',
      message: 'have a great time'
    })
  } else {
    successCallback('PLEASE TURN OFF ADBLOCK')
  }
}

userStatusCallback(
  (message) => {
    console.log('the user stayed on our page!')
    console.log(message)
  },
  (error) => {
    console.log(error.name)
    console.log(error.message)
  }
)

let userStatusPromise = () => {
  return new Promise ((resolve, reject) => {
    if (userLeft) {
      reject({
        name: 'User Did Leave to unknown path',
        message: 'What a bummer'
      })
    } else if (userWatchingYoutube) {
      reject({
        name: 'user exited to Youtube',
        message: 'have a great time'
      })
    } else {
      resolve('PLEASE TURN OFF ADBLOCK')
    }

  })

}

userStatusPromise().then((message) => {
  console.log('The User Stayed on this page - with a promise')
  console.log(message)
}).catch((error) => {
  console.log(error.name)
  console.log(error.message)
})
