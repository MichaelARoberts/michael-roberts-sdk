# the-one-sdk
the-one-sdk is an SDK for the [The One API](https://the-one-api.dev/)

![minified-size](https://img.shields.io/bundlephobia/min/@michaelaroberts/the-one-sdk?style=flat)
![lic](https://img.shields.io/github/license/MichaelARoberts/michael-roberts-sdk)

## How to Install
npm i @michaelaroberts/the-one-sdk

## How to Build/Run Local
the-one-sdk is bundled with parcel, run ```npm run watch``` or ```npm run build``` to run the compiler, either in watch or build mode

## How to Run Tests
npm test

## Basic Functionality
```
import one from 'the-one-sdk'
const ring = one.setToken('YOUR-TOKEN-HERE');
const quotes = await ring.getQuotes();
console.log(quotes)
```