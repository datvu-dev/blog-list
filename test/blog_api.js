const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const request = supertest(app)

describe('Blogs', () => {
    after(() => {
        mongoose.connection.close()
    })

    it('are returned as json', (done) => {
        request.get('/api/blogs')
            .expect(200)
            .expect('Content-Type', /application\/json/)
            .end((err, res) => {
                done(err)
            })
    })
})