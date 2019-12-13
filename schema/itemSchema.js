import mongoose from 'mongoose'
const Schema = mongoose.Schema

/**
 * Item Schema
 * @constant {Schema}
 */
const itemSchema = {
  name: {
    type: String,
    unique: true,
    select: true,
    trim: true
  },
  category: {
    type: String,
    unique: false,
    select: true,
    trim: true
  },
  brandName: {
    type: String,
    unique: false,
    select: true,
    trim: true
  },
  images: {
    type: String,
    unique: false,
    select: false,
    trim: true
  }
}

module.exports = new Schema(itemSchema)
