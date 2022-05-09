import logger from './logger.service.js';
import { dbURL } from '../config/db.config.js';
import { MongoClient } from 'mongodb';

// Database Name
const dbName = 'nw-cosmetics';

let dbConn = null;

async function getCollection(collectionName) {
    try {
        const db = await _connect();
        const collection = await db.collection(collectionName);
        return collection;
    } catch (err) {
        logger.error('Failed to get Mongo collection', err);
        throw err;
    }
}

async function _connect() {
    // console.log('dbURL: ', dbURL);
    if (dbConn) return dbConn;
    try {
        const client = await MongoClient.connect(dbURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        const db = client.db(dbName);
        dbConn = db;
        logger.info(`MongoDB Connected: ${db.namespace}`);
        return db;
    } catch (err) {
        logger.error('Cannot Connect to DB', err);
        throw err;
    }
}

export default { getCollection };
