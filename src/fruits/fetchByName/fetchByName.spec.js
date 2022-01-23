const fruits = require('./fetchByName')

describe('fetchByName', () => {
  test('should calls fetchByName with correctly params', async () => {
    const spy = jest.spyOn(fruits, 'fetchByName')
    fruits.fetchByName('banana')
    expect(spy).toHaveBeenCalledWith('banana')
  })
})
