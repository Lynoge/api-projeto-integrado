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
 *      "error": "Imagem inválida."
 *    }
 * 
 **/

import Controller from '../controllers/image'
import Multer from 'multer'

const _5MB = 5 * 1024 * 1024

const multer = Multer({
  storage: Multer.memoryStorage(),
  limits: {
    fileSize: _5MB
  }
});

const controller = new Controller()

module.exports = function (app) {

  /**
   * @api {get} /image Obter imagem
   * @apiGroup Imagem
   * 
   * @apiParam {String} nome Nome/Path completo da imagem.
   * 
   * @apiUse NotAuthorized
   * @apiUse InternalServerError
   */
  app.get('/image/:name', controller.get)

  /**
   * @api {post} /image inserir nova imagem
   * @apiGroup Imagem
   * 
   * @apiParam {File} file Imagem a ser salva.
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
  app.post('/image', multer.single('image'), controller.create)
}