import CostFilterGraphElement from "./CostFilterGraphElement";
import Card from "../../UI/Card";

function CostFilterGraph(props) {

  const dataSetsValues = props.dataSets.map((dataSet) => dataSet.value);

  const maxMonthCosts = Math.max(...dataSetsValues);
  
  return (
    <Card className={"cost-filter-graph"}>
      {props.dataSets.map((dataSet) => (
        <CostFilterGraphElement
          key={dataSet.label}
          value={dataSet.value}
          maxValue={maxMonthCosts}
          label={dataSet.label}
        />
      ))}
    </Card>
  );
}

export default CostFilterGraph;
