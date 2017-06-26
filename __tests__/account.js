import mocha from 'should'
import supertest from 'supertest'
import HttpStatus from 'http-status'

import app from '../src/server'
import clone from '../src/helpers/clone'

const request = supertest(app)

const account = {
  name: 'fulano',
  email: 'fulano@mail.com',
  password: '123456das',
  nickname: 'fulaninho',
  type: 'P'
}

const Account = {
  runTest: () => {

    describe('Account', () => {

      it('Nome inválido', (done) => {
        let cloned = clone(account)
        cloned.name = ''
        request.post('/signup')
          .send(cloned)
          .end((err, res) => {
            res.statusCode.should.be.eql(HttpStatus.UNPROCESSABLE_ENTITY)
            res.body.error.should.be.eql('Nome inválido')
            done()
          })
      })

      it('Email inválido', (done) => {
        let cloned = clone(account)
        cloned.email = ''
        request.post('/signup')
          .send(cloned)
          .end((err, res) => {
            res.statusCode.should.be.eql(HttpStatus.UNPROCESSABLE_ENTITY)
            res.body.error.should.be.eql('Email inválido')
            done()
          })
      })

      it('Senha inválido', (done) => {
        let cloned = clone(account)
        cloned.password = 'das'
        request.post('/signup')
          .send(cloned)
          .end((err, res) => {
            res.statusCode.should.be.eql(HttpStatus.UNPROCESSABLE_ENTITY)
            res.body.error.should.be.eql('Senha inválida')
            done()
          })
      })

      it('Nickname inválido', (done) => {
        let cloned = clone(account)
        cloned.nickname = ''
        request.post('/signup')
          .send(cloned)
          .end((err, res) => {
            res.statusCode.should.be.eql(HttpStatus.UNPROCESSABLE_ENTITY)
            res.body.error.should.be.eql('Nickname inválido')
            done()
          })
      })

      it('Tipo inválido', (done) => {
        let cloned = clone(account)
        cloned.type = 'K'
        request.post('/signup')
          .send(cloned)
          .end((err, res) => {
            res.statusCode.should.be.eql(HttpStatus.UNPROCESSABLE_ENTITY)
            res.body.error.should.be.eql('Tipo inválido')
            done()
          })
      })

      it('Email já cadastrado', (done) => {
        let cloned = clone(account)
        cloned.email = 'john_lennon@mail.com'
        request.post('/signup')
          .send(cloned)
          .end((err, res) => {
            res.statusCode.should.be.eql(HttpStatus.UNPROCESSABLE_ENTITY)
            res.body.error.should.be.eql('Email já cadastrado.')
            done()
          })
      })

      it('Conta criada', (done) => {
        request.post('/signup')
          .send(account)
          .end((err, res) => {
            res.statusCode.should.be.eql(HttpStatus.CREATED)
            const user = res.body.user
            user.token.should.be.type('string')
            user.token.length.should.be.above(10)
            done()
          })
      })
    })
  }
}

module.exports = Account
