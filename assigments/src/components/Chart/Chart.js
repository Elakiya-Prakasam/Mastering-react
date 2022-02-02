import React from "react";
import ChartBar from "./ChartBar";
//import ExpensesChart from "../Expenses/ExpensesChart";
const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totatMaximum = Math.max(...dataPointValues);
  //console.log(totatMaximum);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totatMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;
