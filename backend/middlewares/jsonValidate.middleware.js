import logger from '../services/logger.service.js';
import Ajv from 'ajv';

import { productSchema } from '../models/productModel.js';
import { userSchema } from '../models/userModel.js';
import { orderSchema } from '../models/orderModel.js';
import { reviewSchema } from '../models/reviewModel.js';

const ajv = new Ajv({
    allErrors: true,
    useDefaults: true,
    removeAdditional: 'all',
});

const models = ['product', 'signup', 'order', 'review', 'user'];

const validateData = (req, res, next) => {
    // console.log('req.body', req.body)
    const currModel = getUrlPath(req.originalUrl);
    // console.log('currModel', currModel);
    // = req.originalUrl.split('/').filter((str) => str !== '').pop();
    const dataModel = req.body;

    const validate = ajv.compile(schemaSwitch(currModel));
    const isValid = validate(dataModel);

    if (!isValid) {
        logger.warn('Invalid data inserted, Check for the required fields.');
        res.status(400).end('Invalid data insertion attempt.');
        return;
    }

    next();
};

const getUrlPath = (path) => {
    return models.filter(model => path.split('/').includes(model))[0];
};

const schemaSwitch = (model) => {
    switch (model) {
        case 'product':
            return productSchema;
        case 'signup':
            return userSchema;
        case 'order':
            return orderSchema;
        case 'review':
            return reviewSchema;
        case 'user':
            return userSchema;
    }
};

export { validateData };
