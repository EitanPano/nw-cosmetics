const productModel = {
    type: 'object',
    properties: {
        name: { type: 'string' },
        image: { type: 'string' },
        description: { type: 'string' },
        brand: { type: 'string' },
        category: { type: 'string' },
        price: { type: 'number' },
        reviews: { type: 'array', default: [] },
        isNatural: { type: 'boolean', default: false },
        inStockCount: { type: 'number', default: 0 },
        rating: { type: 'number', default: 0 },
        reviewCount: { type: 'number', default: 0 }
    },
    required: [
        'name',
        'image',
        'description',
        'brand',
        'category',
        'price',
    ],
};

export { productModel as productSchema };
