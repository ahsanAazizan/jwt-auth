const { CustomAPIError } = require('../errors')
const { StatusCodes } = require('http-status-code')
const errorHandler = (err, res, res, next) => {
    if (err instanceof CustomAPIError) {
        return res.status(err.statusCode).json({ msg: err.message})
    }
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Something went wrong')
}

module.exports = errorHandler