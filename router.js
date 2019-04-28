const passport = require('passport')
const passportService = require('./services/passport')
const authentication = require('./controllers/authentication')

const requireAuth = passport.authenticate('jwt', { session: false })

module.exports = app => {
  app.get('/', requireAuth, (res, req) => {
    res.send({ hi: 'there' })
  })

  app.post('/signup', authentication)
}
