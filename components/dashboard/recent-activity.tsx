import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const activities = [
  {
    user: 'John Doe',
    action: 'created a new article',
    target: 'Latest Movie Reviews',
    time: '2 hours ago',
    avatar: 'JD',
  },
  {
    user: 'Sarah Smith',
    action: 'updated celebrity profile',
    target: 'Emma Stone',
    time: '3 hours ago',
    avatar: 'SS',
  },
  {
    user: 'Mike Johnson',
    action: 'added new movie',
    target: 'The Latest Blockbuster',
    time: '5 hours ago',
    avatar: 'MJ',
  },
];

export function RecentActivity() {
  return (
    <div className="space-y-8">
      {activities.map((activity, index) => (
        <div key={index} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarFallback>{activity.avatar}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">
              {activity.user}{' '}
              <span className="text-muted-foreground">{activity.action}</span>
            </p>
            <p className="text-sm text-muted-foreground">{activity.target}</p>
          </div>
          <div className="ml-auto text-sm text-muted-foreground">
            {activity.time}
          </div>
        </div>
      ))}
    </div>
  );
}