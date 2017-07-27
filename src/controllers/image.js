import HttpStatus from 'http-status'
import sha1 from 'sha1'
import Dropbox from 'dropbox'
import exception from '../helpers/exception'
import fs from 'fs'
import path from 'path'
import config from '../infra/config'
import UserRepository from '../infra/repository/user'

const configServer = config[process.env.NODE_ENV]
const dbx = new Dropbox({ accessToken: configServer.serverToken });
const generateHashFile = (fileName) => {
  return sha1(new Date()).substring(0, 8) + fileName.toLowerCase()
}

export default class Controller {

  get(req, res) {
    const { name } = req.params
    dbx.filesDownload({ path: '/' + name })
      .then(file => {
        const fileName = 'temp/' + generateHashFile(file.name)
        fs.writeFile(fileName, file.fileBinary, 'binary', (err) => {
          if (err) {
            console.log(err)
            res.end('Erro ao salvar arquivo!');
          } else {
            const filePath = path.join(__dirname, '../..', fileName)
            res.sendFile(filePath, { root: '/' })
            setTimeout(() => { fs.unlinkSync(fileName) }, 5000)
          }
        })
      }).catch(err => res.end(err))
  }

  getAllImageNames(req, res) {
    dbx.filesListFolder({ path: '' })
      .then(response => res.json(response.entries))
      .catch(err => res.end(err));
  }

  createImagePerfil(req, res) {

    const fileName = generateHashFile(req.file.originalname)

    dbx.filesUpload({ path: '/' + fileName, contents: req.file.buffer })
      .then((response) => {
        const userRepository = new UserRepository()
        userRepository
          .update({ image: fileName }, { id: req.user.id })
          .then(() => { res.json({ fileName: fileName }) })
          .catch((err) => res.json({ 'ERRO': err }))
      })
      .catch((err) => {
        console.log(err)
        res.json({ 'ERRO': err })
      })
  }
  createImageChat(req, res) {

    const fileName = generateHashFile(req.file.originalname)
    res.json({ fileName: fileName })
    return
  }
}