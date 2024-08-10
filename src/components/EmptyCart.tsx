import PageHeader from "./PageHeader";
import PageTitle from "./PageTitle";

const EmptyCart = () => {
  return (
    <>
      <PageHeader headerText="Lojas Tabajaras" />
      <main>
        <PageTitle title="Carrinho Vazio" />
        <div className="content">
          <section>
            <div style={{ textAlign: "center" }}>
              <h1>Que tal adicionar dar uma olhadinha em nosso site?</h1>
            </div>
          </section>
        </div>
        <div style={{display:"flex", justifyContent:"center"}}>
          <img
            width={"400"}
            src="https://i.pinimg.com/originals/bc/bd/99/bcbd99c43aea08b85d3c3a6b80a47b56.png"
            alt=""
          />
        </div>
      </main>
    </>
  );
};
export default EmptyCart;
