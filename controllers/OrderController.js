import { Order } from "../models.js";

class OrderController {
  async create(req, res) {
    console.log(req.body);
    const order = await Order.create(req.body);
    res.status(201).json(order);
  }

  async getAllOrders(req, res) {
    const orders = await Order.findAll();
    return res.status(200).json(orders);
  }

  async getOrder(req, res) {
    const [order] = await Order.findAll({
      where: { id: Number(req.params.id) },
    });
    if (order) {
      return res.status(200).json(order);
    }
    return res.status(404).json("Заказ по заданному id не найден");
  }

  async update(req, res) {
    const order = await Order.findByPk(req.params.id);
    console.log(req.body);
    if (!order) {
      return res.status(404).json({ error: "Заказ по заданному id не найден" });
    }

    await order.update(req.body);
    return res.status(200).json(order);
  }

  async delete(req, res) {
    const order = await Order.findByPk(req.params.id);
    if (!order) {
      return res.status(404).json({ error: "Заказ не найден" });
    }
    await order.destroy();
    return res.json({ success: true });
  }
}

export default new OrderController();
