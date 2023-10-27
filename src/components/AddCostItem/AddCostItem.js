import React, { useState } from 'react';
import Card from "../UI/Card";
import Button from "../UI/Button";
import InputFields from "./InputFields";

function AddCostItem(props) {
  const button = (
    <Button onClick={handleOpenInputFields}>Add a new expense</Button>
  );

  const inputFields = (
    <InputFields
      onClick={handleCloseInputFields}
      onAddNewCostItem={handleAddNewCostItem}
    />
  );

  const [areaAddCostItem, setAreaAddCostItem] = useState(button);

  function handleOpenInputFields() {
    setAreaAddCostItem(inputFields);
  }

  function handleCloseInputFields() {
    setAreaAddCostItem(button);
  };

  function handleAddNewCostItem (newCost) {
    const costItemData = {
      ...newCost,
      id: Math.random().toString(),
    };
    props.onAddNewCostItem(costItemData);
    setAreaAddCostItem(button);
  };

  return (
    <Card className="add-cost-item">
      {areaAddCostItem}
    </Card>
  );
}

export default AddCostItem;
