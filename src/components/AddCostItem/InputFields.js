import React, { useState } from "react";
import Button from "../UI/Button";
import Container from "../UI/Container";
import InputField from "./InputField";

function InputFields(props) {
  const [inputTitle, setInputTitle] = useState("");
  const [inputPrice, setInputPrice] = useState("");
  const [inputDate, setInputDate] = useState("");

  function handleTitleChange(event) {
    setInputTitle(event.target.value);
  }
  function handlePriceChange(event) {
    setInputPrice(event.target.value);
  }
  function handleDateChange(event) {
    setInputDate(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const costItemData = {
      date: new Date(inputDate),
      title: inputTitle,
      price: inputPrice,
    };

    props.onAddNewCostItem(costItemData);
    setInputTitle("");
    setInputPrice("");
    setInputDate("");
  }

  return (
    <form className="add-cost-item__form" onSubmit={handleSubmit}>
      <Container>
        <InputField
          title={"Title"}
          placeholder={"Table"}
          type={"text"}
          onChange={handleTitleChange}
          value={inputTitle}
        />
        <InputField
          className={"input-field-new-cost-item__input_price"}
          title={"Price"}
          placeholder={"50"}
          type={"number"}
          min={"1"}
          onChange={handlePriceChange}
          value={inputPrice}
        />
        <InputField
          className={"input-field-new-cost-item__input_date"}
          title={"Date"}
          type={"date"}
          min={"2019-01-01"}
          onChange={handleDateChange}
          value={inputDate}
        />
      </Container>
      <Container>
        <Button onClick={props.onClick}>Cancel</Button>
        <Button type={"submit"}>Add the expense</Button>
      </Container>
    </form>
  );
}

export default InputFields;
