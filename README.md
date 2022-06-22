# the-one-sdk
the-one-sdk is an SDK for the [The One API](https://the-one-api.dev/)


## How to Install
npm install the-one-sdk

## How to Run Tests
npm test

## Basic Functionality
```
import one from 'the-one-sdk'
const ring = one.setToken('YOUR-TOKEN-HERE');
const quotes = await ring.getQuotes();
console.log(quotes)
```