const { makeFetchByName, makeFetchAll } = require('./implementations')
const { default: axios } = require('axios')

const baseUrl = 'https://www.fruityvice.com/api/fruit'

describe('makeFetchByName', () => {
  test('should implements FetchByName with correctly dependencies', async () => {
    const sut = makeFetchByName()
    expect(sut.http).toEqual(axios)
    expect(sut.baseUrl).toBe(baseUrl)
  })

  test('should implements FetchAll with correctly dependencies', async () => {
    const sut = makeFetchAll()
    expect(sut.http).toEqual(axios)
    expect(sut.baseUrl).toBe(baseUrl)
  })
})
