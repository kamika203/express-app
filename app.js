import express from "express";
import { seq } from "./db.js";
import path from "path";
import { fileURLToPath } from "url";
import {
  User,
  Review,
  Product,
  Category,
  Order,
  Order_item,
} from "./models.js";
import { router } from "./router/index.js";

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.json());
app.use("/api", router);
const PORT = 3000;

app.get("/test", (req, res) => {
  res.sendFile(path.join(__dirname, "test.html"));
});

// let products = [
//   {
//     id: 1,
//     name: "Omelet",
//     description: "egg",
//     producer: "chicken",
//     price: 9.99,
//   },
//   {
//     id: 2,
//     name: "Cheese",
//     description: "milk",
//     producer: "cow",
//     price: 99.99,
//   },
//   {
//     id: 3,
//     name: "Milk",
//     description: "milk",
//     producer: "cow",
//     price: 999.99,
//   },
// ];

// app.get("/prods", (req, res) => {
//   return res.json(products);
// });

// app.get("/prods/:id", (req, res) => {
//   for (let prod of products) {
//     if (prod.id == req.params.id) {
//       return res.status(200).json(prod);
//     }
//   }
//   return res.status(404).json("Товар по заданному id не найден");
// });

// app.post("/prods", (req, res) => {
//   console.log(req.body);

//   let newP = {
//     id: Date.now(),
//     ...req.body,
//   };

//   products.push(newP);

//   return res.status(200).json(products);
// });

// app.put("/prods/:id", (req, res) => {
//   let update_id = req.params.id;
//   let prodToU = products.find(function (prod) {
//     return prod.id === Number(update_id);
//   });

//   console.log(req.body);
//   if (prodToU && req.body) {
//     if (req.body.name !== undefined) prodToU.name = req.body.name;
//     if (req.body.description !== undefined)
//       prodToU.description = req.body.description;
//     if (req.body.producer !== undefined) prodToU.producer = req.body.producer;
//     if (req.body.price !== undefined) prodToU.price = req.body.price;
//     return res
//       .status(200)
//       .json("Товар с id: <<" + update_id + ">> успешно обновлён\n");
//   } else {
//     return res.status(404).json("Товар по заданному id не найден");
//   }
// });

// app.delete("/prods/:id", (req, res) => {
//   let delete_id = req.params.id;
//   let prodToD = products.find(function (prod) {
//     return prod.id === Number(delete_id);
//   });

//   if (prodToD) {
//     let filtered = products.filter(function (prod) {
//       return prod.id !== delete_id;
//     });
//     products = filtered;
//     return res
//       .status(200)
//       .json("Товар под id: <<" + delete_id + ">> успешно удален!");
//   } else {
//     return res.status(404).json("Товар по заданному id не найден");
//   }
// });

seq
  .authenticate()
  .then(() => console.log("DB connected"))
  .catch((error) => console.error("error:", error));
seq.sync({ alter: true }).then((result) => {
  console.log("database connected");
});

app.listen(PORT, () => {
  console.log("Сервер запущен на  порту ", PORT);
});
