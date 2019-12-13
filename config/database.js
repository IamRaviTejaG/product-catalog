import mongoose from 'mongoose'
require('dotenv').config()

const dbURL = `mongodb://${process.env.MONGO_URL}:${process.env.MONGO_PORT}/${process.env.MONGO_DBNAME}`

const dbOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}

mongoose.connect(dbURL, dbOptions).then(() => {
  console.log('Connection to DB established!')
}).catch(e => {
  console.log(`Couldn't connect to DB! Error: ${e}`)
})

const dbConnection = mongoose.connection

export default dbConnection
