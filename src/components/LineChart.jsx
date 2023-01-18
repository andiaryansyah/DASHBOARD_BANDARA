import React from "react";
import {
  LineChart as LChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  // Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Accordion from "./Accordion";
import { RiBarChart2Line } from "react-icons/ri";

const LineChart = ({ data, title }) => {
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
      <ResponsiveContainer width="90%" height="90%" aspect={2}>
        <LChart
          width={600}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 100,
            left: 10,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" interval={0} angle={30} dx={0} textAnchor="start" height={170}  />
          <YAxis />
          <Tooltip contentStyle={{backgroundColor:"#8884d8", color:"#fff"}} itemStyle={{color:"#fff"}} cursor={false} />
          {/* <Legend /> */}
          <Line
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            dot={{fill:"#2e4355", stroke:"#8884d8", strokeWidth: 2, r: 5}}
            activeDot={{ r: 8 }}
          />
          {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
        </LChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChart;
