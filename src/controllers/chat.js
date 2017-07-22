import HttpStatus from 'http-status'

import Repository from '../infra/repository/chat'
import exception from '../helpers/exception'

const repository = new Repository();

export default class Controller {

  getByUser(req, res) {
    const { id } = req.user
      repository.findByUser(id)
      .then(messages => {
        if (messages.length == 0)
          res.status(HttpStatus.NO_CONTENT)
        res.json(messages)
      })
      .catch(err => { 
        
        exception.httpHandler(res, err) 
      })
  }
}
