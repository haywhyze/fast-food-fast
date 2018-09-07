import express from 'express';
// import { request } from 'http';
import data from './data';


// Set up express app
const app = express();

// query to get all orders
app.get('/orders', (request, response) => {
  response.status(200).send({
    success: 'true',
    message: 'orders succesfully retrieved',
    orders: data,
  });
});

// Set up server
const PORT = 3000;
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server listening on port ${PORT}`);
});

export default app;
