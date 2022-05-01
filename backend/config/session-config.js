import expressSession from 'express-session';

const sessionConfig = expressSession({
    secret: 'I Love Coding',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
});

export { sessionConfig as session };
