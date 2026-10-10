import { Category } from "../models.js";

class CategoryController {
  async create(req, res) {
    console.log(req.body);
    const category = await Category.create(req.body);
    res.status(201).json(category);
  }

  async getAllCategorys(req, res) {
    const categorys = await Category.findAll();
    return res.status(200).json(categorys);
  }

  async getCategory(req, res) {
    const [category] = await Category.findAll({
      where: { id: Number(req.params.id) },
    });
    if (category) {
      return res.status(200).json(category);
    }
    return res.status(404).json("Категория по заданному id не найдена");
  }

  async update(req, res) {
    const category = await Category.findByPk(req.params.id);
    console.log(req.body);
    if (!category) {
      return res
        .status(404)
        .json({ error: "Категория по заданному id не найдена" });
    }

    await category.update(req.body);
    return res.status(200).json(category);
  }

  async delete(req, res) {
    const category = await Category.findByPk(req.params.id);
    if (!category) {
      return res.status(404).json({ error: "Категория не найдена" });
    }
    await category.destroy();
    return res.json({ success: true });
  }
}

export default new CategoryController();
