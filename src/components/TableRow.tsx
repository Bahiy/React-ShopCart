type Item = {
  data: {
    title: string;
    price: number;
    description: string;
    qty: number;
    id: number;
  };
  handleRemoveItem: (data: object) => void;
  handleUpdateItem: (data: object, action: string) => void;
};

const TableRow = ({ data, handleRemoveItem, handleUpdateItem }: Item) => {
  return (
    <tr>
      <td>
        <div className="product">
          <img src="https://picsum.photos/100/120" alt="" />
          <div className="info">
            <div className="name">{data.title}</div>
            <div className="category">{data.description}</div>
          </div>
        </div>
      </td>
      <td>R$ {data.price}</td>
      <td>
        <div className="qty">
          <button
            onClick={() => {
              handleUpdateItem(data, "decrease");
            }}
          >
            <i className="bx bx-minus"></i>
          </button>
          <span>{data.qty}</span>
          <button
            onClick={() => {
              handleUpdateItem(data, "increase");
            }}
          >
            <i className="bx bx-plus"></i>
          </button>
        </div>
      </td>
      <td>R$ {data.price * data.qty}</td>
      <td>
        <button
          className="remove"
          onClick={() => {
            handleRemoveItem(data);
          }}
        >
          <i className="bx bx-x"></i>
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
