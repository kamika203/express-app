import { Review } from "../models.js";

class ReviewController {
  async create(req, res) {
    console.log(req.body);
    const review = await Review.create(req.body);
    res.status(201).json(review);
  }

  async getAllReviews(req, res) {
    const reviews = await Review.findAll();
    return res.status(200).json(reviews);
  }

  async getReview(req, res) {
    const [review] = await Review.findAll({
      where: { id: Number(req.params.id) },
    });
    if (review) {
      return res.status(200).json(review);
    }
    return res.status(404).json("Отзыв по заданному id не найден");
  }

  async update(req, res) {
    const review = await Review.findByPk(req.params.id);
    console.log(req.body);
    if (!review) {
      return res.status(404).json({ error: "Отзыв по заданному id не найден" });
    }

    await review.update(req.body);
    return res.status(200).json(review);
  }

  async delete(req, res) {
    const review = await Review.findByPk(req.params.id);
    if (!review) {
      return res.status(404).json({ error: "Отзыв не найден" });
    }
    await review.destroy();
    return res.json({ success: true });
  }
}

export default new ReviewController();
