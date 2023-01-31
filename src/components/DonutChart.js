import React from "react";
import { DonutChart } from "bizcharts";

const data = [
  {
    type: "Saurabh Mehndiratta",
    value: 27,
  },
  {
    type: "Niranjan Kumar",
    value: 25,
  },
  {
    type: "Kirubhahar Kannan",
    value: 18,
  },
  {
    type: "Hardeep Singh",
    value: 15,
  },
  {
    type: "Shravan Pai",
    value: 43,
  },
];

export default function AppUsageChart() {
  return (
    <DonutChart
      data={data || []}
      title={{
        visible: true,
        text: "App Usage",
      }}
      autoFit
      description={{
        visible: true,
        text: "Usage distribution in % by Users",
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
