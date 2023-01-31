import { Chart, Interval, Tooltip } from 'bizcharts';
import React, { useState } from "react";

const data = [
  { category: 'CRACKERS', sales: 38 },
  { category: 'BARS', sales: 52 },
  { category: 'FROZEN', sales: 61 },
  { category: 'VEGGIES', sales: 45 },
  { category: 'VEGAN', sales: 4},
];


export default function BasicBar() {
  return <Chart height={400} autoFit data={data} interactions={['active-region']} padding={[30, 30, 30, 50]} >
    <Interval position="category*sales" />
    <Tooltip shared />
  </Chart>
}
