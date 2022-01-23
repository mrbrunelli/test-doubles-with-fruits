module.exports.fetchByName = async (name) => {
  return Promise.resolve({
    genus: 'valid genus',
    name,
    id: 1,
    family: 'valid family',
    order: 'valid order',
    nutritions: {
      carbohydrates: 1,
      protein: 1,
      fat: 1,
      calories: 1,
      sugar: 1,
    },
  })
}
