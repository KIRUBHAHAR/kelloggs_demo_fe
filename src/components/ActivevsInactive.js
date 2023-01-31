import React from "react";
import { DonutChart } from "bizcharts";

const data = [
  {
    type: "MAU",
    value: 12,
  },
  {
    type: "Inactive Users",
    value: 23,
  },
];

export default function ActivevsInactive() {
  return (
    <DonutChart
      data={data || []}
      title={{
        visible: true,
        text: "Active vs Inactive Users",
      }}
      autoFit
      description={{
        visible: true,
        text: "Active X Inactive Users in %",
      }}
			height={350}
      radius={0.8}
      padding="auto"
      angleField="value"
      colorField="type"
      pieStyle={{ stroke: "white", lineWidth: 4 }}
    />
  );
}
