const { makeFetchByName, makeFetchAll } = require('./fruits/implementations')

const main = async () => {
  const fetchFruitByName = makeFetchByName()
  const fetchAllFruits = makeFetchAll()

  const result = await Promise.all([
    fetchFruitByName.handle('banana'),
    fetchFruitByName.handle('apple'),
    fetchAllFruits.handle(),
  ])

  console.log({
    ...result,
  })
}

main()
