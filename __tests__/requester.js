import app from '../app'
import mocha from 'should'
import supertest from 'supertest'
const request = supertest(app)

let insertedId = 0
const Requeser = {
  runTest: () => {
    describe('Requester', () => {

      it('Get all requesters', (done) => {
        request.get('/requester')
          .end((err, res) => {
            res.body.statusCode.should.be.eql(200, res.body.data.error)
            done()
          })
      })

      it('Get all requesters', (done) => {
        request.get('/requester/3')
          .end((err, res) => {
            res.body.statusCode.should.be.eql(200, res.body.data.error)
            done()
          })
      })
      
    })
  }
}

module.exports = Requeser
