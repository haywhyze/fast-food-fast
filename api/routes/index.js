import express from 'express';
import orderController from '../ordersControllers/orders';

const router = express.Router();

// query to get all orders
router.get('/api/v1/orders', orderController.getAllOrders);

// placing new order
router.post('/api/v1/orders', orderController.createOrder);

// fetching single order
router.get('/api/v1/orders/:id', orderController.getOrder);

// update order status from the database.
router.put('/api/v1/orders/:id', orderController.updateOrder);

export default router;
