/**
   * @apiDefine NotFoundError
   * @apiErrorExample 404
   *    HTTP/1.1 404 Not Found
   *    {
   *      "error": "Registro não encontrado"
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
 *      "error": "Profissional não encontrado"
 *    }
 * 
 **/

import Controller from '../controllers/visit'

const controller = new Controller()

module.exports = function (app) {

  /**
   * @api {get} /visit Obter lista de visitas do usuário logado
   * @apiGroup Visitas
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
  app.get('/visit', controller.getAll)

  /**
  * @api {get} /visit/:id Obter por id
  * @apiGroup Visitas
  * 
  * @apiParam {Number} id Identificador da visita
  * 
  * @apiSuccessExample 200
  *   HTTP/1.1 200 Ok
  *   {
  *     "item": object
  *   }
  *
  * @apiUse NotAuthorized
  * @apiUse NotFoundError
  * @apiUse InternalServerError
  */
  app.get('/visit/:id', controller.getById)

  /**
   * @api {post} /visit Cadastrar uma nova visita
   * @apiGroup Visitas
   * 
   * @apiParam {Integer} professionalId Identificador do profissional
   * @apiParam {String} date DataHora em que será realizada a visita
   * @apiParamExample {object} Exemple
   *    {
   *        professionalId: 3,
   *        date: 'Thu Jul 13 2017 19:16:23 GMT-0300 (BRT)'
   *    }
   * 
   * @apiSuccessExample 200
   * HTTP/1.1 200 Ok
   * {
   *    "item": ""
   * }
   * 
   * @apiUse NotAuthorized
   * @apiUse ValidationError
   * @apiUse InternalServerError
   **/
  app.post('/visit', controller.create)
}