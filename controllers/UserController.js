import { User } from "../models.js";

class UserController {
  async create(req, res) {
    console.log(req.body);
    const user = await User.create(req.body);
    res.status(201).json(user);
  }

  async getAllUsers(req, res) {
    const users = await User.findAll();
    return res.status(200).json(users);
  }

  async getUser(req, res) {
    const [user] = await User.findAll({
      where: { id: Number(req.params.id) },
    });
    if (user) {
      return res.status(200).json(user);
    }
    return res.status(404).json("Пользователь по заданному id не найден");
  }

  async update(req, res) {
    const user = await User.findByPk(req.params.id);
    console.log(req.body);
    if (!user) {
      return res
        .status(404)
        .json({ error: "Пользователь по заданному id не найден" });
    }

    await user.update(req.body);
    return res.status(200).json(user);
  }

  async delete(req, res) {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "Пользователь не найден" });
    }
    await user.destroy();
    return res.json({ success: true });
  }
}

export default new UserController();
