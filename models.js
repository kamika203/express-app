import { DataTypes, Sequelize } from "sequelize";
import { seq } from "./db.js";

const User = seq.define("user", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  email: { type: DataTypes.STRING, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  first_name: { type: DataTypes.STRING, allowNull: false },
  last_name: { type: DataTypes.STRING, allowNull: false },
  avatar: { type: DataTypes.STRING, allowNull: false },
  activationLink: { type: DataTypes.STRING },
  activated: { type: DataTypes.BOOLEAN },
  resetToken: { type: DataTypes.STRING },
});

const Order = seq.define("order", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  date: { type: DataTypes.DATE, allowNull: false },
  amount: { type: DataTypes.INTEGER, allowNull: false },
  status: { type: DataTypes.STRING, allowNull: false },
});

const Category = seq.define("category", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
});

const Product = seq.define("product", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
  image: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.FLOAT, allowNull: false },
  stock_quantity: { type: DataTypes.INTEGER, allowNull: false },
});

const Review = seq.define("review", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  text: { type: DataTypes.STRING, allowNull: false },
});

const Order_item = seq.define("order_item", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  price_at_a_time: { type: DataTypes.FLOAT, allowNull: false },
  quantity: { type: DataTypes.INTEGER, allowNull: false },
});

User.hasMany(Review, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
  onUpdate: "CASCADE",
});
Review.belongsTo(User, { foreignKey: "user_id" });
User.hasMany(Order, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
  onUpdate: "CASCADE",
});
Order.belongsTo(User, { foreignKey: "user_id" });

Product.hasMany(Review, {
  foreignKey: "product_id",
  onDelete: "SET NULL",
  onUpdate: "CASCADE",
});
Review.belongsTo(Product, { foreignKey: "product_id" });
Product.hasMany(Order_item, {
  foreignKey: "product_id",
  onDelete: "SET NULL",
  onUpdate: "CASCADE",
});
Order_item.belongsTo(Product, { foreignKey: "product_id" });

Category.hasMany(Product, {
  foreignKey: "category_id",
  onDelete: "SET NULL",
  onUpdate: "CASCADE",
});
Product.belongsTo(Category, { foreignKey: "category_id" });

Order.hasMany(Order_item, {
  foreignKey: "order_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Order_item.belongsTo(Order, { foreignKey: "order_id" });

export { User, Review, Product, Category, Order, Order_item };
