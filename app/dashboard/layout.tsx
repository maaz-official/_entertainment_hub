import { Metadata } from 'next';
import DashboardNav from '@/components/dashboard/nav';
import DashboardHeader from '@/components/dashboard/header';

export const metadata: Metadata = {
  title: 'Dashboard - Entertainment Hub',
  description: 'Admin dashboard for Entertainment Hub content management',
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex">
      <DashboardNav />
      <div className="flex-1">
        <DashboardHeader />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}