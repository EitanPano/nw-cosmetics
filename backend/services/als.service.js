// const { AsyncLocalStorage } = require('async_hooks');
import { AsyncLocalStorage } from 'async_hooks';
const asyncLocalStorage = new AsyncLocalStorage();


// The AsyncLocalStorage singleton
// module.exports = asyncLocalStorage;
export default asyncLocalStorage;
