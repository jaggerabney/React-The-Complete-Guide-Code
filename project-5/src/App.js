import React from "react";

import AvailableMeals from "./components/Meals/AvailableMeals";
import MealsSummary from "./components/Meals/MealsSummary";
import Header from "./components/UI/Header";
import { CartContextProvider } from "./store/cart-context";

function App() {
  return (
    <CartContextProvider>
      <Header />
      <MealsSummary />
      <AvailableMeals />
    </CartContextProvider>
  );
}

export default App;
