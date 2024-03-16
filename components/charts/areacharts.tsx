"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
  {
    month: "January",
    calls: 412,
  },
  {
    month: "February",
    calls: 125,
  },
  {
    month: "March",
    calls: 532,
  },
  {
    month: "April",
    calls: 153,
  },
  {
    month: "May",
    calls: 231,
  },
  {
    month: "June",
    calls: 312,
  },
];

export function AreaChartComponent() {
  return (
    <Card className="p-6 w-2/3 h-full shadow-md shadow-slate-200">
      <CardHeader>
        <CardTitle>Call Volume</CardTitle>
      </CardHeader>
      <CardContent className="py-6">
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="calls" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
