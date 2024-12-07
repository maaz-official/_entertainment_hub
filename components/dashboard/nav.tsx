'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  Users,
  FileText,
  Star,
  Film,
  Tv,
  Music,
  Settings,
} from 'lucide-react';

const items = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    title: 'Articles',
    href: '/dashboard/articles',
    icon: FileText,
  },
  {
    title: 'Celebrities',
    href: '/dashboard/celebrities',
    icon: Star,
  },
  {
    title: 'Movies',
    href: '/dashboard/movies',
    icon: Film,
  },
  {
    title: 'TV Shows',
    href: '/dashboard/tv-shows',
    icon: Tv,
  },
  {
    title: 'Music',
    href: '/dashboard/music',
    icon: Music,
  },
  {
    title: 'Users',
    href: '/dashboard/users',
    icon: Users,
  },
  {
    title: 'Settings',
    href: '/dashboard/settings',
    icon: Settings,
  },
];

export default function DashboardNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden border-r bg-muted/40 md:block w-64">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold">Admin Panel</h2>
          <div className="space-y-1">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-center rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground',
                  pathname === item.href
                    ? 'bg-accent text-accent-foreground'
                    : 'transparent'
                )}
              >
                <item.icon className="mr-2 h-4 w-4" />
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}