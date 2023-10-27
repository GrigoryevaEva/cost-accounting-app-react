function CostFilterMenu(props) {

  function handelYearChange(event) {
    props.onChangeYear(event.target.value);
  }

  return (
    <select
      className="cost-filter__menu"
      value={props.selectedYear}
      onChange={handelYearChange}
    >
      <option value={2023}>2023</option>
      <option value={2022}>2022</option>
      <option value={2021}>2021</option>
      <option value={2020}>2020</option>
    </select>
  );
}

export default CostFilterMenu;
