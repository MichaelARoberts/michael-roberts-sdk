import axios from 'axios'


const api =  {
  // Expect url,sortKey, and sortOrder to  be a string
  // Expect limit, page, and offset to be ints
  get: function (url, limit, page, offset, sortKey, sortOrder) {
    this.limit = limit || 100
    this.page = page
    this.offset = offset
    this.sortKey = sortKey
    this.sortOrder = sortOrder || 'asc'

    const constructedUrl = () => {
      let defaultUrl = 'https://the-one-api.dev/v2' + url
      let totalAdditons = 0

      if (this.limit || this.page || this.offset || this.sortKey) defaultUrl += '?'

      if (this.limit) {
        defaultUrl += `limit=${this.limit}` 
        totalAdditons++
      }

      if (this.page) {
        defaultUrl += `${totalAdditons > 0 ? '&' : ''}page=${this.page}` 
        totalAdditons++
      }

      if (this.offset) {
        defaultUrl += `${totalAdditons > 0 ? '&' : ''}offset=${this.offset}` 
      }

      if(this.sortKey) {
        defaultUrl += `${totalAdditons > 0 ? '&' : ''}sort=${this.sortKey}:${this.sortOrder}` 
      }

      return defaultUrl
    }

    const apiUrl = constructedUrl()

    return new Promise((resolve, reject) => {

      if(!this.token) {
        reject('Missing Token. Please set token.')
      }

      axios.get(apiUrl,
        { headers: { Authorization: `Bearer ${this.token}` } }).then((res) => {
          resolve(res.data)
        }).catch((err) => {
          reject(err)
        })
    })
  },

  setToken: function (token)  {
    this.token = token
  },

  getChapters: async function () {return await this.get(`/chapter`)},
  getChapter: async function (id) { return await this.get(`/chapter/${id}`)},
  getBooks: async function () { return await this.get(`/book`)},
  getBook: async function (id) { return await this.get(`/book/${id}`)},
  getBooksChapters: async function (id) { return await this.get(`/book/${id}/chapter`)},

  // Movie specific
  getQuotes: async function () {return await this.get('/quote')},
  getQuote: async function (id) {return await this.get(`/quote/${id}`)},
  getMovieQuotes: async function (id) {return await this.get(`/movie/${id}/quote`)},
  getCharacterQuotes: async function (id) {return await this.get(`/character/${id}/quote`)},
  getMovie: async function (id) {return await this.get(`/movie/${id}`)},
  getMovies: async function () {return await this.get(`/movie`)},

  // Both book and the movies
  getCharacters: async function () {return await this.get(`/character`)},
  getCharacter: async function (id) {return await this.get(`/character/${id}`)},
}

export default api