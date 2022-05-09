import { AsyncLocalStorage } from 'async_hooks';
const asyncLocalStorage = new AsyncLocalStorage();


// The AsyncLocalStorage singleton
export default asyncLocalStorage;
