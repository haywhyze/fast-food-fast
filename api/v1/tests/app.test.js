import chai from 'chai';
import { describe, it } from 'mocha';
import app from '../app';


chai.use(require('chai-http'));

describe('GET /orders', () => {
  it('should get all the orders', () => {
    chai.request(app)
      .get('/orders')
      .then((response) => {
        chai.expect(response).to.have.status(200);
        chai.expect(response.body).to.be.an('object');
      });
  });
});

describe('POST /orders', () => {
  it('should place an order', () => {
    chai.request(app)
      .post('/orders')
      .then((response) => {
        chai.expect(response).to.have.status(201);
        chai.expect(response.body).to.be.an('object');
      });
  });
});