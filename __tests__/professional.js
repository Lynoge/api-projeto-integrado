import HttpStatus from 'http-status'
import app from '../src/server'
import mocha from 'should'
import supertest from 'supertest'
const request = supertest(app)

const Professional = {
  runTest: () => {

    describe('Professional', () => {
      it('Get All', (done) => {
        request.get('/professional')
          .end((err, res) => {
            res.statusCode.should.be.eql(HttpStatus.OK)
            res.body.length.should.be.above(0)
            done()
          })
      })

      it('Get by Id', (done) => {
        request.get('/professional/4')
          .end((err, res) => {
            res.statusCode.should.be.eql(HttpStatus.OK)
            res.body.id.should.be.eql(4)
            done()
          })
      })

      it('Get by Id not found', (done) => {
        request.get('/professional/5')
          .end((err, res) => {
            res.statusCode.should.be.eql(HttpStatus.NOT_FOUND)
            done()
          })
      })

      it('CREATE', (done) => {
        const professional = {
          username: 'professional',
          name: 'professional',
          email: 'professional@mail.com',
          password: '123qwe',
          phone: 539087657,
          image: 'public/user_id',
          profissionId: 2
        }
        request.post('/professional')
          .send(professional)
          .end((err, res) => {
            res.statusCode.should.be.eql(HttpStatus.CREATED)
            done()
          })
      })

      it('Delete', (done) => {
        request.delete('/professional/5')
          .end((err, res) => {
            res.statusCode.should.be.eql(HttpStatus.NO_CONTENT)
            done()
          })
      })

    })
  }
}

module.exports = Professional