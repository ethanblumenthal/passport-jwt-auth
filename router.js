const passport = require('passport')
const { signin, signup } = require('./controllers/authentication')
require('./services/passport')

const requireAuth = passport.authenticate('jwt', { session: false })
const requireSignin = passport.authenticate('local', { session: false })

module.exports = app => {
  app.get('/', requireAuth, (res, req) => {
    res.send({ hi: 'there' })
  })

  app.post('/signin', requireSignin, signin)

  app.post('/signup', signup)
}
