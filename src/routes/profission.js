/**
   * @apiDefine NotFoundError
   * @apiErrorExample 404
   *    HTTP/1.1 404 Not Found
   *    {
   *      "error": "Não encontrado"
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
 *      "error": "Atributo não pode ser nulo"
 *    }
 * 
 **/

import ProfissionController from '../controllers/profission'

const controller = new ProfissionController()

module.exports = (app) => {

  /**
   * @api {get} /profission Obter lista
   * @apiGroup Profissão
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
  app.get('/profission', controller.getAll)

  /**
  * @api {post} /profission Cadastrar
  * @apiGroup Profissão
  * 
  * @apiParam {String} name Nome da nova profissão
  * 
  * @apiSuccessExample 200
  *    HTTP/1.1 200 Ok
  *   {
  *     "item": object
  *   }
  *
  * @apiUse NotFoundError
  * @apiUse InternalServerError
  */
  app.post('/profission', controller.create)

  /**
  * @api {put} /profission Atualizar
  * @apiGroup Profissão
  * 
  * @apiParam {String} name Novo nome da profissão
  * 
  * @apiSuccessExample 200
  *    HTTP/1.1 200 Ok
      {
        "item": object
      }
  *
  * @apiUse NotAuthorized
  * @apiUse NotFoundError
  * @apiUse InternalServerError
  */
  app.put('/profission', controller.update)

  /**
  * @api {delete} /profission Remover
  * @apiGroup Profissão
  * 
  * @apiParam {Integer} id Identificador da profissão a ser removida
  * 
  * @apiSuccessExample 200
  *    HTTP/1.1 200 Ok
      {
        "item": object
      }
  *
  * @apiUse NotAuthorized
  * @apiUse NotFoundError
  * @apiUse InternalServerError
  */
  app.delete('/profission/:id', controller.delete)
}
