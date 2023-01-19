import React from 'react'
import { RiBarChart2Line } from 'react-icons/ri';
import { PieChart, Pie, Tooltip, Cell, Brush, Legend } from "recharts";
import Accordion from './Accordion';

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const ShapePieChart = ({data, title}) => {
  return (
    <>
    <div>
    <Accordion title={title} icons={<RiBarChart2Line className="ml-3"/>} content={data.map((item, index) => ( 
      <div key={index}>{item.name} = {item.value}</div>
    ))}/>
    <PieChart width={400} height={400} className="m-auto">
    <Brush dataKey="name" height={30} stroke="#8884d8" />
      <Tooltip />
      <Pie
        data={data}
        cx={120}
        cy={200}
        innerRadius={60}
        outerRadius={120}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
      </Pie>
          <Legend verticalAlign="bottom" wrapperStyle={{ lineHeight: '20px' }} />
    </PieChart>
    </div>
    </>
  )
}

export default ShapePieChart