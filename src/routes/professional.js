/**
   * @apiDefine ProfessionalNotFoundError
   * @apiErrorExample 404
   *    HTTP/1.1 404 Not Found
   *    {
   *      "error": "Professional não encontrado"
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

import professionalController from '../controllers/professional'

const controller = new professionalController()

module.exports = function (app) {

  /**
   * @api {get} /professional Obter lista
   * @apiGroup Professional
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
  app.get('/professional', controller.getAll)

  /**
  * @api {get} /professional/:id Obter por id
  * @apiGroup Professional
  * 
  * @apiParam {Number} id Id único do professional
  * 
  * @apiSuccessExample 200
  *    HTTP/1.1 200 Ok
  *   {
  *     "item": object
  *   }
  *
  * @apiUse NotAuthorized
  * @apiUse ProfessionalNotFoundError
  * @apiUse InternalServerError
  */
  app.get('/professional/:id', controller.getById)

  /**
  * @api {get} /professional/profission/:id Obter por profissão
  * @apiGroup Professional
  * 
  * @apiParam {Number} id Identificador único da profissão
  * 
  * @apiSuccessExample 200
  *    HTTP/1.1 200 Ok
  *   {
  *     "item": object
  *   }
  * @apiSuccessExample 204
  *    HTTP/1.1 204 No Content
  *    {
  *      "items": []
  *    }
  *
  * @apiUse NotAuthorized
  * @apiUse ProfessionalNotFoundError
  * @apiUse InternalServerError
  */
  app.get('/professional/profission/:profissionId', controller.getByProfission)

  /**
  * @api {post} /professional Registrar
  * @apiGroup Professional
  * 
  * @apiSuccessExample 200
  *    HTTP/1.1 200 Ok
  *   {
  *     "item": object
  *   }
  *
  * @apiUse InternalServerError
  * @apiUse ValidationError
  */
  app.post('/professional', controller.create)

  /**
  * @api {put} /professional Atualizar
  * @apiGroup Professional
  * 
  * @apiSuccessExample 200
  *    HTTP/1.1 200 Ok
  *   {
  *     "item": object
  *   }
  *
  * @apiUse NotAuthorized
  * @apiUse ProfessionalNotFoundError
  * @apiUse InternalServerError
  * @apiUse ValidationError
  */
  app.put('/professional', controller.update)
  app.delete('/professional/:id', controller.delete)
}
