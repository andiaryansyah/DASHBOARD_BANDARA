import React from 'react'
import { RiBarChart2Line } from 'react-icons/ri';
import { PieChart as PChart, Pie, Cell, Legend, Tooltip, Brush } from 'recharts';
import Accordion from './Accordion';


const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const PieChart = ({data, title, COLORS}) => {
  return (
    <>
    <div>
    {/* <h1 className={className}>{title}</h1> */}
    <Accordion title={title} icons={<RiBarChart2Line className="ml-3"/>} content={data.map((item) => ( 
      <div>{item.name} = {item.value}</div>
    ))}/>
    <PChart width={400} height={400} className="m-auto">
    <Brush dataKey="name" height={30} stroke="#8884d8" />
      <Pie
        data={data}
        cx={200}
        cy={200}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={120}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    <Tooltip />
    <Legend />
    </PChart>
    </div>
    </>
  )
}

export default PieChart