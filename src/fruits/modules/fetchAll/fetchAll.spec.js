const { FetchAll } = require('./fetchAll')

const makeHttpService = () => {
  class HttpServiceStub {
    get() {
      return Promise.resolve({
        data: [
          {
            genus: 'valid first genus',
            name: 'valid first name',
            id: 1,
            family: 'valid first family',
            order: 'valid first order',
            nutritions: {
              carbohydrates: 1,
              protein: 1,
              fat: 1,
              calories: 1,
              sugar: 1,
            },
          },
          {
            genus: 'valid second genus',
            name: 'valid second name',
            id: 2,
            family: 'valid second family',
            order: 'valid second order',
            nutritions: {
              carbohydrates: 1,
              protein: 1,
              fat: 1,
              calories: 1,
              sugar: 1,
            },
          },
        ],
      })
    }
  }
  return new HttpServiceStub()
}

const makeBaseUrl = () => 'https://valid-endpoint'

const makeSut = () => {
  const baseUrlStub = makeBaseUrl()
  const httpServiceStub = makeHttpService()
  const sut = new FetchAll({ httpService: httpServiceStub, baseUrl: baseUrlStub })
  return {
    sut,
    httpServiceStub,
    baseUrlStub,
  }
}

describe('FetchAll', () => {
  test('should calls httpService with correctly params', async () => {
    const { sut, httpServiceStub, baseUrlStub } = makeSut()
    const spy = jest.spyOn(httpServiceStub, 'get')
    await sut.handle()
    expect(spy).toHaveBeenCalledTimes(1)
    expect(spy).toHaveBeenCalledWith(`${baseUrlStub}/all`)
  })

  test('should return fruit list', async () => {
    const { sut } = makeSut()
    const result = await sut.handle()
    expect(result).toEqual([
      {
        genus: 'valid first genus',
        name: 'valid first name',
        id: 1,
        family: 'valid first family',
        order: 'valid first order',
        nutritions: {
          carbohydrates: 1,
          protein: 1,
          fat: 1,
          calories: 1,
          sugar: 1,
        },
      },
      {
        genus: 'valid second genus',
        name: 'valid second name',
        id: 2,
        family: 'valid second family',
        order: 'valid second order',
        nutritions: {
          carbohydrates: 1,
          protein: 1,
          fat: 1,
          calories: 1,
          sugar: 1,
        },
      },
    ])
  })
})
