import logger from '../services/logger.service.js';

async function log(req, res, next) {
    if (req.session && req.session.user) {
        logger.info('Req from: ' + req.session.user.fullname);
    }
    next();
}

export { log };
