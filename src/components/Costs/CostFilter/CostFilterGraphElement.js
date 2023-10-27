
function CostFilterGraphElement(props) {

  let barFillHeight = '0%';

  if (props.maxValue > 0) {
    barFillHeight = Math.round(props.value / props.maxValue * 100) + '%';
  }

  return (
    <div className="cost-filter-graph__element">
      <div className="cost-filter-graph__element-inner">
        <div
          className="cost-filter-graph__element-fill"
          style={{
            height: barFillHeight,
          }}>
        </div>
      </div>
      <span className="cost-filter-graph__element-month">{props.label}</span>
    </div>
  );
}

export default CostFilterGraphElement;
