import { Request, Response } from 'express';

const orders = [
  { id: 1, name: '1' },
  { id: 2, name: '2' },
  { id: 3, name: '3' },
  { id: 4, name: '4' },
];

// get all orders
export const getAllOrders = async (req: Request, res: Response) => {
  try {
    res.status(200).json(orders);
  } catch (err) {
    res.status(404).json({ message: 'orders not found' });
  }
};

// post order
export const createOrder = async (req: Request, res: Response) => {
  try {
    const newOrder = await req.body;
    orders.push(newOrder);
    return res.status(200).json(orders);
  } catch (err) {
    res.status(404).json({ message: 'order cannot be created' });
  }
};

// put order
export const editOrderInfo = async (req: Request, res: Response) => {
  try {
    const editOrder = await req.body;
    const index = orders.findIndex((order) => order.id === editOrder.id);

    if (index !== -1) {
      orders[index] = editOrder;
      return res.status(200).json(orders);
    } else {
      return res.json('cant find the order by this id');
    }
  } catch (err) {
    res.status(404).json({ message: 'order cannot be edited' });
  }
};

// delete order
export const deleteOrder = async (req: Request, res: Response) => {
  try {
    const id = await req.params.id;
    const newOrderArray = orders.filter((order) => order.id.toString() !== id);
    res.status(200).json(newOrderArray);
  } catch (err) {
    res.status(404).json({ message: 'order cannot be deleted' });
  }
};
