import { useEffect } from "react";
import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import DATABASE_URL from "./resources/database-url";

function App() {
  const cartIsVisible = useSelector((state) => state.cart.isVisible);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    fetch(DATABASE_URL + "cart.json", {
      method: "PUT",
      body: JSON.stringify(cart),
    });
  }, [cart]);

  return (
    <Layout>
      {cartIsVisible && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;

// Todo:
