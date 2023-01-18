import React from "react";
import { RiBarChart2Line } from "react-icons/ri";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ReferenceLine,
  CartesianGrid,
  Tooltip,
  // Legend,
  ResponsiveContainer,
  // Brush,
} from "recharts";
import Accordion from "./Accordion";

const BarChart2 = ({ data, title, setAngle, anchor }) => {
  return (
    <>
      <Accordion
        title={title}
        icons={<RiBarChart2Line className="ml-3" />}
        content={data.map((item) => (
          <div>
            {item.name} = {item.value}
          </div>
        ))}
      />

      <ResponsiveContainer width="90%" height="90%" aspect={1.5}>
        <BarChart
          width={500}
          height={500}
          data={data}
          margin={{
            top: 40,
            right: 50,
            left: 10,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          {/* <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} /> */}
          <ReferenceLine y={0} stroke="#000" />
          {/* <Brush dataKey="label" height={30} stroke="#8884d8"/> */}
          <Bar dataKey="value" fill="#0088FE" barSize={45} />
          <XAxis
            dataKey="name"
            interval={0}
            angle={setAngle}
            textAnchor={anchor}
            height={220}
          />
          <YAxis />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default BarChart2;
