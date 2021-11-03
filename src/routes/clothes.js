const express = require("express");
const clothesrouter = express.Router();
const { clothescolection } = require("../models/index");
clothesrouter.get("/clothes", getItem);
clothesrouter.get("/clothes/:id", getOneItem);
clothesrouter.put("/clothes/:id", getIonetem);
clothesrouter.post("/clothes", addItem);
// clothesrouter.put("/clothes/:id", updataItemm);
clothesrouter.delete("/clothes/:id", deleteItem);

async function getItem(req, res) {
  let readClothes = await clothescolection.getItem();
  res.status(200).json(readClothes);
}
async function getIonetem(req, res) {
  const id = parseInt(req.params.id);
  let readoneClothes = await clothescolection.getItem(id);
  res.status(200).json(readoneClothes);
}
async function addItem(req, res) {
  let data = req.body;
  console.log(data);
  let addOne = await clothescolection.create(data);
  res.status(201).json(addOne);
}
async function getOneItem(req, res) {
  const id = parseInt(req.params.id);
  const item = await clothescolection.getItem(id);
  res.status(200).json(item);
}
// async function updataItemm(req, res) {
//   const id = parseInt(req.params.id);
//   const obj = req.body;
//   let updatedItem = await clothescolection.updateItem(id, obj);
//   res.status(201).json(updatedItem);
// }

async function deleteItem(req, res) {
  const id = parseInt(req.params.id);
  let deleteclothes = await clothescolection.delete(id);
  res.status(204).json(deleteclothes);
}
module.exports = clothesrouter;
