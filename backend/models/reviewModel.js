const reviewModel = {
    type: 'object',
    properties: {
        userId: { type: 'string' },
        productId: { type: 'string' },
        title: { type: 'string' },
        rating: { type: 'number' },
        description: { type: 'string', default: '' },
        createdAt: { type: 'number', default: Date.now() },
    },
    required: ['userId', 'productId', 'title', 'rating'],
};

export { reviewModel as reviewSchema };
