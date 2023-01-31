import React from "react";
import {
  G2,
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Label,
  Legend,
  View,
  Annotation,
  Shape,
  Facet,
  Util,
  Slider,
} from "bizcharts";

const data = [
  {
    date: "01-01-2023",
    user: "Logged in User",
    revenue: 7,
  },
  {
    date: "01-01-2023",
    user: "Active User",
    revenue: 5,
  },
  {
    date: "02-01-2023",
    user: "Logged in User",
    revenue: 14,
  },
  {
    date: "02-01-2023",
    user: "Active User",
    revenue: 5,
  },
  {
    date: "03-01-2023",
    user: "Logged in User",
    revenue: 10,
  },
  {
    date: "03-01-2023",
    user: "Active User",
    revenue: 9,
  },
  {
    date: "04-01-2023",
    user: "Logged in User",
    revenue: 20,
  },
  {
    date: "04-01-2023",
    user: "Active User",
    revenue: 18,
  },
  {
    date: "05-01-2023",
    user: "Logged in User",
    revenue: 18,
  },
  {
    date: "05-01-2023",
    user: "Active User",
    revenue: 12,
  },
  {
    date: "06-01-2023",
    user: "Logged in User",
    revenue: 16,
  },
  {
    date: "06-01-2023",
    user: "Active User",
    revenue: 4,
  },
  {
    date: "07-01-2023",
    user: "Logged in User",
    revenue: 25,
  },
  {
    date: "07-01-2023",
    user: "Active User",
    revenue: 17,
  },
  {
    date: "08-01-2023",
    user: "Logged in User",
    revenue: 26,
  },
  {
    date: "08-01-2023",
    user: "Active User",
    revenue: 16,
  },
  {
    date: "09-01-2023",
    user: "Logged in User",
    revenue: 23,
  },
  {
    date: "09-01-2023",
    user: "Active User",
    revenue: 14,
  },
  {
    date: "10-01-2023",
    user: "Logged in User",
    revenue: 18,
  },
  {
    date: "10-01-2023",
    user: "Active User",
    revenue: 10,
  },
  {
    date: "11-01-2023",
    user: "Logged in User",
    revenue: 13,
  },
  {
    date: "11-01-2023",
    user: "Active User",
    revenue: 6,
  },
  {
    date: "12-01-2023",
    user: "Logged in User",
    revenue: 9,
  },
  {
    date: "12-01-2023",
    user: "Active User",
    revenue: 6,
  },
];
const cols = {
  date: {
    range: [0.1, 0.9],
  },
  revenue: {
    min: 0,
  },
};

export default function AdoptionTrend() {
  return (
    <div style={{ padding: "20px" }}>
      <Chart height={400} data={data} scale={cols} autoFit>
        <Legend position="top-left" />
        <Axis name="date" />
        <Axis
          name="revenue"
          label={{
            formatter: (val) => `${val}`,
          }}
        />
        <Tooltip
          crosshairs={{
            type: "y",
          }}
        />
        <Geom type="line" position="date*revenue" size={2} color={"user"} />
        <Geom
          type="point"
          position="date*revenue"
          size={4}
          shape={"circle"}
          color={"user"}
          style={{
            stroke: "#fff",
            lineWidth: 1,
          }}
        />
        {/** https://bizcharts.net/product/BizCharts4/category/62/page/108#text-1 */}

        {/* <Annotation.Text
          position={["50%", "50%"]}
          content="项目总数\n200"
          style={{ fill: "red" }}
        />
        <Annotation.DataRegion
          start={["Jun", 0]}
          end={["Jul", 0]}
          region={{ style: { fill: "#eee" } }}
          lineLength={0}
          text={{ style: { fill: "green" }, content: "Annotation.DataRegion" }}
        /> */}
        <Slider />
      </Chart>
    </div>
  );
}
