import mongoose from 'mongoose'

const Schema = mongoose.Schema

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ['American', 'Southwest', 'United']
  },
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'LAX', 'SAN']
  },
  flightNo: {
    type: Number,
    min: 10,
    max: 9999
  },
  departs: {
    type: Date
  }
})

const Flight = mongoose.model('Flight', flightSchema)
// when u submit a form and u leave a blank 
// if someone submit a form ,unless u remove airport propert from req.body 
// in controller function 
export {
  Flight
}