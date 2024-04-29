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

interface AreaChartProps {
  data: {
    month: string;
    calls: number;
  }[];
}

export function AreaChartComponent({ data }: AreaChartProps) {
  return (
    <Card className="p-2 lg:p-6 w-full lg:w-2/3 h-full dark:shadow-none shadow-md shadow-slate-400">
      <CardHeader>
        <CardTitle className="text-base lg:text-lg font-semibold">Call Volume</CardTitle>
      </CardHeader>
      <CardContent className="py-6">
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart
            data={data}
            margin={{
              top: 0,
              right: 10,
              left: 0,
              bottom: 0,
            }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="calls" stroke="#8884d8" fill="#5684FC" />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
