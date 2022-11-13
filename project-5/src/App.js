import React, { useEffect } from "react";
import useHttp from "./hooks/use-http";
import DATABASE_URL from "./resources/database-url";

import AvailableMeals from "./components/Meals/AvailableMeals";
import MealsSummary from "./components/Meals/MealsSummary";
import Header from "./components/Header/Header";
import { CartContextProvider } from "./store/cart-context";

function App() {
  const { isLoading, error, sendRequest } = useHttp();

  useEffect(() => {
    sendRequest({
      url: DATABASE_URL,
    });
  }, []);

  return (
    <CartContextProvider>
      <Header />
      <MealsSummary />
      <AvailableMeals />
    </CartContextProvider>
  );
}

export default App;
