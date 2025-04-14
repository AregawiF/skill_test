"use client";

import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceDot,
  Label,
  DotProps, 
} from 'recharts';

const data = [
  { percentile: 0, students: 1 },
  { percentile: 10, students: 2 },
  { percentile: 20, students: 3 },
  { percentile: 30, students: 8 }, 
  { percentile: 40, students: 10 },
  { percentile: 45, students: 12 },
  { percentile: 50, students: 17 },
  { percentile: 55, students: 15 },
  { percentile: 60, students: 10 },
  { percentile: 65, students: 6 },
  { percentile: 70, students: 4 },
  { percentile: 80, students: 3 },
  { percentile: 90, students: 4 }, 
  { percentile: 95, students: 2 },
  { percentile: 100, students: 1 },
];

const peakDataPoint = data.find(p => p.percentile === 90); 
const peakLabelValue = peakDataPoint ? `${peakDataPoint.percentile}` : '';
const peakLabelStudents = 4;

interface ComparisonChartProps {
  userPercentile: number;
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 shadow rounded border border-gray-200 text-sm">
        <p className="font-semibold">{`Percentile: ${label}%`}</p>
        <p className="text-gray-600">{`No. of Students: ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

const CustomUserDot: React.FC<DotProps & { value?: number }> = (props) => {
  const { cx, cy, stroke, fill, value } = props; 
  if (typeof cx !== 'number' || typeof cy !== 'number') {
    return null;
  }

  return null;
};


const ComparisonChart: React.FC<ComparisonChartProps> = ({ userPercentile }) => {
  const userPoint = data.find(p => p.percentile === userPercentile) ??
    data.reduce((prev, curr) => Math.abs(curr.percentile - userPercentile) < Math.abs(prev.percentile - userPercentile) ? curr : prev); 

  return (
    <ResponsiveContainer width="100%" aspect={2.5}>
      <LineChart
        data={data}
        margin={{
          top: 20, 
          right: 20,
          left: 0,
          bottom: 5,
        }}
      >
        <XAxis
          dataKey="percentile"
          type="number"
          domain={[0, 100]}
          tick={{ fontSize: 15, fill: '#000000' }} 
          ticks={[0, 25, 50, 75, 100]} 
          tickFormatter={(value) => `${value}`} 
        />
        <YAxis hide={true} domain={[0, 'dataMax + 10']} />

        <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#cbd5e1', strokeWidth: 1, strokeDasharray: '3 3' }} />

        <Line
          type="monotone" // Smooth curve
          dataKey="students"
          stroke="#8884d8" // Line color (purpleish)
          strokeWidth={2}
          activeDot={{ r: 6, fill: '#8884d8', stroke: '#ffffff', strokeWidth: 2 }} // Dot on hover
        />

        {userPoint && typeof userPoint.students === 'number' && (
          <ReferenceDot
            x={userPercentile}
            y={userPoint.students} 
            r={6} // Radius of the dot
            fill="#6366F1" // User dot color (indigo-500)
            stroke="#ffffff"
            strokeWidth={2}
            isFront={true} 
          >
            <Label value="your percentile" position="top" offset={10} fontSize={15} fill="#6366F1" />
          </ReferenceDot>
        )}

      </LineChart>
    </ResponsiveContainer>
  );
};

export default ComparisonChart;