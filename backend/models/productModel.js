const productModel = {
    type: 'object',
    properties: {
        _id: { type: 'string' },
        name: { type: 'string' },
        image: { type: 'string' },
        price: { type: 'number' },
        brand: { type: 'string' },
        category: { type: 'string' },
        description: { type: 'string' },
        inStockCount: { type: 'number', default: 0 },
        isNatural: { type: 'boolean', default: false },
        rating: { type: 'number', default: 0 },
        reviewCount: { type: 'number', default: 0 },
        createdAt: { type: 'number', default: Date.now() },
        updatedAt: { type: 'number', default: Date.now() },
    },
    required: ['_id', 'name', 'image', 'price', 'brand', 'category', 'description'],
};

export { productModel as productSchema };
