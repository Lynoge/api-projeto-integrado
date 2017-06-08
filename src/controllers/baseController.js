import HttpStatus from 'http-status'

export default class BaseController {
    constructor(){
        this.status = HttpStatus
    }

    handlerError(res, error){
        res.status(this.status.INTERNAL_SERVER_ERROR)
        res.json(error)
    }
}