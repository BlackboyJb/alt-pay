"use client";

import Sidebar from "@/components/sidebar";


interface MobileLayoutProps {
    children: React.ReactNode;
    showMainContent: boolean;
    setShowMainContent: (value: boolean) => void;
    isOtpPage: boolean;
    shouldHideSidebar: boolean;
}

export default function PaymentMobileLayout({
    children,
    showMainContent,
    setShowMainContent,
    isOtpPage,
    shouldHideSidebar,
}: MobileLayoutProps) {


    //Handle Hamburg Click
    const handleHamburgClick = () => {
        localStorage.setItem("showMethods", "true");
        window.dispatchEvent(new Event("showSidebar")); // 🔔 Custom event
    };

    //HandleBack Click
    const handleBack = () => {
        if (window.innerWidth < 640) {
            localStorage.setItem("showMethods", "true");
            window.dispatchEvent(new Event("resize"));
        } else {
            window.history.back();
        }
    };

    if (shouldHideSidebar) return null;

    if (!showMainContent) {
        return (
            <div className="min-h-screen w-full bg-white">
                <Sidebar
                    onClose={() => {
                        setTimeout(() => setShowMainContent(true), 500);
                    }}
                />
            </div>
        );
    }

    return (
        <div className="min-h-screen w-full bg-white">
            <main className="w-full bg-gray-50 overflow-x-hidden p-4">
                {/* Payment Header */}
                <div className="flex items-center justify-between mb-6 md:hidden">
                    <button
                        onClick={handleBack}
                        className="p-2"
                    >
                        <svg
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M14.828 15.9997L19.778 20.9497L18.364 22.3637L12 15.9997L18.364 9.63574L19.778 11.0497L14.828 15.9997Z"
                                fill="black"
                            />
                        </svg>
                    </button>

                    <h1 className="text-lg font-semibold text-gray-900">Payment</h1>

                    {isOtpPage ? (
                        <button className="p-2" onClick={handleHamburgClick}>
                            <svg
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7 8H25V10H7V8ZM7 15H25V17H7V15ZM7 22H25V24H7V22Z"
                                    fill="black"
                                />
                            </svg>
                        </button>
                    ) : (
                        <div className="w-8 h-8" />
                    )}
                </div>

                <div className="mt-2">{children}</div>
            </main>
        </div>
    );
}
