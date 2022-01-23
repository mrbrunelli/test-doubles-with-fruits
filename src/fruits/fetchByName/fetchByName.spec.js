const fruits = require('./fetchByName')

const makeSut = () => {
  const sut = fruits
  return {
    sut,
  }
}

describe('fetchByName', () => {
  test('should calls fetchByName with correctly params', async () => {
    const { sut } = makeSut()
    const spy = jest.spyOn(fruits, 'fetchByName')
    await sut.fetchByName('valid fruit name')
    expect(spy).toHaveBeenCalledTimes(1)
    expect(spy).toHaveBeenCalledWith('valid fruit name')
  })

  test('should return fruit details if fruit exists', async () => {
    const { sut } = makeSut()
    const result = await sut.fetchByName('valid fruit name')
    expect(result).toEqual({
      genus: 'valid genus',
      name: 'valid fruit name',
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
  })
})
