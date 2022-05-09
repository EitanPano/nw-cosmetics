const userModel = {
    type: 'object',
    properties: {
        fullName: { type: 'string', default: '' },
        userName: { type: 'string' },
        password: { type: 'string' },
        email: { type: 'string' },
        points: { type: 'number', default: 10 },
        reviewCount: { type: 'number', default: 0 },
        isAdmin: { type: 'boolean', default: false },
    },
    required: ['userName', 'password', 'email'],
};

export { userModel as userSchema };
