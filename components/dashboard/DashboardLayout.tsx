import type { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';

interface DashboardLayoutProps {
  children?: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps = {}) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Sidebar />
      
      {/* Main Content Area */}
      <main className="ml-64 pt-16">
        {children || (
          <div className="p-6">
            {/* Dashboard content will go here */}
            <div className="space-y-6">
              <div>
                <h1 className="heading-lg">Welcome to your Dashboard</h1>
                <p className="body-md text-muted-foreground mt-2">
                  Manage your expenses and split bills with ease
                </p>
              </div>
              
              {/* Placeholder content */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow"
                  >
                    <h3 className="heading-sm mb-2">Feature {i}</h3>
                    <p className="body-md text-muted-foreground">
                      Your dashboard content will appear here
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}