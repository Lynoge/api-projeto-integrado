/**
   * @apiDefine RequesterNotFoundError
   * @apiErrorExample 404
   *    HTTP/1.1 404 Not Found
   *    {
   *      "error": "Requester não encontrado"
   *    }
   *
   */

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

/**
 * 
 * @apiDefine ValidationError
 * @apiErrorExample 422
 *    HTTP/1.1 422 Unprocessable Entity
 *    {
 *      "error": "Email já cadastrado"
 *    }
 * 
 **/

import requesterController from '../controllers/requester'

const controller = new requesterController()

module.exports = function (app) {

  /**
   * @api {get} /requester Obter lista
   * @apiGroup Requester
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
  app.get('/requester', controller.getAll)

  /**
  * @api {get} /requester/:id Obter por id
  * @apiGroup Requester
  * 
  * @apiParam {Number} id Id único do requester
  * 
  * @apiSuccessExample 200
  *    HTTP/1.1 200 Ok
      {
        "item": object
      }
  *
  * @apiUse NotAuthorized
  * @apiUse RequesterNotFoundError
  * @apiUse InternalServerError
  */
  app.get('/requester/:id', controller.getById)
  
  /**
   * @api {put} /requester Alterar cadastro
   * @apiGroup Requester
   * 
   * @apiParam {Integer} id Identificador do requester
   * @apiParam {String} nickname Nickname do requester
   * @apiParam {String} name Nome de usuário do sistema
   * @apiParam {String} email Email do requester
   * @apiParam {String} password Senha do requester
   * @apiParam {String} phone Telefone do requester
   * 
   * @apiSuccessExample 200
   * HTTP/1.1 200 Ok
   * {
   *    "item": object
   * }
   * 
   * @apiParamExample {object} Exemple
   *    {
   *        id :3,
   *        nickname: "fulaninho",
   *        name: "fulano",
   *        email: "fulano@mail.com",
   *        password: "123Abc#",
   *        phone: 999999999
   *    }
   * 
   * 
   * @apiUse NotAuthorized
   * @apiUse RequesterNotFoundError
   * @apiUse ValidationError
   * @apiUse InternalServerError
   **/

  app.put('/requester', controller.update)
}
