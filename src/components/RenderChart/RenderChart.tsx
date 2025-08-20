import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { time: "01:00", value: 0.12 },
  { time: "01:01", value: 0.15 },
  { time: "01:02", value: 0.11 },
  { time: "01:03", value: 0.17 },
  { time: "01:04", value: 0.13 },
];

const RenderChart = () => {
  return (
    <ResponsiveContainer width="100%" height={150}>
      <LineChart data={data}>
        <XAxis dataKey="time"/>
        <YAxis
          domain={[0, 0.4]}
          tickFormatter={(v: number) => `${(v * 1000).toFixed(0)}ms`}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "#1f2937",
            border: "none",
            borderRadius: "8px",
            color: "#fff",
            fontSize: "14px",
          }}
          formatter={(value: any) => {
            if (typeof value === "number") {
              return `${(value * 1000).toFixed(0)}ms`;
            }
            return value;
          }}
        />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#4ade80"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
export default RenderChart;
