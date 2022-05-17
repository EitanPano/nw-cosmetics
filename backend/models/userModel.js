const userModel = {
    type: 'object',
    properties: {
        fullName: { type: 'string', default: '' },
        username: { type: 'string' },
        email: { type: 'string' },
        password: { type: 'string' },
        isAdmin: { type: 'boolean', default: false },
        points: { type: 'number', default: 10 },
        reviewCount: { type: 'number', default: 0 },
    },
    required: ['username', 'password', 'email'],
};

export { userModel as userSchema };
