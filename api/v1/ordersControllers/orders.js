/* eslint-disable class-methods-use-this */
import data from '../data/data';

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
      order.orderPrice += (order.orderItems[i].price * order.orderItems[i].quantity);
    }

    data.push(order);
    return response.status(201).send({
      success: 'true',
      message: 'order placed successfuly',
      order,
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

    if (!request.body.orderStatus) {
      return response.status(400).send({
        success: 'false',
        message: 'order status is required',
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
