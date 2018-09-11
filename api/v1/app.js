import express from 'express';
// import { request } from 'http';
import bodyParser from 'body-parser';
import data from './data';


// Set up express app
const app = express();

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// query to get all orders
app.get('/orders', (request, response) => {
  response.status(200).send({
    success: 'true',
    message: 'orders succesfully retrieved',
    orders: data,
  });
});

// placing new order
app.post('/orders', (request, response) => {
  const order = {
    orderId: data.length + 1,
    orderItems: [],
    orderPrice: 0,
    orderStatus: 'pending',
  };
  const noItemsOrdered = request.body.itemsOrdered;
  for (let i = 0; i < Number(noItemsOrdered); i += 1) {
    order.orderItems[i] = {};
    order.orderItems[i].name = request.body[`orderItem_${i}_name`];
    order.orderItems[i].quantity = request.body[`orderItem_${i}_quantity`];
    order.orderItems[i].price = request.body[`orderItem_${i}_price`];
    order.orderPrice += (order.orderItems[i].price * order.orderItems[i].quantity)
  }

  data.push(order);
  return response.status(201).send({
    success: 'true',
    message: 'order placed successfuly',
    order,
    test: typeof (order.orderItems),
  });
});

// Set up server
const PORT = 3000;
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server listening on port ${PORT}`);
});

export default app;
