const CustomAPIError = require('./custom-error')
const { StatusCodes } = require('http-status-code')

class BadRequest extends CustomAPIError {
    constructor (msg) {
        super(msg)
        this.statusCode = StatusCodes.BAD_REQUEST 
    }
}

module.exports = BadRequest