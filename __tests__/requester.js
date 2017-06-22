import HttpStatus from 'http-status'
import app from '../src/server'
import mocha from 'should'
import supertest from 'supertest'
const request = supertest(app)

let insertedId = 0
const Requeser = {
  runTest: () => {

    describe('Requester', () => {

      it('Get All', (done) => {
        request.get('/requester')
          .end((err, res) => {
            res.statusCode.should.be.eql(HttpStatus.OK)
            res.body.length.should.be.above(0)
            done()
          })
      })

      it('Get by Id', (done) => {
        request.get('/requester/2')
          .end((err, res) => {
            res.statusCode.should.be.eql(HttpStatus.OK)
            res.body.id.should.be.eql(2)
            done()
          })
      })

      it('Get by Id not found', (done) => {
        request.get('/requester/5')
          .end((err, res) => {
            res.statusCode.should.be.eql(HttpStatus.NOT_FOUND)
            done()
          })
      })
    })
  }
}

module.exports = Requeser
