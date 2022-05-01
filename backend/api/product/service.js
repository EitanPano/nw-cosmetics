import dbService from '../../services/db.service.js';
import logger from '../../services/logger.service.js';
import { ObjectId } from 'mongodb';

async function query(filterBy) {
    try {
        // console.log('filterBy', filterBy);
        const criteria = _buildCriteria(filterBy)
        const sortCriteria = {}
        if (filterBy.sort) {    
            if (filterBy.sort === 'Name') sortCriteria.name = 1
            else if (filterBy.sort === 'Price') sortCriteria.price = 1
            else sortCriteria.createAt = 1
        }
        // console.log('sortCriteria', sortCriteria);
        const collection = await dbService.getCollection('product')
        const products = await collection.find(criteria).sort(sortCriteria).toArray()
        // console.log('products', products);
        return products
    } catch (err) {
        logger.error('cannot find products', err)
        throw err
    }
}

async function getById(productId) {
    try {
        const collection = await dbService.getCollection('product_db')
        const product = collection.findOne({ '_id': ObjectId(productId) })
        return product
    } catch (err) {
        logger.error(`while finding product ${productId}`, err)
        throw err
    }
}

async function remove(productId) {
    try {
       
        const collection = await dbService.getCollection('product')
        await collection.deleteOne({ '_id': ObjectId(productId) })
        console.log('productId remove', productId)
        return productId
    } catch (err) {
        logger.error(`cannot remove product ${productId}`, err)
        throw err
    }
}

async function add(product) {
    try {
        const collection = await dbService.getCollection('product')
        const addedProduct = await collection.insertOne(product)
        return addedProduct.ops[0] // strange that we need to add the ops[0]!!
    } catch (err) {
        logger.error('cannot insert product', err)
        throw err
    }
}
async function update(product) {
    try {
        var id = ObjectId(product._id)
        delete product._id
        const collection = await dbService.getCollection('product')
        // await collection.updateOne({ "_id": id }, { $set: { ...product } })
        await collection.updateOne({ _id: id }, { $set: { ...product } })
        product._id = ObjectId(id);
        return product;
    } catch (err) {
        logger.error(`cannot update product ${productId}`, err)
        throw err
    }
}

function _buildCriteria(filterBy) {
    // console.log('for criteria',filterBy)
    const criteria = {}
    // if (filterBy.search) {
        // const txtCriteria = { $regex: filterBy.search, $options: 'i' }
        // criteria.name = txtCriteria
    // }
    // if (filterBy.stock === 'In Stock') {
    //     criteria.inStock = { $eq: true }
    // } else if (filterBy.stock === 'Out Of Stock') {
    //     criteria.inStock = { $eq: false }
    // }
    // if (filterBy.labels && filterBy.labels.length) {
    //         criteria.labels = { $in: filterBy.labels }
    //         // criteria.labels = { $all: filterBy.labels }
    // }

    // console.log('criteria:', criteria);
    return criteria
}

async function _createProducts() {
    const collection = await dbService.getCollection('products');
    await collection.insertMany([]);
}


export default {
    query,
    getById,
    add,
    update,
    remove,
}
