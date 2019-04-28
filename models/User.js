const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true
  },
  password: String
})

mongoose.model('users', userSchema)
