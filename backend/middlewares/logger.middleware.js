// const logger = require('../services/logger.service')
import logger from '../services/logger.service.js';

export async function log(req, res, next) {
  if (req.session && req.session.user) {
    logger.info('Req from: ' + req.session.user.fullname)
  }
  next()
}

// module.exports = {
//   log
// }

// export default log