import mocha from 'should'
import supertest from 'supertest'
import HttpStatus from 'http-status'

import app from '../src/server'
import clone from '../src/helpers/clone'

const request = supertest(app)

const visit = {
  date: Date(),
  professionalId: 3,
  requesterId: 2,
  status: 'PENDENTE'
}

const Visit = {
  runTest: () => {

    describe('Visit', () => {

      it('Data inválida', (done) => {
        let cloned = clone(visit)
        cloned.date = ''
        request.post('/visit')
          .send(cloned)
          .end((err, res) => {
            res.statusCode.should.be.eql(HttpStatus.UNPROCESSABLE_ENTITY, JSON.stringify(res.body))
            res.body.error.should.be.eql('Data invalida')
            done()
          })
      })

      it('Email inválido', (done) => {
        let cloned = clone(visit)
        cloned.professionalId = ''
        request.post('/visit')
          .send(cloned)
          .end((err, res) => {
            res.statusCode.should.be.eql(HttpStatus.UNPROCESSABLE_ENTITY, JSON.stringify(res.body))
            res.body.error.should.be.eql('Profissional inválido')
            done()
          })
      })

      it('Visita Salva', (done) => {
        request.post('/visit')
          .send(visit)
          .end((err, res) => {
            res.statusCode.should.be.eql(HttpStatus.OK, JSON.stringify(res.body))
            done()
          })
      })
    })
  }
}

module.exports = Visit
