const { FetchByName } = require('./fetchByName')

const makeHttpService = () => {
  class HttpServiceStub {
    get() {
      return Promise.resolve({
        data: {
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
        },
      })
    }
  }
  return new HttpServiceStub()
}

const makeBaseUrl = () => 'https://valid-base-url'

const makeSut = () => {
  const httpServiceStub = makeHttpService()
  const baseUrlStub = makeBaseUrl()
  const sut = new FetchByName({ httpService: httpServiceStub, baseUrl: baseUrlStub })
  return {
    sut,
    httpServiceStub,
    baseUrlStub,
  }
}

describe('FetchByName', () => {
  test('should calls handle method with correctly params', async () => {
    const { sut } = makeSut()
    const spy = jest.spyOn(sut, 'handle')
    await sut.handle('valid fruit name')
    expect(spy).toHaveBeenCalledTimes(1)
    expect(spy).toHaveBeenCalledWith('valid fruit name')
  })

  test('should return fruit details if fruit exists', async () => {
    const { sut } = makeSut()
    const result = await sut.handle('valid fruit name')
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

  test('should calls httpService with correctly params', async () => {
    const { sut, httpServiceStub, baseUrlStub } = makeSut()
    const spy = jest.spyOn(httpServiceStub, 'get')
    await sut.handle('valid fruit name')
    expect(spy).toHaveBeenCalledTimes(1)
    expect(spy).toHaveBeenCalledWith(`${baseUrlStub}/valid fruit name`)
  })
})
