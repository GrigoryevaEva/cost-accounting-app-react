import CostItem from "./CostItem/CostItem";

function CostsList(props) {
  
  let costsContent = (
    <div className="costs__not-cost-message">
      <span>There were no expenses this year</span>
    </div>
  );

  if (props.costs.length === 0) {
    return costsContent;
  }

  return (
    <ul className="costs__list">
      {
        props.costs.map((cost) => (
        <CostItem
          key={cost.id}
          date={cost.date}
          description={cost.title}
          price={cost.price}
        />
      ))
    }
    </ul>
  );
}

export default CostsList;
