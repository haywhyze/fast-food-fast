/* eslint-disable quote-props */
import chai from 'chai';
import { describe, it } from 'mocha';
import app from '../app';

const expect = chai.expect;

chai.use(require('chai-http'));

describe('GET /orders', () => {
  it('should get all the orders', () => {
    chai.request(app)
      .get('/orders')
      .then((response) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.an('object');
      });
  });
});

describe('GET /orders', () => {
  it('should return false if wrong parameter exist', () => {
    chai.request(app)
      .get('/orders/tyyy')
      .then((response) => {
        expect(response).to.have.status(404);
        expect(response.body.success).to.equal('false');
      });
  });
});

describe('GET /orders', () => {
  it('should get a specified order', () => {
    chai.request(app)
      .get('/orders/1')
      .end((error, response) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.an('object');
        expect(response.body.order.orderItems[0].id).to.be.a('number');
      });
  });
});

describe('PUT /order', () => {
  it('should update the order specified', () => {
    chai.request(app)
      .put('/orders/1')
      .set('content-type', 'application/json')
      .send({ 'orderStatus': 'new' })
      .end((error, response) => {
        expect(response).to.have.status(201);
        expect(response.body).to.be.an('object');
        // console.log(response.body);
        expect(response.body.updatedOrder.orderStatus).to.equal('new');
      });
  });
});

describe('PUT /order', () => {
  it('should not update the order', () => {
    chai.request(app)
      .put('/orders/1')
      .set('content-type', 'application/json')
      .send({ 'orderStatus': 'good' })
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body).to.be.an('object');
        // console.log(response.body);
        expect(response.body.success).to.equal('false');
      });
  });
});

describe('POST /orders', () => {
  it('should place an order', () => {
    chai.request(app)
      .post('/orders')
      .set('content-type', 'application/json')
      .send({ 'orderItems': [{ 'id': '4302', 'quantity': '1' }] })
      .end((error, response) => {
        expect(response).to.have.status(201);
        expect(response.body).to.be.an('object');
        expect(response.body.success).to.equal('true');
      });
  });
});

describe('POST /orders', () => {
  it('should not place an order', () => {
    chai.request(app)
      .post('/orders')
      .set('content-type', 'application/json')
      .send({ 'orderItems': [{ 'id': '4olo', 'quantity': 'ppp' }] })
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body).to.be.an('object');
        expect(response.body.success).to.equal('false');
      });
  });
});
