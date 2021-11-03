const express = require("express");
const foodrouter = express.Router();
const { foodcollection } = require("../models/index");
foodrouter.get("/food", getItem);
foodrouter.get("/food/:id", getOneItem);
foodrouter.put("/food/:id", getIonetem);
foodrouter.post("/food", addItem);
// foodrouter.put("/food/:id", updataItemm);
foodrouter.delete("/food/:id", deleteItem);

async function getItem(req, res) {
  let readClothes = await foodcollection.getItem();
  res.status(200).json(readClothes);
}
async function getIonetem(req, res) {
  const id = parseInt(req.params.id);
  let readoneClothes = await foodcollection.getItem(id);
  res.status(200).json(readoneClothes);
}
async function addItem(req, res) {
  let data = req.body;
  console.log(data);
  let addOne = await foodcollection.create(data);
  res.status(201).json(addOne);
}
async function getOneItem(req, res) {
  const id = parseInt(req.params.id);
  const item = await foodcollection.getItem(id);
  res.status(200).json(item);
}
// async function updataItemm(req, res) {
//   const id = parseInt(req.params.id);
//   const obj = req.body;
//   let updatedItem = await foodcollection.updateItem(id, obj);
//   res.status(201).json(updatedItem);
// }

async function deleteItem(req, res) {
  const id = parseInt(req.params.id);
  let deleteclothes = await foodcollection.delete(id);
  res.status(204).json(deleteclothes);
}
module.exports = foodrouter;
