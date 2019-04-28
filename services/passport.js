const passport = require('passport')
const { Strategy, ExtractJwt } = require('passport-jwt')
const User = require('../models/User')
const { secret } = require('../config')

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: secret
}

const jwtLogin = new Strategy(jwtOptions, (payload, done) => {
  User.findById(payload.sub, (err, user) => {
    if (err) return done(err, false)

    if (user) {
      done(null, user)
    } else {
      done(null, false)
    }
  })
})

passport.use(jwtLogin)
