// components/LayoutWrapper.tsx
'use client';

import { usePathname } from 'next/navigation';
import Sidebar from './sidebar';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const hideSidebarRoutes = ['/success'];

    const shouldHideSidebar = hideSidebarRoutes.includes(pathname);

    return (
        <body className="flex">
            {!shouldHideSidebar && <Sidebar />}
            <main className="flex-1 min-h-screen bg-gray-50 p-8">{children}</main>
        </body>
    );
}
