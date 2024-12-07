'use client';

import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { 
  FileText, 
  Star, 
  UserPlus, 
  MessageSquare, 
  ThumbsUp,
  AlertCircle
} from 'lucide-react';

const activities = [
  {
    id: 1,
    user: 'John Doe',
    action: 'published',
    target: 'New Movie Review: The Latest Blockbuster',
    time: '2 minutes ago',
    type: 'article',
    icon: FileText,
    avatar: 'JD'
  },
  {
    id: 2,
    user: 'Sarah Smith',
    action: 'updated',
    target: 'Emma Stone\'s Biography',
    time: '5 minutes ago',
    type: 'celebrity',
    icon: Star,
    avatar: 'SS'
  },
  {
    id: 3,
    user: 'Mike Johnson',
    action: 'registered',
    target: 'as a new user',
    time: '10 minutes ago',
    type: 'user',
    icon: UserPlus,
    avatar: 'MJ'
  },
  {
    id: 4,
    user: 'Lisa Brown',
    action: 'commented on',
    target: 'Latest TV Show Review',
    time: '15 minutes ago',
    type: 'comment',
    icon: MessageSquare,
    avatar: 'LB'
  },
  {
    id: 5,
    user: 'David Wilson',
    action: 'liked',
    target: 'Movie Industry Analysis Article',
    time: '20 minutes ago',
    type: 'reaction',
    icon: ThumbsUp,
    avatar: 'DW'
  },
  {
    id: 6,
    user: 'System',
    action: 'reported',
    target: 'high traffic spike on celebrity profiles',
    time: '25 minutes ago',
    type: 'system',
    icon: AlertCircle,
    avatar: 'SY'
  }
];

const getActivityColor = (type: string) => {
  const colors = {
    article: 'text-blue-500',
    celebrity: 'text-purple-500',
    user: 'text-green-500',
    comment: 'text-orange-500',
    reaction: 'text-pink-500',
    system: 'text-red-500'
  };
  return colors[type as keyof typeof colors] || 'text-gray-500';
};

export function ActivityLog() {
  return (
    <ScrollArea className="h-[400px] rounded-md border p-4">
      <div className="space-y-8">
        {activities.map((activity) => {
          const IconComponent = activity.icon;
          return (
            <div key={activity.id} className="flex items-center">
              <Avatar className="h-9 w-9">
                <AvatarFallback>{activity.avatar}</AvatarFallback>
              </Avatar>
              <div className="ml-4 space-y-1">
                <p className="text-sm">
                  <span className="font-medium">{activity.user}</span>
                  {' '}
                  <span className="text-muted-foreground">{activity.action}</span>
                  {' '}
                  <span className={`font-medium ${getActivityColor(activity.type)}`}>
                    {activity.target}
                  </span>
                </p>
                <p className="text-xs text-muted-foreground">
                  {activity.time}
                </p>
              </div>
              <div className="ml-auto">
                <IconComponent className={`h-5 w-5 ${getActivityColor(activity.type)}`} />
              </div>
            </div>
          );
        })}
      </div>
    </ScrollArea>
  );
}