class FetchByName {
  constructor({ httpService }) {
    this.http = httpService
  }

  async handle(name) {
    const response = await this.http.get(`https://www.fruityvice.com/api/fruit/${name}`)
    return response.data
  }
}

module.exports = FetchByName
