import { useEffect, useState } from "react";
import PageHeader from "./components/PageHeader";
import PageTitle from "./components/PageTitle";
import Summary from "./components/Summary";
import TableRow from "./components/TableRow";
import "./style.scss";
import EmptyCart from "./components/EmptyCart";
import api from "./provider";

const App = () => {
  const [cart, setCart] = useState([]);

  interface Item {
    id: number;
    title: string;
    description: string;
    price: number;
    qty: number;
  }

  const fetchData = async () => {
    try {
      const response = await api.get("/cart");
      setCart(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  function randomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  const product1 = {
    title: "Boneca Inflável",
    description: "Boca Macia",
    price: randomNumber(231, 1234),
    qty: 1,
  };

  const handleAddItem = async () => {
    await api
      .post(`/cart`, product1)
      .then((response) => {
        fetchData();
        console.log(response);
      })
      .catch((error) => {
        console.log("Falha ao enviar dados ", error);
      });
  };

  const handleRemoveItem = (item: Item) => {
    api
      .delete(`/cart/${item.id}`)
      .then((response) => {
        console.log(response);
        fetchData();
      })
      .catch((error) => {
        console.log("Erro ao deletar Produto! ", error);
      });
  };

  const handleUpdateItem = async (item: Item, action: string) => {
    console.log({ item });
    let newQty = item.qty;

    if (action === "decrease") {
      if (newQty <= 1) {
        handleRemoveItem(item);
      }
      newQty -= 1;
    }

    if (action === "increase") {
      newQty += 1;
    }

    const newData = { ...item, qty: newQty };

    await api.put(`/cart/${item.id}`, newData).then(() => {
      fetchData();
    });
  };

  return (
    <>
      {!cart.length ? (
        <EmptyCart />
      ) : (
        <>
          <PageHeader headerText="Lojas Tabajaras" />
          <main>
            <PageTitle title="Meu carrinho" />
            <div className="content">
              <section>
                <button onClick={handleAddItem}>Adicionar Item </button>
                <table>
                  <thead>
                    <tr>
                      <th>Produto</th>
                      <th>Preço</th>
                      <th>Quantidade</th>
                      <th>Total</th>
                      <th>-</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item: Item) => (
                      <TableRow
                        key={item.id}
                        data={item}
                        handleRemoveItem={handleRemoveItem}
                        handleUpdateItem={handleUpdateItem}
                      />
                    ))}
                  </tbody>
                </table>
              </section>
              <aside>
                <Summary />
              </aside>
            </div>
          </main>
        </>
      )}
    </>
  );
};
export default App;
