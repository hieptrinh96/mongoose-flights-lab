import { Router } from 'express'
import * as mealsCtrl from '../controllers/meals.js'

const router = Router()

// GET localhost:3000/meals/new page 
router.get('/new', mealsCtrl.new)