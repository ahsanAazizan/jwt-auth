const CustomAPIError = require('./custom-error')
const { StatusCode } = require('http-status-code')

class UnauthenticatedError extends CustomAPIError {
    constructor (msg) {
        super(msg)
        this.statusCode = StatusCode.UNAUTHORIZED
    }
}

module.exports = UnauthenticatedError