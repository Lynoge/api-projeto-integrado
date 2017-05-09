import app from '../app'
import mocha from 'should'
import supertest from 'supertest'
const request = supertest(app)

describe('Professional', function () {
  it('Get all professionals', function (done) {
    request.get('/professionals')
      .end(function (err, res) {
        console.log(err)
        res.body.length.should.be.above(0)
        done()
      })
  })
})
