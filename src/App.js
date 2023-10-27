import React, { useState } from "react";
import Costs from "./components/Costs/Costs";
import AddCostItem from "./components/AddCostItem/AddCostItem";

import "./index.scss";

const INITIAL_COSTS = [
  {
    id: "c1",
    date: new Date(2023, 2, 12),
    title: "Movie",
    price: 10,
  },
  {
    id: "c2",
    date: new Date(2022, 9, 25),
    title: "Macbook",
    price: 1230,
  },
  {
    id: "c3",
    date: new Date(2021, 3, 11),
    title: "Rent",
    price: 600,
  },
  {
    id: "c4",
    date: new Date(2023, 4, 12),
    title: "Gym membership",
    price: 99.99,
  },
  {
    id: "c5",
    date: new Date(2022, 6, 25),
    title: "Case for documents",
    price: 560,
  },
  {
    id: "c6",
    date: new Date(2021, 11, 11),
    title: "Restaurant",
    price: 336.58,
  },
];

function App() {
  const [costs, setCosts] = useState(INITIAL_COSTS);

  function handleAddNewCostItem(cost) {
    setCosts((prevCosts) => {
      return [cost, ...prevCosts];
    });
  }

  return (
    <div className="container-main">
      <AddCostItem onAddNewCostItem={handleAddNewCostItem} />
      <Costs costs={costs} />
    </div>
  );
}

export default App;
