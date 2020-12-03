const cookSteak = new Promise((resolve, reject) => {
  resolve('finished searing the steak')
})

const prepareSalad = new Promise((resolve, reject) => {
  resolve('prepared the spinach and carrotts ')
})

const steamVeggies = new Promise((resolve, reject) => {
  resolve('veggies are cooked')
})

Promise.all([
  cookSteak,
  prepareSalad,
  steamVeggies
]).then((messages) => {
  console.log(messages)
  console.log('What a beautiful meal')
})

Promise.race([
  cookSteak,
  prepareSalad,
  steamVeggies
]).then((message) => {
  console.log('just one dish finished')
})
