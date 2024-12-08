'use client';

import { Analytics } from '@/components/dashboard/analytics';
import { MetricsCards } from '@/components/dashboard/analytics/metrics-cards';
import { ActivityLog } from '@/components/dashboard/analytics/activity-log';
import { ContentPerformance } from '@/components/dashboard/analytics/content-performance';
import { UserEngagement } from '@/components/dashboard/analytics/user-engagement';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Analytics</h2>
        <p className="text-muted-foreground">
          Detailed insights and performance metrics
        </p>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 lg:max-w-[400px]">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="engagement">Engagement</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <MetricsCards />
          <Analytics />
        </TabsContent>

        <TabsContent value="content" className="space-y-6">
          <ContentPerformance />
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Top Performing Articles</CardTitle>
              </CardHeader>
              <CardContent>
                <Analytics />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Popular Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <Analytics />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="engagement" className="space-y-6">
          <UserEngagement />
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>User Retention</CardTitle>
              </CardHeader>
              <CardContent>
                <Analytics />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Social Shares</CardTitle>
              </CardHeader>
              <CardContent>
                <Analytics />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="activity">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <ActivityLog />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Activity by Type</CardTitle>
              </CardHeader>
              <CardContent>
                <Analytics />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}