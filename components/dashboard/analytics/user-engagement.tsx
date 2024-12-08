'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const engagementData = [
  { date: '2024-03-01', activeUsers: 2400, comments: 240, likes: 1200 },
  { date: '2024-03-02', activeUsers: 1398, comments: 198, likes: 890 },
  { date: '2024-03-03', activeUsers: 9800, comments: 480, likes: 2300 },
  { date: '2024-03-04', activeUsers: 3908, comments: 380, likes: 1800 },
  { date: '2024-03-05', activeUsers: 4800, comments: 420, likes: 2100 },
  { date: '2024-03-06', activeUsers: 3800, comments: 340, likes: 1600 },
  { date: '2024-03-07', activeUsers: 4300, comments: 280, likes: 1900 },
];

export function UserEngagement() {
  const handleExport = () => {
    const csvContent = [
      ['Date', 'Active Users', 'Comments', 'Likes'],
      ...engagementData.map(item => [
        item.date,
        item.activeUsers,
        item.comments,
        item.likes
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'user-engagement.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <Card className="col-span-4">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>User Engagement Trends</CardTitle>
          <CardDescription>
            Daily active users and interactions
          </CardDescription>
        </div>
        <Button variant="outline" size="sm" onClick={handleExport}>
          <Download className="mr-2 h-4 w-4" />
          Export
        </Button>
      </CardHeader>
      <CardContent>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={engagementData}>
              <XAxis 
                dataKey="date" 
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value}`}
              />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="activeUsers"
                stroke="hsl(var(--chart-1))"
                strokeWidth={2}
                name="Active Users"
              />
              <Line
                type="monotone"
                dataKey="comments"
                stroke="hsl(var(--chart-2))"
                strokeWidth={2}
                name="Comments"
              />
              <Line
                type="monotone"
                dataKey="likes"
                stroke="hsl(var(--chart-3))"
                strokeWidth={2}
                name="Likes"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}