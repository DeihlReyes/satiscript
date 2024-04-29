"use client";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SatisfactionData {
  satisfied: number;
  dissatisfied: number;
}

const RADIAN = Math.PI / 180;

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

const needle = (percentage: number, cx: number, cy: number, iR: number, oR: number, color: string) => {
  const radius = (iR + oR) / 2; // Needle should be between inner and outer radius
  const value = percentage / 100; // Convert percentage to a decimal
  const angle = 180 - (value * 180); // Calculate the angle for the semi-circle
  const endAngleRad = (angle * RADIAN); // Convert angle to radians

  // Calculate end position of needle based on angle
  const x = cx + radius * Math.cos(endAngleRad);
  const y = cy - radius * Math.sin(endAngleRad);

  // Define the path for the needle shape
  const pathD = `M ${cx - radius / 10} ${cy} L ${x} ${y} L ${cx + radius / 10} ${cy}`;
  const circleCX = cx + radius * Math.cos(endAngleRad);
  const circleCY = cy - radius * Math.sin(endAngleRad);

  return (
    <>
      <path d={pathD} fill={color} />
      <circle cx={circleCX} cy={circleCY} r="3" fill={color} />
    </>
  );
};


export function GaugeChart({ data }: { data: SatisfactionData }) {
  const total = data.satisfied + data.dissatisfied;
  const satisfiedPercentage = total > 0 ? (data.satisfied / total) : 0;
  const gaugeData = [
    { name: 'Satisfied', value: data.satisfied, color: '#5BC553' },
    { name: 'Dissatisfied', value: data.dissatisfied, color: '#DC403C' },
  ];

  return (
    <Card className="p-2 lg:p-6 w-full lg:w-1/3 h-full dark:shadow-none shadow-md shadow-slate-400">
      <CardHeader>
        <CardTitle className="text-base lg:text-lg font-semibold">Satisfaction Ratio</CardTitle>
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
              data={gaugeData}
              cx={cx}
              cy={cy}
              innerRadius={iR}
              outerRadius={oR}
              fill="#8884d8"
              stroke="none"
            >
              {gaugeData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
            {needle(satisfiedPercentage * 100, cx, cy, iR, oR, '#d0d000')}
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
