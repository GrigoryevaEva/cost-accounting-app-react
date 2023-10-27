import Card from "../../UI/Card";

function CostDate(props) {
  const month = props.date.toLocaleString("en-En", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("en-En", { day: "2-digit" });

  return (
    <Card className="cost-item__date">
      <span>{month}</span> <span className="cost-item__date-year">{year}</span>
      <span className="cost-item__date-day">{day}</span>
    </Card>
  );
}

export default CostDate;
