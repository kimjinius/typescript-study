import React from 'react';
import Chart, { ReactGoogleChartProps, ReactGoogleChartEvent } from 'react-google-charts';
import './CircleChart.css'

interface MyComponentProps {
  category: string,
  value: number;
  color : string
}

const CircleChart: React.FC<MyComponentProps> = ({ category, value, color }) => {

  const data = [
    ["Category", "Value"],
    ["", value],
    ["", 100 - value],
  ];

  const options = {
    pieHole: 0.6,
    is3D: false,
    pieSliceText: "none",
    legend: { position: 'none' },
    slices: {
        0: { color: color },
        1: { color: "#eee" },
      },
  };
  

  return ( 
    <div className="donutchart">
      <div className="category_label">{category}</div>
          <Chart className="chart"
              chartType="PieChart"
              data={data}
              options={options}
          />
      <div id="labelOverlay">
        <p className="used-size">{value}%</p>
      </div>
    </div>
  );
};

export default CircleChart;
