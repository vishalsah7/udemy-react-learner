import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value );  // map method returns an array,
  const totalMaximum = Math.max(...dataPointValues); // ... operator spreads the content of array into individual items
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          label={dataPoint.label}
          key={dataPoint.label}
          maxValue={totalMaximum}
        />
      ))}
    </div>
  );
};
export default Chart;