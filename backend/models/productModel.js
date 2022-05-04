const reviewModel = {
    type: 'object',
    properties: {
        userId: { type: 'string' },
        productId: { type: 'string' },
        title: { type: 'string' },
        rating: { type: 'number' },
        description: { type: 'string' },
        createdAt: { type: 'number', default: Date.now() },
    },
    required: ['userId', 'productId', 'title', 'rating'],
};

const productModel = {
    type: 'object',
    properties: {
        name: { type: 'string' },
        image: { type: 'string' },
        description: { type: 'string' },
        brand: { type: 'string' },
        category: { type: 'string' },
        price: { type: 'number' },
        isNatural: { type: 'boolean', default: false },
        inStockCount: { type: 'number', default: 0 },
        rating: { type: 'number', default: 0 },
        reviewCount: { type: 'number', default: 0 },
        createdAt: { type: 'number', default: Date.now() },
    },
    required: ['name', 'image', 'description', 'brand', 'category', 'price'],
};

export { productModel as productSchema, reviewModel as reviewSchema };
