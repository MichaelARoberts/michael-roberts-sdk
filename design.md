# SDK Design

For the sake of simplicty and time, as well as considering other factors such as testing, I've kept this SDK simple as the API on it's own is well designed. Currently it is a 1:1 copy of the endpoints provided by the [The One API](https://the-one-api.dev/). The one exception is the filtering values provided by the API, which has yet to be completed.

## Authentication

Authentication is handled by the API, the user need only pass their token by using the following method and then storing the result.

```js
const ring = one.setToken('YOUR-TOKEN-HERE');
```

## Endpoint to Method map
Following authentication, methods can then be called. They all return the exact JSON returned by the API. All methods are asynchronous.

| Endpoint | Method |
| --- | ----------- |
| getChapters | /chapter |
|getChapter | /chapter/{id} |
|getBooks | /book |
|getBook | /book/{id} |
|getBooksChapters | /book/{id}/chapter |
|getQuotes | /quote/{id} |
|getQuote | /quote |
|getMovieQuotes | /movie/{id}/quote |
|getCharacterQuotes | /character/{id}/quote |
|getMovie | /movie/{id} |
|getMovies | /movie |
|getCharacters | /character/{id} |
|getCharacter | /character |
