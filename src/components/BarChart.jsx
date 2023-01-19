import React from "react";
import {
  BarChart as CBar,
  Bar,
  XAxis,
  YAxis,
  ReferenceLine,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  // Brush,
} from "recharts";

const BarChart = ({ data, setAngle, anchor }) => {
  return (
    <ResponsiveContainer width="90%" height="90%" aspect={1.7}>
      <CBar
        width={0}
        height={500}
        data={data}
        margin={{
          top: 20,
          right: 0,
          left: 10,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend verticalAlign="top" wrapperStyle={{ lineHeight: "40px" }} />
        <ReferenceLine y={0} stroke="#000" />
        {/* <Brush dataKey="name" height={30} stroke="#8884d8"/> */}
        <Bar dataKey="Sangat Memadai" fill="#3E79F7" />
        <Bar dataKey="Cukup Memadai" fill="#25C32F" />
        <Bar dataKey="Memadai" fill="#E8C719" />
        <Bar dataKey="Kurang Memadai" fill="#E89319" />
        <Bar dataKey="Tidak Memadai" fill="#AA0808" />
        <XAxis
          dataKey="name"
          interval={0}
          angle={setAngle}
          textAnchor={anchor}
          height={170}
        />
        <YAxis />
      </CBar>
    </ResponsiveContainer>
  );
};

export default BarChart;
