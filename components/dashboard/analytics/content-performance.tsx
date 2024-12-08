'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const contentPerformance = [
  { category: 'Movies', views: 4500, engagement: 75, shares: 1200 },
  { category: 'TV Shows', views: 3800, engagement: 68, shares: 950 },
  { category: 'Celebrities', views: 3200, engagement: 82, shares: 1500 },
  { category: 'Music', views: 2900, engagement: 71, shares: 800 },
  { category: 'News', views: 2500, engagement: 65, shares: 600 },
];

export function ContentPerformance() {
  const handleExport = () => {
    const csvContent = [
      ['Category', 'Views', 'Engagement', 'Shares'],
      ...contentPerformance.map(item => [
        item.category,
        item.views,
        item.engagement,
        item.shares
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'content-performance.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <Card className="col-span-4">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Content Performance</CardTitle>
          <CardDescription>
            Views and engagement by content category
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
            <BarChart data={contentPerformance}>
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Bar 
                dataKey="views" 
                fill="hsl(var(--chart-1))" 
                name="Views"
                radius={[4, 4, 0, 0]} 
              />
              <Bar 
                dataKey="engagement" 
                fill="hsl(var(--chart-2))" 
                name="Engagement"
                radius={[4, 4, 0, 0]} 
              />
              <Bar 
                dataKey="shares" 
                fill="hsl(var(--chart-3))" 
                name="Shares"
                radius={[4, 4, 0, 0]} 
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}