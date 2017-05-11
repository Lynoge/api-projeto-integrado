import app from '../app'
import mocha from 'should'
import supertest from 'supertest'
const request = supertest(app)

describe('Requester', () => {
  it('Get all requesters', (done) => {
    request.get('/requester')
      .end((err, res) => {
        res.body.statusCode.should.be.eql(200, res.body.data.error)
        done()
      })
  })

  it('Get requester by identifier', (done) => {
    request.get('/requester/54')
      .end((err, res) => {
        res.body.statusCode.should.be.eql(200, res.body.data.error)
        done()
      })
  })

  it('Create new requester', (done) => {
    request.post('/requester').send({
      username: 'requester',
      name: 'requester',
      password: '123',
      active: false,
      createAt: new Date(),
      email: 'requester@mail.com'
    })
      .end((err, res) => {
        res.body.statusCode.should.be.eql(200, res.body.data.error)
        done()
      })
  })

  it('Remove requester', (done) => {
    request.delete('/requester/14')
      .end((err, res) => {
        res.body.statusCode.should.be.eql(200, res.body.data.error)
        done()
      })
  })
})
