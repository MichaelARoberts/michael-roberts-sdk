# the-one-sdk
the-one-sdk is an SDK for the [The One API](https://the-one-api.dev/)

![minified-size](https://img.shields.io/bundlephobia/min/@michaelaroberts/the-one-sdk?style=flat)
![lic](https://img.shields.io/github/license/MichaelARoberts/michael-roberts-sdk)

## How to Install
npm i @michaelaroberts/the-one-sdk

## How to Build/Run Local
the-one-sdk is bundled with parcel, run ```npm run watch``` or ```npm run build``` to run the compiler, either in watch or build mode

## How to Run Tests
create a .env file, with a value called TOKEN assigned to your the-one-api bearer token. The test command is: ```npm run test```
## Basic Functionality
```js
import one from '@michaelaroberts/the-one-sdk'
const ring = one.setToken('YOUR-TOKEN-HERE');
const quotes = await ring.getQuotes();
console.log(quotes)
```
For more implementation infomation, view the SDK design document [here](/design.md)