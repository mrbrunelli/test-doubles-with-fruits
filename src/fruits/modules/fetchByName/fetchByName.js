class FetchByName {
  constructor({ httpService, baseUrl }) {
    this.http = httpService
    this.baseUrl = baseUrl
  }

  async handle(name) {
    const response = await this.http.get(`${this.baseUrl}/${name}`)
    return response.data
  }
}

module.exports = {
  FetchByName,
}
