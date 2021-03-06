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

let dropboxFileNames = () => {
  return dbx.filesListFolder({ path: '' })
    .then(response => {
      let names = []
      for (let i = 0; i < response.entries.length; i++) {
        names.push(response.entries[i].name)
      }
      return names
    })
    .catch(err => { throw err })
}

const existsInDropBox = (name) => {
  return dropboxFileNames()
    .then(names => {
      let exists = false
      for (let i = 0; i < names.length && !exists; i++)
        if (names[i] == name)
          exists = true
      return exists
    })
    .catch(err => { throw err })
}

export default class Controller {

  get(req, res) {
    const { name } = req.params

    const filePath = path.join(__dirname, '../../temp', name)
    fs.stat(filePath, (err) => {
      if (err) {
        existsInDropBox(name)
          .then(exists => {
            if (exists) {
              dbx.filesDownload({ path: '/' + name })
                .then(file => {
                  fs.writeFile(filePath, file.fileBinary, 'binary', (err) => {
                    if (err) {
                      console.log(err)
                      res.end('Erro ao salvar arquivo!')
                    } else {
                      res.sendFile(filePath, { root: '/' })
                    }
                  })
                }).catch(err => res.end(err))
            } else {
              res.status(HttpStatus.NOT_FOUND)
              res.end('File not found.')
            }
          })
      } else {
        res.sendFile(filePath, { root: '/' })
      }
    });
  }

  getAllImageNames(req, res) {
    dropboxFileNames()
      .then(names => res.json(names))
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