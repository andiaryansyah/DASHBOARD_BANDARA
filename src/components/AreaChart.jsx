import React from "react";
import {
  AreaChart as AChart,
  Area,
  Tooltip,
  // Legend,
  XAxis,
  CartesianGrid,
} from "recharts";
import Accordion from "./Accordion";
import { RiBarChart2Line } from "react-icons/ri";

const AreaChart = ({ data, title }) => {
  return (
    <div>
      {/* <h1 className="font-bold text-center mb-5">{title}</h1> */}
      <Accordion
        title={title}
        icons={<RiBarChart2Line className="ml-3" />}
        content={data.map((item) => (
          <div>
            {item.name} = {item.value}
          </div>
        ))}
      />
      <AChart
        width={600}
        height={400}
        data={data}
        margin={{
          top: 5,
          right: 80,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        {/* <Legend /> */}
        <XAxis
          dataKey="name"
          interval={0}
          angle={45}
          dx={0}
          textAnchor="start"
          height={200}
        />
        <Area
          type="monotone"
          dataKey="value"
          stroke="#8884d8"
          fill="#8884d8"
          dot={{ fill: "#2e4355", stroke: "#8884d8", strokeWidth: 2, r: 5 }}
        />
      </AChart>
    </div>
  );
};

export default AreaChart;
