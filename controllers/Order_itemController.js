import { Order_item } from "../models.js";

class Order_itemController {
  async create(req, res) {
    console.log(req.body);
    const order_item = await Order_item.create(req.body);
    res.status(201).json(order_item);
  }

  async getAllOrder_items(req, res) {
    const order_items = await Order_item.findAll();
    return res.status(200).json(order_items);
  }

  async getOrder_item(req, res) {
    const [order_item] = await Order_item.findAll({
      where: { id: Number(req.params.id) },
    });
    if (order_item) {
      return res.status(200).json(order_item);
    }
    return res.status(404).json("Элемент заказа по заданному id не найден");
  }

  async update(req, res) {
    const order_item = await Order_item.findByPk(req.params.id);
    console.log(req.body);
    if (!order_item) {
      return res
        .status(404)
        .json({ error: "Элемент заказа по заданному id не найден" });
    }

    await order_item.update(req.body);
    return res.status(200).json(order_item);
  }

  async delete(req, res) {
    const order_item = await Order_item.findByPk(req.params.id);
    if (!order_item) {
      return res.status(404).json({ error: "Элемент заказа не найден" });
    }
    await order_item.destroy();
    return res.json({ success: true });
  }
}

export default new Order_itemController();
