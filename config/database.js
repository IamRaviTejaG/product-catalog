import mongoose from 'mongoose'
require('dotenv').config()

const dbURL = `mongodb+srv://heroku:${process.env.MONGO_PASS}@cluster0-l0l9c.mongodb.net/${process.env.MONGO_DBNAME}`

const dbOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}

const dbConnection = mongoose.createConnection(dbURL, dbOptions)

export default dbConnection
