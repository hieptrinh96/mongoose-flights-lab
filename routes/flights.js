import { Router } from 'express'
import * as flightsCtrl from '../controllers/flights.js'
const router = Router()



router.get('/', flightsCtrl.index)
router.get('/new', flightsCtrl.new)
router.get('/:id', flightsCtrl.show)
router.get('/:id/edit', flightsCtrl.edit)

router.post('/', flightsCtrl.create)
router.post('/:id/tickets', flightsCtrl.createTicket)
router.post('/:id/meals', flightsCtrl.addToFood)

router.delete('/:id', flightsCtrl.deleteFlight)
router.delete('/:id/tickets/:ticketId', flightsCtrl.deleteTicket)

router.put('/:id', flightsCtrl.update)

export {
  router
}
