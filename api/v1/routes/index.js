import express from 'express';
import orderController from '../ordersControllers/orders';

const router = express.Router();

// query to get all orders
router.get('/orders', orderController.getAllOrders);

// placing new order
router.post('/orders', orderController.createOrder);

// fetching single order
router.get('/orders/:id', orderController.getOrder);

// update order status from the database.
router.put('/orders/:id', orderController.updateOrder);

export default router;
