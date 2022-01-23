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
    sut.fetchByName('banana')
    expect(spy).toHaveBeenCalledTimes(1)
    expect(spy).toHaveBeenCalledWith('banana')
  })
})
