'use client';
import { usePathname } from 'next/navigation';
import Sidebar from '@/components/sidebar';
import PaymentHeader from '@/components/paymentHeader';

export default function PaymentMethodsLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const hideSidebarRoutes = ['/success'];

    const shouldHideSidebar = hideSidebarRoutes.includes(pathname);

    return (
        <body className="flex">
            {!shouldHideSidebar && <Sidebar />}
            <main className="w-full min-h-screen bg-gray-50">
                <PaymentHeader />
                {children}
            </main>
        </body>
    );
}
