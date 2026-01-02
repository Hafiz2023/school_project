'use client';
import { usePathname } from 'next/navigation';
import Sidebar from '@/components/Sidebar';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    // Define public paths where the dashboard layout (Sidebar + Padding) should NOT be applied
    const isPublic =
        pathname === '/' ||
        pathname === '/login' ||
        pathname === '/about' ||
        pathname === '/careers' ||
        pathname === '/pricing' ||
        pathname === '/contact' ||
        pathname === '/privacy' ||
        pathname === '/terms' ||
        pathname === '/cookies' ||
        pathname === '/status' ||
        pathname === '/help' ||
        pathname === '/roadmap' ||
        pathname === '/changelog' ||
        pathname.startsWith('/blog') ||
        pathname.startsWith('/features') ||
        pathname.startsWith('/resources') ||
        pathname === '/watch-demo';

    if (isPublic) {
        return (
            <div className="min-h-screen bg-slate-50">
                {children}
            </div>
        );
    }

    return (
        <div className="flex h-screen bg-slate-50 overflow-hidden">
            <Sidebar />
            <main className="flex-1 w-full p-4 md:p-8 overflow-y-auto">
                {children}
            </main>
        </div>
    );
}
