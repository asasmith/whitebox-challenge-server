const req = require('supertest');
const app = require('../app');

describe('GET /products', () => {
  it('responds with json containing all products', () => {
    return req(app)
      .get('/products')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      // better to check status code here or below?;
      .expect(200)
      .then(res => {
        // console.log(res.body)
        expect(res.statusCode).toBe(200)
        //check that response is an array
        expect(Array.isArray(res.body)).toBeTruthy()
        // check for object keys
        expect(res.body[0]).toHaveProperty('_id')
      })
  })
})