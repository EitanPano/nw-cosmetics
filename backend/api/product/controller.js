import productService from './service.js'
import logger from '../../services/logger.service.js';
// import _products from '../../data/_products.json' assert {type: 'json'};


async function getProducts(req, res) {
    try {
        var queryParams = req.query;
        const products = await productService.query(queryParams);
        // const products = _products;
        res.json(products);
    } catch (err) {
        logger.error('Failed to get products', err);
        res.status(500).send({ err: 'Failed to get products' });
    }
}

async function getProductById(req, res) {
    try {
        const productId = req.params.id;
        // const product = await productService.getById(productId);
        const product = _products.find(_product => _product._id === productId)
        res.json(product);
    } catch (err) {
        logger.error('Failed to get product', err);
        res.status(500).send({ err: 'Failed to get product' });
    }
}

async function addProduct(req, res) {
    try {
        const product = req.body;
        const addedProduct = await productService.add(product);
        res.json(addedProduct);
        console.log('addeded product', addedProduct);
    } catch (err) {
        logger.error('Failed to add product', err);
        res.status(500).send({ err: 'Failed to add product' });
    }
}

async function updateProduct(req, res) {
    try {
        const product = req.body;
        // console.log(product)
        const updatedProduct = await productService.update(product);
        res.json(updatedProduct);
    } catch (err) {
        logger.error('Failed to update product', err);
        res.status(500).send({ err: 'Failed to update product' });
    }
}

async function removeProduct(req, res) {
    try {
        const productId = req.params.id;
        const removedId = await productService.remove(productId);
        console.log('removedId', removedId);
        res.send(removedId);
    } catch (err) {
        logger.error('Failed to remove product', err);
        res.status(500).send({ err: 'Failed to remove product' });
    }
}

export {
    getProducts,
    getProductById,
    addProduct,
    updateProduct,
    removeProduct,
}




