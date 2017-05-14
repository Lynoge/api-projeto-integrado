import app from '../app'
import mocha from 'should'
import supertest from 'supertest'
const request = supertest(app)

const Professional = {
  runTest: function () {

    describe('Professional', function () {
      it('Get all professionals', function (done) {
        request.get('/professional')
          .end(function (err, res) {
            console.log(res.body)
            res.body.statusCode.should.be.eql(200, res.body.data.error)
            done()
          })
      })

      it('Get all professionals', function (done) {
        request.get('/professional/45')
          .end(function (err, res) {
            const message = res.body.data ? res.body.data.error : "error not handled"
            res.body.statusCode.should.be.eql(200, message)
            done()
          })
      })

    })
  }
}

module.exports = Professional
