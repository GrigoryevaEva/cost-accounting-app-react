import React, { useState } from "react";
import CostFilter from "./CostFilter/CostFilter";
import Card from "../UI/Card";
import CostsList from "./CostsList";

function Costs(props) {
  const [selectedYear, setSelectedYear] = useState("2023");

  function handleChangeYear(year) {
    setSelectedYear(year);
  }


  const filtredCosts = props.costs.filter(c => {
    return c.date.getFullYear().toString() === selectedYear;
  })

    return (
      <Card className="costs">
        <CostFilter
          onChangeYear={handleChangeYear}
          selectedYear={selectedYear}
          costs={filtredCosts}
        />
        <CostsList costs={filtredCosts} />
      </Card>
    );
}

export default Costs;
