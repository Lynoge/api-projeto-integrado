/**
   * @apiDefine NotFoundError
   * @apiErrorExample 404
   *    HTTP/1.1 404 Not Found
   *    {
   *      "error": "Not Found"
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
 * @apiDefine ValidationError
 * @apiErrorExample 422
 *    HTTP/1.1 422 Unprocessable Entity
 *    {
 *      "error": "Email já cadastrado"
 *    }
 * 
 **/

import AccountController from '../controllers/account'

const controller = new AccountController()

module.exports = (app) => {

  /**
   * @api {post} /signup Criar uma nova conta
   * @apiGroup Conta
   * 
   * @apiParam {String} nickname Apelido do usuário
   * @apiParam {String} name Nome de usuário
   * @apiParam {String} email Email do usuário
   * @apiParam {String} password Senha do usuário
   * @apiParam {String} phone Telefone do usuário
   * @apiParam {String} type (P)rofissional ou (R)equerente
   * 
   * @apiParamExample {object} Exemple
   *  {
   *     nickname: "fulaninho",
   *     name: "fulano",
   *     email: "fulano@mail.com",
   *     password: "123Abc#",
   *     phone: 999999999,
   *     type: 'R'
   *  }
   * @apiSuccessExample 201
   *   HTTP/1.1 201 Ok
   *  {
   *    "user": object
   *  }
   * 
   * @apiUse ValidationError
   * @apiUse InternalServerError
   */
  app.post('/signup', controller.signup)

  /**
  * @api {get} /account Obter dados do usuário atual
  * @apiGroup Conta
  * 
  * @apiSuccessExample 200
  *    HTTP/1.1 200 Ok
  *   {
  *     "user": object
  *   }
  *
  * @apiUse NotFoundError
  * @apiUse InternalServerError
  */
  app.get('/account', controller.getUserData)

  /**
  * @api {post} /token Gerar novo token
  * @apiGroup Conta
  * 
  * @apiParam {String} email Email do usuário
  * @apiParam {String} password Senha do usuário
  *
  * @apiSuccessExample 200
  *    HTTP/1.1 200 Ok
  *   {
  *     "user": object
  *   }
  *
  * @apiUse NotFoundError
  * @apiUse InternalServerError
  */
  app.post('/token', controller.token)
}
