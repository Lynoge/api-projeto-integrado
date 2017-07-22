/**
   * @apiDefine InternalServerError
   * @apiErrorExample 500
   *    HTTP/1.1 500 Internal Server Error
   *    {
   *      "error": "Erro interno"
   *    }
   */

/**
   * 
   * @apiDefine NotAuthorized
   * @apiErrorExample 401
   *    HTTP/1.1 401 Unauthorized
   *    {
   *      "error": "Não autorizado"
   *    }
   * 
   **/

import Controller from '../controllers/chat'

const controller = new Controller()

module.exports = function (app) {

  /**
   * @api {get} /chat Obter lista de todas conversas do usuário logado
   * @apiGroup Chat
   * 
   * @apiSuccessExample 200
   *    HTTP/1.1 200 Ok
   *    {
   *      "items": [object,object...]
   *    }
   * 
   * @apiSuccessExample 204
   *    HTTP/1.1 204 No Content
   *    {
   *      "items": []
   *    }
   * 
   * @apiUse NotAuthorized
   * @apiUse InternalServerError
   */
  app.get('/chat', controller.getByUser)
}