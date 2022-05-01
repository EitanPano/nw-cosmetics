// import logger from '../services/logger.service.js'
import asyncLocalStorage from '../services/als.service.js'

async function setupAsyncLocalStorage(req, res, next) {
  const storage = {}
  asyncLocalStorage.run(storage, () => {
    if (req.sessionID) {
      const alsStore = asyncLocalStorage.getStore()
      alsStore.sessionId = req.sessionID
      if (req.session.user) {
        alsStore.userId = req.session.user._id
        alsStore.isAdmin = req.session.user.isAdmin
      }
    }
    next()
  })
}

export default setupAsyncLocalStorage

