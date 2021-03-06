const jwt = require('jwt-simple')
const User = require('../models/User')
const { secret } = require('../config')

const tokenForUser = user => {
  const timeStamp = new Date().getTime()
  return jwt.encode({ sub: user.id, iat: timeStamp }, secret)
}

exports.signin = (req, res, next) => {
  res.send({ token: tokenForUser(req.user) })
}

exports.signup = (req, res, next) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(422).send({ error: 'You must provide an email and password' })
  }
  
  User.findOne({ email }, (err, existingUser) => {
    if (err) return next(err)
    
    if (existingUser) {
      res.status(422).send({ error: 'Email is in use' })
    }

    const user = new User({
      email,
      password
    })
    
    user.save(err => {
      if (err) return next(err)

      res.json({ token: tokenForUser(user) })
    })
  })
}
