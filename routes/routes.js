const express = require('express')
const router = express.Router()
const {
	getallemp,
	postemp,
	getemp
} = require('../controllers/getall')

const privateemp = require('../controllers/getempprivate')
const login = require('../controllers/login')
const register = require('../controllers/register')


router.route('/').get(getallemp).post(postemp)
router.route('/gets').get(privateemp)	
router.route('/login').get(login)
router.route('/register').get(register)
router.route('/:id').get(getemp)


module.exports = router