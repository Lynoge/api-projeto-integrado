import app from '../app'
import mocha from 'should'
import supertest from 'supertest'
const request = supertest(app)

describe('Professional', function () {
    it('Get some professionals', function (done) {
        request.get('/professionals')
            .end(function (err, res) {
                console.log('imprimindo...');
                console.log(res.body);
                //res.body.length.should.be.above(0);
                done();
            })
    })
})