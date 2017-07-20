import mocha from 'should'
import supertest from 'supertest'
import HttpStatus from 'http-status'

import app from '../src/server'
import clone from '../src/helpers/clone'

const professionalToken = 'token_joao'
const requesterToken = 'token_johnson'

const request = supertest(app)

const visit = {
  date: Date(),
  professionalId: 3,
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
          .set({ 'token': requesterToken })
          .end((err, res) => {
            res.statusCode.should.be.eql(HttpStatus.UNPROCESSABLE_ENTITY, JSON.stringify(res.body))
            res.body.error.should.be.eql('Data invalida')
            done()
          })
      })

      it('Profissional inválido.', (done) => {
        let cloned = clone(visit)
        cloned.professionalId = ''
        request.post('/visit')
          .set({ 'token': requesterToken })
          .send(cloned)
          .end((err, res) => {
            res.statusCode.should.be.eql(HttpStatus.UNPROCESSABLE_ENTITY, JSON.stringify(res.body))
            res.body.error.should.be.eql('Profissional inválido.')
            done()
          })
      })

      it('Profissional inválido.', (done) => {
        let cloned = clone(visit)
        cloned.professionalId = 9999
        request.post('/visit')
          .set({ 'token': requesterToken })
          .send(cloned)
          .end((err, res) => {
            res.statusCode.should.be.eql(HttpStatus.UNPROCESSABLE_ENTITY, JSON.stringify(res.body))
            res.body.error.should.be.eql('Profissional inválido.')
            done()
          })
      })

      it('Visita Salva', (done) => {
        request.post('/visit')
          .set({ 'token': requesterToken })
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
