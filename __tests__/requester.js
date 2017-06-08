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

      it('CREATE', (done) => {
        const requester = {
          username: 'requester',
          name: 'requester',
          email: 'requester@mail.com',
          password: '123qwe',
          phone: 539087657,
          image: 'public/user_id',
          profissionId: 2
        }
        request.post('/requester')
          .send(requester)
          .end((err, res) => {
            res.statusCode.should.be.eql(HttpStatus.CREATED)
            done()
          })
      })

      it('Delete', (done) => {
        request.delete('/requester/5')
          .end((err, res) => {
            res.statusCode.should.be.eql(HttpStatus.NO_CONTENT)
            done()
          })
      })

    })
  }
}

module.exports = Requeser
