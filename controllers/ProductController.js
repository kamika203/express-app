import { Product } from "../models.js";

class ProductController {
  async create(req, res) {
    console.log(req.body);
    const product = await Product.create(req.body);
    res.status(201).json(product);
  }

  async getAllProducts(req, res) {
    const products = await Product.findAll();
    return res.status(200).json(products);
  }

  async getProduct(req, res) {
    const [product] = await Product.findAll({
      where: { id: Number(req.params.id) },
    });
    if (product) {
      return res.status(200).json(product);
    }
    return res.status(404).json("Пользователь по заданному id не найден");
  }

  async update(req, res) {
    const product = await Product.findByPk(req.params.id);
    console.log(req.body);
    if (!product) {
      return res
        .status(404)
        .json({ error: "Пользователь по заданному id не найден" });
    }

    await product.update(req.body);
    return res.status(200).json(product);
  }

  async delete(req, res) {
    const product = await Product.findByPk(req.params.id);
    if (!product) {
      return res.status(404).json({ error: "Пользователь не найден" });
    }
    await product.destroy();
    return res.json({ success: true });
  }
}

export default new ProductController();
