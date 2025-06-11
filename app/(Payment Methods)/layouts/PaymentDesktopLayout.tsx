"use client";

import Sidebar from "@/components/sidebar";
import PaymentHeader from "@/components/paymentHeader";

interface DesktopLayoutProps {
    children: React.ReactNode;
    shouldHideSidebar: boolean;
}

export default function PaymentDesktopLayout({
    children,
    shouldHideSidebar,
}: DesktopLayoutProps) {
    return (
        <div className="bg-white flex flex-col md:flex-row min-h-screen w-full overflow-x-hidden">
            {!shouldHideSidebar && (
                <div className="w-full md:w-[400px] bg-white md:border-r border-b md:border-b-0">
                    <Sidebar />
                </div>
            )}

            <main className="w-full bg-gray-50 overflow-x-hidden">
                <div className="block">
                    <PaymentHeader />
                    {children}
                </div>
            </main>
        </div>
    );
}
