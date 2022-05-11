import defaultProducts from '../data/products.json';

import { httpService } from './http.service';
// import { lassoService } from './lasso.service';

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
        let products = await httpService.get(ROUTE_KEY, filterBy);
        // let products = await lassoService.get(ROUTE_KEY, filterBy);
        if (!products || !products.length) products = _loadLocalProducts();
        return products;
    } catch (err) {
        console.log('err: ', err);
        throw err;
    }
}

async function getById(productId) {
    try {
        const product = await httpService.get(`${ROUTE_KEY}/${productId}`);
        // const product = await lassoService.get(`${ROUTE_KEY}/${productId}`)
        return product;
    } catch (err) {
        console.log('err: ', err);
        throw err;
    }
}

function save(product) {
    return product._id ? _updateProduct(product) : _addProduct(product);
}

async function _addProduct(product) {
    try {
        const newProduct = await httpService.post(ROUTE_KEY, product);
        // const newProduct = await lassoService.post(ROUTE_KEY, product);
        return newProduct;
    } catch (err) {
        console.log('err: ', err);
        throw err;
    }
}

async function _updateProduct(product) {
    try {
        const updatedProduct = await httpService.put(ROUTE_KEY, product);
        // const updatedProduct = await lassoService.put(ROUTE_KEY, product)
        return updatedProduct;
    } catch (err) {
        console.log('err: ', err);
        throw err;
    }
}

async function remove(id = '627909d58bf3a89a6a44f864') {
    try {
        await httpService.delete(`${ROUTE_KEY}/${id}`);
        // await lassoService.delete(`${ROUTE_KEY}/${id}`);
    } catch (err) {
        console.log('err: ', err);
    }
}

function getEmptyProduct() {
    return {
        name: '',
        image: '',
        price: 99,
        brand: '',
        category: '',
        description: '',
        inStockCount: 0,
        isNatural: false,
    };
}

function _loadLocalProducts() {
    let products = JSON.parse(localStorage.getItem(ROUTE_KEY));
    if (!products || !products.length) products = defaultProducts;
    localStorage.setItem(ROUTE_KEY, JSON.stringify(products));
    return products;
}
