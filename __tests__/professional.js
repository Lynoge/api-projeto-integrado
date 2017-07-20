import HttpStatus from 'http-status'
import sha1 from 'sha1'
import app from '../src/server'
import mocha from 'should'
import supertest from 'supertest'

const token = 'token_joao'

const request = supertest(app)

const Professional = {
  runTest: () => {

    describe('Professional', () => {
      it('Get All', (done) => {
        request.get('/professional')
          .set({ 'token': token })
          .end((err, res) => {
            res.statusCode.should.be.eql(HttpStatus.OK, JSON.stringify(res.body))
            res.body.length.should.be.above(0)
            done()
          })
      })

      it('Get by Id', (done) => {
        request.get('/professional/4')
          .set({ 'token': token })
          .end((err, res) => {
            res.statusCode.should.be.eql(HttpStatus.OK, JSON.stringify(res.body))
            res.body.id.should.be.eql(4)
            done()
          })
      })

      it('Get by Id not found', (done) => {
        request.get('/professional/9999')
          .set({ 'token': token })
          .end((err, res) => {
            res.statusCode.should.be.eql(HttpStatus.NOT_FOUND, JSON.stringify(res.body))
            done()
          })
      })

      it('Get by profission not records', (done) => {
        request.get('/professional/profission/3')
          .set({ 'token': token })
          .end((err, res) => {
            res.statusCode.should.be.eql(HttpStatus.NO_CONTENT, JSON.stringify(res.body))
            done()
          })
      })

      it('Get by profission id', (done) => {
        request.get('/professional/profission/2')
          .set({ 'token': token })
          .end((err, res) => {
            res.statusCode.should.be.eql(HttpStatus.OK, JSON.stringify(res.body))
            done()
          })
      })

      it('Get by profission name', (done) => {
        request.get('/professional/profission/mec')
          .set({ 'token': token })
          .end((err, res) => {
            res.statusCode.should.be.eql(HttpStatus.OK, JSON.stringify(res.body))
            done()
          })
      })
    })
  }
}

module.exports = Professional