const User = require('../models/User')

module.exports = (req, res, next) => {
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
    user.save()
  })
}
