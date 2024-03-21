"use client";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const RADIAN = Math.PI / 180;
const data = [
  { name: 'A', value: 80, color: '#ff0000' },
];
const cx = 150;
const cy = 200;
const iR = 80;
const oR = 130;
const value = 50;

const needle = (value, data, cx, cy, iR, oR, color) => {
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
    <Card className="p-2 lg:p-6 w-full lg:w-1/3 h-full shadow-md shadow-slate-200">
      <CardHeader>
        <CardTitle className="text-base lg:text-lg font-semibold">Call Volume</CardTitle>
      </CardHeader>
      <CardContent className="py-6">
        <ResponsiveContainer width="100%" height={250}>
          <PieChart className="mx-auto">
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
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
