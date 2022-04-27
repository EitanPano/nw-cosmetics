import defaultProducts from '../data/products.json'
import { lasso } from './localAsyncStorageService';

export const productService = {
    query,
    getById,
    save,
    remove,
    getEmptyProduct,
};

const PRODUCT_KEY = 'products';

function _filter(filterBy, products) {
    const term = filterBy.term.toLowerCase() || '';
    const type = filterBy.type.toLowerCase() || '';
    const minPrice = filterBy.minPrice || 0;
    const maxPrice = filterBy.maxPrice || Infinity;
    return products.filter((product) => {
        return (
            product.name.toLowerCase().includes(term) &&
            product.type.toLowerCase().includes(type) &&
            product.price >= minPrice &&
            product.price <= maxPrice
        );
    });
}

async function query(filterBy = null) {
    let products = await lasso.query(PRODUCT_KEY);
    if (!products.length) products = _loadProducts()
    if (filterBy) {
        products = _filter(filterBy, products);
    }
    return Promise.resolve([...products]);
}

async function getById(id) {
    const product = await lasso.get(PRODUCT_KEY ,id)
    return Promise.resolve({ ...product });
}

function save(product) {
    return (product._id) ? _updateProduct(product) : _addProduct(product);
}

async function _addProduct(product) {
    const newProduct = await lasso.post(PRODUCT_KEY, product);
    return newProduct;
}

async function _updateProduct(product) {
    const newProduct = await lasso.put(PRODUCT_KEY, product)
    return newProduct;
}

function remove(id) {
    lasso.remove(PRODUCT_KEY, id);
}

function getEmptyProduct() {
    return {
        name: '',
        price: 99,
        type: '',
    };
}

function _loadProducts() {
    let products = JSON.parse(localStorage.getItem(PRODUCT_KEY));
    if (!products || !products.length) products = defaultProducts;
    localStorage.setItem(PRODUCT_KEY, JSON.stringify(products));
    return products;
}