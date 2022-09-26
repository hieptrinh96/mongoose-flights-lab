import mongoose from 'mongoose'

const Schema = mongoose.Schema
const ticketSchema = new Schema({
  seat: {
    type: String,
    match: /[A-F][1-9]\d?/
  },
  price: {
    type: Number,
    min: 0
  },
})
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
    type: Date,
    default: setYear()
  },
  tickets: [ticketSchema]
})

function setYear() {
  const today = new Date();
  today.setFullYear(today.getFullYear() + 1)
  return today
}

const Flight = mongoose.model('Flight', flightSchema)
// when u submit a form and u leave a blank 
// if someone submit a form ,unless u remove airport propert from req.body 
// in controller function 
export {
  Flight
}
