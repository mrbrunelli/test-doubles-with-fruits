const { makeFetchByName } = require('./fruits/implementations')

const main = async () => {
  const fetchFruitByName = makeFetchByName()
  const response = await fetchFruitByName.handle('banana')
  console.log(response)
}

main()
