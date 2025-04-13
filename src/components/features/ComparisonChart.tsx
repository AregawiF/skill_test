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
  DotProps, // Import DotProps type
} from 'recharts';

// Sample data structure - replace with actual data
const data = [
  { percentile: 0, students: 1 },
  { percentile: 10, students: 2 },
  { percentile: 20, students: 5 },
  { percentile: 30, students: 8 }, // User's percentile approx location
  { percentile: 40, students: 15 },
  { percentile: 50, students: 30 },
  { percentile: 60, students: 55 },
  { percentile: 70, students: 70 },
  { percentile: 80, students: 85 },
  { percentile: 88, students: 90 }, // Approx peak
  { percentile: 90, students: 88 }, // Added point for the peak label
  { percentile: 95, students: 60 },
  { percentile: 100, students: 20 },
];

// Find data point for the peak label (adjust logic if needed)
const peakDataPoint = data.find(p => p.percentile === 90); // Example: find point at 90%ile
const peakLabelValue = peakDataPoint ? `${peakDataPoint.percentile}` : '';
// The screenshot shows "number of students: 4", let's fake that for the label for now
const peakLabelStudents = 4;

interface ComparisonChartProps {
  userPercentile: number;
}

// Custom Tooltip Component
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

// Custom Dot for the user's percentile
const CustomUserDot: React.FC<DotProps & { value?: number }> = (props) => {
  const { cx, cy, stroke, fill, value } = props; // value is automatically passed by Recharts

  // Only render if coordinates are valid numbers
   if (typeof cx !== 'number' || typeof cy !== 'number') {
    return null;
  }

  // Check if this dot corresponds to the user's percentile (or close enough)
  // Note: Recharts might not place a dot *exactly* at userPercentile if it's between data points.
  // This ReferenceDot approach below is usually more reliable for a specific highlight.
  // We'll keep this simple and rely on ReferenceDot mainly.
  // Returning null here to avoid duplicate dots if ReferenceDot is used.
  return null;

   // If you wanted *all* dots styled differently:
  // return <circle cx={cx} cy={cy} r={5} stroke={stroke} fill={fill} strokeWidth={2} />;
};


const ComparisonChart: React.FC<ComparisonChartProps> = ({ userPercentile }) => {
   // Find the approximate student count for the user's percentile for the ReferenceDot
   // This might need interpolation if the exact percentile isn't in the data
   const userPoint = data.find(p => p.percentile === userPercentile) ??
                     data.reduce((prev, curr) => Math.abs(curr.percentile - userPercentile) < Math.abs(prev.percentile - userPercentile) ? curr : prev); // Find closest point

  return (
    // Set aspect ratio for better responsiveness instead of fixed height
    <ResponsiveContainer width="100%" aspect={2.5}>
      <LineChart
        data={data}
        margin={{
          top: 20, // Make space for peak label
          right: 20,
          left: 0,
          bottom: 5,
        }}
      >
        {/* Removed CartesianGrid to match screenshot */}
        <XAxis
          dataKey="percentile"
          type="number"
          domain={[0, 100]}
          tick={{ fontSize: 10, fill: '#6B7280' }} // Style tick labels
          axisLine={false} // Hide axis line
          tickLine={false} // Hide tick lines
          ticks={[0, 25, 50, 75, 100]} // Specify ticks
          tickFormatter={(value) => `${value}`} // Display as number
        />
        <YAxis hide={true} domain={[0, 'dataMax + 10']} /> {/* Hide Y axis, add padding */}

        <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#cbd5e1', strokeWidth: 1, strokeDasharray: '3 3' }}/>

        <Line
          type="monotone" // Smooth curve
          dataKey="students"
          stroke="#8884d8" // Line color (purpleish)
          strokeWidth={2}
          dot={false} // Hide default dots on the line itself
          activeDot={{ r: 6, fill: '#8884d8', stroke: '#ffffff', strokeWidth: 2 }} // Dot on hover
        />

        {/* Highlight user's percentile */}
        {userPoint && typeof userPoint.students === 'number' && (
          <ReferenceDot
            x={userPercentile}
            y={userPoint.students} // Use interpolated/closest Y value
            r={6} // Radius of the dot
            fill="#6366F1" // User dot color (e.g., indigo-500)
            stroke="#ffffff"
            strokeWidth={2}
            isFront={true} // Ensure it's drawn on top
          >
             <Label value="your percentile" position="top" offset={10} fontSize={10} fill="#6366F1" />
          </ReferenceDot>
        )}

        {/* Label for the peak */}
        {peakDataPoint && typeof peakDataPoint.students === 'number' && (
          <ReferenceDot
            x={peakDataPoint.percentile}
            y={peakDataPoint.students}
            r={0} // Make the dot invisible if only label is needed
            isFront={true}
          >
            <Label position="top" offset={5} fontSize={10} fill="#4B5563">
              {/* Custom label content */}
              <text x={0} y={0} dy={-4} textAnchor="middle">
                 {/* Position text using SVG attributes */}
                <tspan x={0} dy="0em" fontWeight="bold">{peakLabelValue}</tspan>
                <tspan x={0} dy="1.2em" fontSize="9">{`number of student : ${peakLabelStudents}`}</tspan>
              </text>
            </Label>
          </ReferenceDot>
        )}

      </LineChart>
    </ResponsiveContainer>
  );
};

export default ComparisonChart;