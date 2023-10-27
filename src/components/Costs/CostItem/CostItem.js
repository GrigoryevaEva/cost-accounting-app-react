import CostDate from "./CostDate";
import Card from "../../UI/Card";

function CostItem(props) {
  return (
    <li>
      <Card className="cost-item">
        <CostDate date={props.date} />
        <div className="cost-item__description">
          <h2 className="cost-item__title">{props.description}</h2>
          <div className="cost-item__price">
            <span>{props.price}</span>
          </div>
        </div>
      </Card>
    </li>
  );
}

export default CostItem;
