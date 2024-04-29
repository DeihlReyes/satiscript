"use client";

import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Legend,
  Line,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface LineChartComponentProps {
  data: {
    month: string;
    satisfied: number;
    dissatisfied: number;
  }[];
}

export function  LineChartComponent({ data }: LineChartComponentProps) {
  return (
    <Card className="p-2 lg:p-6 w-full h-full dark:shadow-none shadow-md shadow-slate-400">
      <CardHeader>
        <CardTitle className="text-base lg:text-lg font-semibold">Performance Trend</CardTitle>
      </CardHeader>
      <CardContent className="py-6">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={data}
            margin={{
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="satisfied" stroke="#5BC553" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="dissatisfied" stroke="#DC403C" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
