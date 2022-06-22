import one from '../index'
require('dotenv').config();

const ring = one.setToken(process.env.TOKEN);

// Books tests
test('getChapters returns more than one chapter', async () => {
  const chapters = await ring.getChapters();
  expect(chapters.docs.length).toBeGreaterThan(1)
})

test('getChapter returns one chapter', async () => {
  const chapter = await ring.getChapter('6091b6d6d58360f988133bc8');
  expect(chapter.docs.length).toEqual(1)
})

test('getBooks returns more than one book', async () => {
  const books = await ring.getBooks();
  expect(books.docs.length).toBeGreaterThan(1)
})

test('getBook returns one book', async () => {
  const book = await ring.getBook('5cf58080b53e011a64671584');
  expect(book.docs.length).toEqual(1)
})

test('getBooksChapters returns more than one chapter', async () => {
  const chapters = await ring.getBooksChapters('5cf58080b53e011a64671584');
  expect(chapters.docs.length).toBeGreaterThan(1)
})

// Movies tests
test('getQuotes returns more than one quote', async () => {
  const quotes = await ring.getQuotes();
  expect(quotes.docs.length).toBeGreaterThan(1)
})

test('getQuote returns one quote', async () => {
  const quote = await ring.getQuote('5cd96e05de30eff6ebcce84c');
  expect(quote.docs.length).toEqual(1)
})

test('getMovieQuotes returns more than one quote', async () => {
  const quotes = await ring.getMovieQuotes('5cd95395de30eff6ebccde5d');
  expect(quotes.docs.length).toBeGreaterThan(1)
})

// TODO: change ID here
test('getCharacterQuotes returns more than one quote', async () => {
  const quotes = await ring.getCharacterQuotes('5cd99d4bde30eff6ebccfe2e');
  expect(quotes.docs.length).toBeGreaterThan(1)
})

test('getMovies returns more than one movie', async () => {
  const movies = await ring.getMovies();
  expect(movies.docs.length).toBeGreaterThan(1)
})

test('getMovie returns one movie', async () => {
  const movie = await ring.getMovie('5cd95395de30eff6ebccde5d');
  expect(movie.docs.length).toEqual(1)
})

// All other tests
test('getCharacters returns more than one character', async () => {
  const characters = await ring.getCharacters();
  expect(characters.docs.length).toBeGreaterThan(1)
})

test('getCharacter returns one character', async () => {
  const character = await ring.getCharacter('5cd99d4bde30eff6ebccfe2e');
  expect(character.docs.length).toEqual(1)
})
