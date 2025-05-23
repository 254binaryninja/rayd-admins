'use client';

import { usePathname } from 'next/navigation';
import { AppSidebar } from '@/components/app-sidebar';
import { SidebarProvider, SidebarTrigger, SidebarInset } from '@/components/ui/sidebar';
import { ClerkProvider } from '@clerk/nextjs';

export default function SidebarLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Check if the current route is `/login`
  const showSidebar = pathname !== '/login';

  return (
    <div className="flex min-h-screen">
      <ClerkProvider>
      <SidebarProvider defaultOpen={true}>
      {/* Conditionally render the sidebar */}
      {showSidebar && <AppSidebar />}
      <SidebarInset>
      <main className="flex-1">
            <SidebarTrigger />
            {children}
      </main>
      </SidebarInset>
      </SidebarProvider>
      </ClerkProvider>
    </div>
  );
}