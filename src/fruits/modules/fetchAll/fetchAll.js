class FetchAll {
  constructor({ httpService, baseUrl }) {
    this.http = httpService
    this.baseUrl = baseUrl
  }

  async handle() {
    const response = await this.http.get(`${this.baseUrl}/all`)
    return response.data
  }
}

module.exports = {
  FetchAll,
}
