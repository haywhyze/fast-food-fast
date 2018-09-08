import chai from 'chai';
import app from './app';

chai.use(require('chai-http'));

describe('GET /orders', () => {
  it('should get all the orders', () => {
    return chai.request(app)
      .get('/orders')
      .then((response) => {
        chai.expect(response).to.have.status(200);
        chai.expect(response.body).to.be.an('object');
      });
  });
});