'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  TrendingUp, 
  Users, 
  FileText, 
  Star, 
  Share2, 
  MessageSquare,
  Clock,
  Activity
} from 'lucide-react';

const metrics = [
  {
    title: 'Total Page Views',
    value: '2.7M',
    change: '+12.3%',
    trend: 'up',
    icon: TrendingUp,
    description: 'vs. previous month'
  },
  {
    title: 'Active Users',
    value: '54.2K',
    change: '+8.1%',
    trend: 'up',
    icon: Users,
    description: 'vs. previous month'
  },
  {
    title: 'Article Reads',
    value: '892K',
    change: '+15.3%',
    trend: 'up',
    icon: FileText,
    description: 'vs. previous month'
  },
  {
    title: 'Celebrity Profile Views',
    value: '425K',
    change: '+5.7%',
    trend: 'up',
    icon: Star,
    description: 'vs. previous month'
  },
  {
    title: 'Social Shares',
    value: '32.1K',
    change: '-2.4%',
    trend: 'down',
    icon: Share2,
    description: 'vs. previous month'
  },
  {
    title: 'Comments',
    value: '12.8K',
    change: '+18.2%',
    trend: 'up',
    icon: MessageSquare,
    description: 'vs. previous month'
  },
  {
    title: 'Avg. Session Duration',
    value: '4m 32s',
    change: '+1.5%',
    trend: 'up',
    icon: Clock,
    description: 'vs. previous month'
  },
  {
    title: 'Engagement Rate',
    value: '68.4%',
    change: '+3.2%',
    trend: 'up',
    icon: Activity,
    description: 'vs. previous month'
  }
];

export function MetricsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {metric.title}
            </CardTitle>
            <metric.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metric.value}</div>
            <p className={`text-xs ${
              metric.trend === 'up' 
                ? 'text-green-500' 
                : 'text-red-500'
            } flex items-center`}>
              {metric.change} {metric.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}