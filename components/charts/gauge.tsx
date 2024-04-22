"use client";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface DataItem {
  name: string;
  value: number;
  color: string;
}

const RADIAN = Math.PI / 180;
const data = [
  { name: 'A', value: 80, color: '#ff0000' },
  { name: 'B', value: 45, color: '#00ff00' },
  { name: 'C', value: 25, color: '#0000ff' },
];

let width = typeof window !== 'undefined' ? window.innerWidth : 0;

if (typeof window !== 'undefined') {
    window.onresize = () => {
        width = window.innerWidth;
    };
}
const cx = width > 2000 ? 225 : 141;
const cy = 220;
const iR = width > 2000 ? 100 : 70;
const oR = width > 2000 ? 200 : 130;
const value = 50;

const needle = (value: number, data: any[], cx: number, cy: number, iR: number, oR: number, color: string | undefined) => {
  let total = 0;
  data.forEach((v) => {
    total += v.value;
  });
  const ang = 180.0 * (1 - value / total);
  const length = (iR + 2 * oR) / 3;
  const sin = Math.sin(-RADIAN * ang);
  const cos = Math.cos(-RADIAN * ang);
  const r = 5;
  const x0 = cx + 5;
  const y0 = cy + 5;
  const xba = x0 + r * sin;
  const yba = y0 - r * cos;
  const xbb = x0 - r * sin;
  const ybb = y0 + r * cos;
  const xp = x0 + length * cos;
  const yp = y0 + length * sin;

  return [
    <circle key={null} cx={x0} cy={y0} r={r} fill={color} stroke="none" />,
    <path key={null} d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`} stroke="#none" fill={color} />,
  ];
};


export function GaugeChart() {
  return (
    <Card className="p-2 lg:p-6 w-full lg:w-1/3 h-full dark:shadow-none shadow-md shadow-slate-400">
      <CardHeader>
        <CardTitle className="text-base lg:text-lg font-semibold">Call Volume</CardTitle>
      </CardHeader>
      <CardContent className="py-6">
        <ResponsiveContainer width="100%" height={250}>
          <PieChart margin={{
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
            }}>
            <Pie
              dataKey="value"
              startAngle={180}
              endAngle={0}
              data={data}
              cx={cx}
              cy={cy}
              innerRadius={iR}
              outerRadius={oR}
              fill="#8884d8"
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
            {needle(value, data, cx, cy, iR, oR, '#d0d000')}
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
