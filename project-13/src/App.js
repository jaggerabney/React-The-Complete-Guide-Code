import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

function App() {
  return (
    <Layout>
      <Cart />
      <Products />
    </Layout>
  );
}

export default App;

// Todo:

// - My Cart button toggles Cart
// - Add to Cart adds one of that product to the Cart
//   - If a product already is in the Cart, this button should increase its quantity by one
// - The + and - buttons for products in the Cart work
//   - If done when there is only one of a product in the Cart,
//   - the product is removed from the Cart
