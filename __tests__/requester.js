import app from '../app'
import mocha from 'should'
import supertest from 'supertest'
const request = supertest(app)

const user = {
  username: 'requester',
  name: 'requester',
  password: '123',
  active: false,
  createAt: new Date(),
  email: 'requester@mail.com'
}

const delay = (seconds) => {
  const actual = new Date().getTime()
  while ((actual + seconds) > new Date().getTime());
}

let insertedId = 0

describe('CRUD Requester', () => {

  it('Creating...', (done) => {
    request.post('/requester').send(user)
      .end((err, res) => {
        insertedId = res.body.data
        res.body.statusCode.should.be.eql(200, res.body.data.error)
        done()
      })
  })

  it('Remove requester', (done) => {
    setTimeout(() => {
      request.delete('/requester/' + insertedId)
        .end((err, res) => {
          res.body.statusCode.should.be.eql(200, res.body.data.error)
          done()
        })
    }, 3000)
  })
})

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
