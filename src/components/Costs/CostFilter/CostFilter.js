import CostFilterGraph from "./CostFilterGraph";
import CostFilterMenu from "./CostFilterMenu";

function CostFilter(props) {
  function handelYearChange(year) {
    props.onChangeYear(year);
  }

  const graphDataSets = [
    {
      label: "Jan",
      value: 0,
    },
    {
      label: "Feb",
      value: 0,
    },
    {
      label: "Mar",
      value: 0,
    },
    {
      label: "Apr",
      value: 0,
    },
    {
      label: "May",
      value: 0,
    },
    {
      label: "Jun",
      value: 0,
    },
    {
      label: "Jul",
      value: 0,
    },
    {
      label: "Aug",
      value: 0,
    },
    {
      label: "Sep",
      value: 0,
    },
    {
      label: "Oct",
      value: 0,
    },
    {
      label: "Nov",
      value: 0,
    },
    {
      label: "Dec",
      value: 0,
    },
  ];

  for (const cost of props.costs) {
    const costMonth = cost.date.getMonth();
    graphDataSets[costMonth].value += cost.price;
  }

  return (
    <div className="cost-filter">
      <div className="cost-filter__header">
        <label className="cost-filter__header-lable">Filter by year</label>
        <CostFilterMenu
          onChangeYear={handelYearChange}
          selectedYear={props.selectedYear}
        />
      </div>
      <CostFilterGraph dataSets={graphDataSets} />
    </div>
  );
}

export default CostFilter;
