import mocha from 'should'
import supertest from 'supertest'
import HttpStatus from 'http-status'

import app from '../src/server'

const request = supertest(app)

const professionalToken = 'token_joao'
const requesterToken = 'token_lennon'

const Chat = {
  runTest: () => {

    describe('Chat', () => {

      it('Obter mensagens de usuário que não possui', (done) => {
        request.get('/chat')
          .set({ 'token': professionalToken })
          .end((err, res) => {
            res.statusCode.should.be.eql(HttpStatus.NO_CONTENT, JSON.stringify(res.body))
            done()
          })
      })

      it('Obter mensagens de usuário que possui', (done) => {
        request.get('/chat')
          .set({ 'token': requesterToken })
          .end((err, res) => {
            res.statusCode.should.be.eql(HttpStatus.OK, JSON.stringify(res.body))
            res.body.length.should.be.above(0)
            done()
          })
      })
    })
  }
}

module.exports = Chat
