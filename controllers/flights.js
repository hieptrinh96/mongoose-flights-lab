import { Flight } from '../models/flight.js'
import { Meal } from '../models/meal.js'
function index(req, res) {
  Flight.find({})
    .then(flights => {
      res.render('flights/index', {
        flights: flights,
        title: 'All Flights'
      })
    })
    .catch(error => {
      console.log(error)
      res.redirect('/')
    })
}

function newFlight(req, res) {
  const newFlight = new Flight();
  const dt = newFlight.departs;
  const departsDate = dt.toISOString().slice(0, 16);
  res.render('flights/new', {
    title: 'Add Flight',
    departsDate
  })
}

function create(req, res) {
  Flight.create(req.body)
    .then(flight => {
      console.log(flight)
      res.redirect('/flights')
    })
    .catch(error => {
      console.log(error)
      res.redirect('/flights/new')
    })
}

function deleteFlight(req, res) {
  Flight.findByIdAndDelete(req.params.id)
    .then(flight => {
      res.redirect('/flights')
    })
    .catch(error => {
      console.log(error)
      res.redirect('/flights')
    })
}

function show(req, res) {
  Flight.findById(req.params.id)
    .then(flight => {
      res.render('flights/show', {
        flight: flight,
        title: 'Flight Detail'
      })
    })
    .catch(error => {
      console.log(error)
      res.redirect('/')
    })
}

function edit(req, res) {
  Flight.findById(req.params.id)
    .then(flight => {
      res.render('flights/edit', {
        flight: flight,
        title: 'Edit Flight',
      })
    })
    .catch(error => {
      console.log(error)
      res.redirect('/flights')
    })
}

function update(req, res) {
  Flight.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(flight => {
      res.redirect(`/flights/${flight._id}`)
    })
    .catch(error => {
      console.log(error)
      res.redirect('/flights')
    })
}

function createTicket(req, res) {
  Flight.findById(req.params.id)
    .then(flight => {
      flight.tickets.push(req.body)
      flight.save()
        .then(() => {
          res.redirect(`/flights/${flight._id}`)
        })
        .catch(error => {
          console.log(error)
          res.redirect('/')
        })
    })
    .catch(error => {
      console.log(error)
      res.redirect('/')
    })
}

function deleteTicket(req, res) {
  Flight.findById(req.params.id)
    .then(flight => {
      console.log(flight)
      // we have to access the tickets property of the flight object
      flight.tickets.remove(req.params.ticketId)
      flight.save()
        .then(() => {
          res.redirect(`/flights/${flight._id}`)
        })
        .catch(error => {
          console.log(error)
          res.redirect('/')
        })
    })
    .catch(error => {
      console.log(error)
      res.redirect('/')
    })
}

export {
  index,
  newFlight as new,
  create,
  deleteFlight,
  show,
  edit,
  update,
  createTicket,
  deleteTicket
}
