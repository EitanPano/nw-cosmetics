import defaultProducts from '../data/products.json'
import browserALS from './browserALS';

import { httpService } from './http.service'


export const productService = {
    query,
    getById,
    save,
    remove,
    getEmptyProduct,
};

const ROUTE_KEY = 'product';


async function query(filterBy) {
    try {
        let products = await browserALS.query(ROUTE_KEY, filterBy);
        if (!products || !products.length) products = _loadLocalProducts()
        return products;
    } catch(err) {
        console.log('err: ', err);
        throw err;
    }
}

async function getById(productId) {
    try {
        const product = await httpService.get(`${ROUTE_KEY}/${productId}`)
        return product;
    } catch(err) {
        console.log('err: ', err);
        throw err;
    }
}

function save(product) {
    return (product._id) ? _updateProduct(product) : _addProduct(product);
}

async function _addProduct(product) {
        // TODO: Change browserALS to httpService
    const newProduct = await browserALS.post(ROUTE_KEY, product);
    return newProduct;
}

async function _updateProduct(product) {
    // TODO: Change browserALS to httpService
    const newProduct = await browserALS.put(ROUTE_KEY, product)
    return newProduct;
}

function remove(id) {
    // TODO: Change browserALS to httpService
    browserALS.remove(ROUTE_KEY, id);
}

function getEmptyProduct() {
    return {
        name: '',
        price: 99,
        type: '',
    };
}

function _loadLocalProducts() {
    let products = JSON.parse(localStorage.getItem(ROUTE_KEY));
    if (!products || !products.length) products = defaultProducts;
    localStorage.setItem(ROUTE_KEY, JSON.stringify(products));
    return products;
}