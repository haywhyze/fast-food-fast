/* eslint-disable class-methods-use-this */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
import db from '../db';
// import food from '../data/food';


const foodIdArray = [];
food.map(e => foodIdArray.push(e.id));
const orderStatusArray = ['new', 'processing', 'cancelled', 'complete'];

class OrdersController {
  getAllOrders(request, response) {
    return response.status(200).send({
      success: 'true',
      message: 'orders succesfully retrieved',
      orders: data,
    });
  }

  getOrder(request, response) {
    const id = parseInt(request.params.id, 10);
    data.map((order) => {
      if (order.orderId === id) {
        return response.status(200).send({
          success: 'true',
          message: 'order retrieved successfully',
          order,
        });
      }
    });
    return response.status(404).send({
      success: 'false',
      message: 'the order you requested for does not exist',
    });
  }

  createOrder(request, response) {
    if (request.body.orderItems) {
      request.body.orderItems.map((e) => {
        if (Number.isNaN(Number(e.quantity))
        || !foodIdArray.includes(Number(e.id))) {
          return response.status(400).send({
            success: 'false',
            message: 'order items value not valid. Please read the docs for how to place valid order',
          });
        }
      });
      const orderItems = [];
      let totalPrice = 0;
      request.body.orderItems.map((e) => {
        const index = food.findIndex(i => i.id === Number(e.id));
        orderItems.push({
          id: food[index].id,
          name: food[index].name,
          price: food[index].price,
          quantity: e.quantity,
        });
        totalPrice += (e.quantity * food[index].price);
      });
      const order = {
        orderId: data.length + 1,
        orderItems,
        orderStatus: 'new',
        totalPrice,
      };
      data.push(order);
      return response.status(201).send({
        success: 'true',
        message: 'order placed successfuly',
        order,
      });
    }
    return response.status(400).send({
      success: 'false',
      message: 'order items is required',
    });
  }


  updateOrder(request, response) {
    const id = parseInt(request.params.id, 10);
    let orderFound;
    let itemIndex;
    data.map((order, index) => {
      if (order.orderId === id) {
        orderFound = order;
        itemIndex = index;
      }
    });
    if (!orderFound) {
      return response.status(404).send({
        success: 'false',
        message: 'order not found',
      });
    }
    if (!orderStatusArray.includes(request.body.orderStatus)) {
      return response.status(400).send({
        success: 'false',
        message: 'order status must be set to specified string',
      });
    }
    const updatedOrder = {
      orderId: orderFound.orderId,
      orderItems: orderFound.orderItems,
      orderPrice: orderFound.orderPrice,
      orderStatus: request.body.orderStatus,
    };
    data.splice(itemIndex, 1, updatedOrder);
    return response.status(201).send({
      success: 'true',
      message: 'order updated successfully',
      updatedOrder,
    });
  }
}

const orderController = new OrdersController();
export default orderController;
