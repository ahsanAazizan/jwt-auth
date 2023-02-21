const jwt = require('jsonwebtoken')
const { BadRequestError } =  require('../errors')

const login = async (req, res) => {
    const { username, password } = req.body
    if (!username || !password) {
        throw new BadRequestError('Email or Password is missing')
    }

    const id = new Date().getDate()
    const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })

    res.status(200).json({ msg: 'new user created', token })
}

const dashboard = async (req, res) => {
    const number = Math.floor(Math.random() * 100)
    res.status(200).json({
        msg: `Welcome, ${req.user.username}`,
        secret: `Here are your auth data, the number is ${number}`
    })
}

module.exports = { login, dashboard }