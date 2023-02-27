const express = require('express')
const router = express.Router()

const { login, dashboard } = require('../controllers/controller')
const auth = require('../middlewares/auth')

router.route('/dashboard').get(auth, dashboard)
router.post('/login', login)