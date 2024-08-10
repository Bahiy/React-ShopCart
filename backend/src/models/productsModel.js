const connection = require("./connection");

// Função para retornar todos as tasks
const getAll = async () => {
  // Uma variavel entre chaves siginfica que vamos utulizar a primeira posição desse array
  const [products] = await connection.execute("SELECT * FROM products");
  return products;
};

// Função que vai criar uma nova task no banco de dados
const createProduct = async (product) => {
  const { title, description, price, qty } = product;
  const query =
    "INSERT INTO products(title, description, price, qty) VALUES (?,?,?,?)";
  const [createdProduct] = await connection.execute(query, [
    title,
    description,
    price,
    qty,
  ]);
  return createdProduct;
};

// Função para deletar uma task
const deleteProduct = async (id) => {
  const query = "DELETE FROM products WHERE id = ?";
  const removedProducts = await connection.execute(query, [id]);
  return removedProducts;
};

const updateProduct = async (id, item) => {
  const { qty } = item;

  const query = "UPDATE products SET qty = ? WHERE id = ?";
  const updatedItem = await connection.execute(query, [qty, id]);

  return updatedItem;
};

module.exports = {
  getAll,
  createProduct,
  deleteProduct,
  updateProduct,
};
