const { FetchByName, FetchAll } = require('../modules')
const { default: axios } = require('axios')

const baseUrl = 'https://www.fruityvice.com/api/fruit'

const makeFetchByName = () => {
  return new FetchByName({ httpService: axios, baseUrl })
}

const makeFetchAll = () => {
  return new FetchAll({ httpService: axios, baseUrl })
}

module.exports = {
  makeFetchByName,
  makeFetchAll,
}
