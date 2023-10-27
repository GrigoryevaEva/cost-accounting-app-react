function InputField(props) {
  const inputClasess = `input-field-new-cost-item__input ${props.className}`;
  
  function getDateToday () {
    const dateNow = new Date();
    const month = dateNow.getMonth() + 1;
    const year = dateNow.getFullYear();
    const day = dateNow.toLocaleString("ru-Ru", { day: "2-digit" });

    return `${year}-${month}-${day}`;
  }

  return (
    <div className="input-field-new-cost-item">
      <label className="input-field-new-cost-item__title">{props.title}</label>
      <input
        className={inputClasess}
        placeholder={props.placeholder}
        type={props.type}
        min={props.min}
        max={getDateToday()}
        onChange={props.onChange}
        value={props.value}
      />
    </div>
  );
}

export default InputField;
