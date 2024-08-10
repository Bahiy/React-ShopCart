const express = require("express");

// Response atráves de um middleware controller
const productsController = require("./controllers/productsController");

// Gerenciador de rotas
const router = express.Router();

// Vai responder com uma função importada de taskController, sendo ele um objeto, é necessário acessar seu componente
router.get("/cart", productsController.getAll);

// Responde com a criação de um novo produto
router.post("/cart", productsController.createProduct);

// Deleta um produto passando o parametro id na URL
router.delete("/cart/:id", productsController.deleteProduct);

// Atualiza um produto passando o parametro id na URL
router.put("/cart/:id", productsController.updateProduct);

module.exports = router;
