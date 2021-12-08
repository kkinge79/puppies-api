import mongoose from 'mongoose'

const Schema = mongoose.Schema 

const puppySchema = new Schema ({
  name: String,
  breed: String,
  age: Number
})

const Puppy = mongoose.model('Puppies', puppySchema)

export {
  Puppy
}