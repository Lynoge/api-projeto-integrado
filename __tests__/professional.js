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
  it('Get professionals by name like "john"', function (done) {
    request.get('/professionals?name=john')
      .end(function (err, res) {
        console.log(err)
        res.body.length.should.be.above(0)
        done()
      })
  })
  it('Get professionals by profission name like "mecânico"', function (done) {
    request.get('/professionals?profission=mecânico')
      .end(function (err, res) {
        console.log(err)
        res.body.length.should.be.above(0)
        done()
      })
  })
})
