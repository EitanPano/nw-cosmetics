import logger from '../services/logger.service.js';
import Ajv from 'ajv';
import { productSchema } from '../models/productModel.js';

const ajv = new Ajv({ allErrors: true, useDefaults: true });

const validateData = (req, res, next) => {
    const modelName = req.baseUrl.split('/').pop();
    const dataModel = req.body;
    
    const validate = ajv.compile(schemaSwitch(modelName));
    const isValid = validate(dataModel);
    
    if (!isValid) {
        logger.warn('Invalid data inserted, Check for the required fields.');
        res.status(400).end('Invalid data insertion attempt.');
        return;
    }
    
    next();
};

const schemaSwitch = (modelName) => {
    switch (modelName) {
        case 'product':
            return productSchema;
        case 'user':
            return userSchema;
        case 'order':
            return orderSchema;
    }
};

export { validateData };
