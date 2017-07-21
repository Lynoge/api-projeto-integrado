import mocha from 'should'
import supertest from 'supertest'
import HttpStatus from 'http-status'

import app from '../src/server'

const professionalToken = 'token_joao'
const requesterToken = 'token_johnson'

const request = supertest(app)

const Profission = {
  runTest: () => {

    describe('Profission', () => {

      it('Profissão inválida', (done) => {
        request.post('/professional/profission/3')
          .set({ 'token': professionalToken })
          .end((err, res) => {
            res.statusCode.should.be.eql(HttpStatus.UNPROCESSABLE_ENTITY, JSON.stringify(res.body))
            res.body.error.should.be.eql('Profissão ou profissional inválido.')
            done()
          })
      })

      it('Profissão já incluso', (done) => {
        request.post('/professional/profission/1')
          .set({ 'token': professionalToken })
          .end((err, res) => {
            res.statusCode.should.be.eql(HttpStatus.UNPROCESSABLE_ENTITY, JSON.stringify(res.body))
            res.body.error.should.be.eql('Já incluso na profissão.')
            done()
          })
      })

      it('Usando requester.', (done) => {
        request.post('/professional/profission/2')
          .set({ 'token': requesterToken })
          .end((err, res) => {
            res.statusCode.should.be.eql(HttpStatus.UNAUTHORIZED, JSON.stringify(res.body))
            res.body.error.should.be.eql('Deve ser profissional.')
            done()
          })
      })

      it('Deletar profissão', (done) => {
        request.delete('/professional/profission/2')
          .set({ 'token': requesterToken })
          .end((err, res) => {
            res.statusCode.should.be.eql(HttpStatus.OK, JSON.stringify(res.body))
            done()
          })
      })
    })
  }
}

module.exports = Profission
