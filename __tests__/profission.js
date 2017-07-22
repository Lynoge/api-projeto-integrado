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

      it('Inserir nova profissão', (done) => {
        request.post('/profission')
          .set({ 'token': professionalToken })
          .send({ name: 'Cosinheiro' })
          .end((err, res) => {
            res.statusCode.should.be.eql(HttpStatus.CREATED, JSON.stringify(res.body))
            done()
          })
      })

      it('Obter profissões', (done) => {
        request.get('/profission/')
          .set({ 'token': professionalToken })
          .end((err, res) => {
            res.statusCode.should.be.eql(HttpStatus.OK, JSON.stringify(res.body))
            res.body.length.should.be.above(0)
            done()
          })
      })

      it('Profissão inválida', (done) => {
        request.post('/profission/933333')
          .set({ 'token': professionalToken })
          .end((err, res) => {
            res.statusCode.should.be.eql(HttpStatus.NOT_FOUND, JSON.stringify(res.body))
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

      it('Desvincular profissional da profissão', (done) => {
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
