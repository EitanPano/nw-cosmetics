const orderItem = {
    type: 'object',
    properties: {
        _id: { type: 'string' },
        name: { type: 'string' },
        image: { type: 'string' },
        price: { type: 'number' },
        quantity: { type: 'number' },
    },
    required: 'all',
};

const orderItems = {
    type: 'array',
    items: orderItem,
};

const shippingAddress = {
    type: 'object',
    properties: {
        address: { type: 'string' },
        city: { type: 'string' },
        postalCode: { type: 'string' },
        country: { type: 'string' },
    },
    required: 'all',
};

const paymentResult = {
    type: 'object',
    properties: {
        id: { type: 'string' },
        status: { type: 'string' },
        update_time: { type: 'string' },
        email_address: { type: 'string' },
    },
    required: 'all',
};

const orderModel = {
    type: 'object',
    properties: {
        userId: { type: 'string' },
        orderItems: orderItems,
        shippingAddress: shippingAddress,
        paymentMethod: { type: 'string' },
        paymentResult: paymentResult,
        taxPrice: { type: 'number', default: 0.0 },
        shippingPrice: { type: 'number', default: 0.0 },
        totalPrice: { type: 'number', default: 0.0 },
        isPaid: { type: 'boolean', default: false },
        paidAt: { type: 'number' },
        isDelivered: { type: 'boolean', default: false },
        deliveredAt: { type: 'number' },
        createdAt: { type: 'number', default: Date.now() },
        updatedAt: { type: 'number', default: Date.now() }
    },
    required: 'all',
};

export { orderModel as orderSchema };
