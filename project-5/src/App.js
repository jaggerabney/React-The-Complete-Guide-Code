import React, { useEffect, useState } from "react";
import useHttp from "./hooks/use-http";
import DATABASE_URL from "./resources/database-url";

import AvailableMeals from "./components/Meals/AvailableMeals";
import MealsSummary from "./components/Meals/MealsSummary";
import Header from "./components/Header/Header";
import { CartContextProvider } from "./store/cart-context";

function App() {
  const [mealsData, setMealsData] = useState([]);
  const { isLoading, error, sendRequest } = useHttp();

  useEffect(() => {
    sendRequest(
      {
        url: DATABASE_URL + "dummy-meals.json",
      },
      setMealsData
    );
  }, [sendRequest]);

  return (
    <CartContextProvider meals={mealsData}>
      <Header />
      <MealsSummary />
      <AvailableMeals
        meals={mealsData}
        loading={isLoading}
        error={error}
        onFetch={sendRequest}
      />
    </CartContextProvider>
  );
}

export default App;
