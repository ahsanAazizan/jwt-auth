const CustomAPIError = require('./custom-error')
const { StatusCodes } = require('http-status-code')

class UnauthenticatedError extends CustomAPIError {
    constructor (msg) {
        super(msg)
        this.statusCode = StatusCodes.UNAUTHORIZED
    }
}

module.exports = UnauthenticatedError