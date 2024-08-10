const productsModel = require("../models/productsModel");

const getAll = async (_request, response) => {
  const tasks = await productsModel.getAll();

  return response.status(200).json(tasks);
};

const createProduct = async (request, response) => {
  const newProduct = await productsModel.createProduct(request.body);
  console.log(response);
  return response.status(201).json(newProduct);
};

const deleteProduct = async (request, response) => {
  const { id } = request.params;

  await productsModel.deleteProduct(id);
  return response.status(204).json();
};
const updateProduct = async (request, response) => {
  const { id } = request.params;

  await productsModel.updateProduct(id, request.body);
  return response.status(204).json();
};

module.exports = {
  getAll,
  createProduct,
  deleteProduct,
  updateProduct,
};
