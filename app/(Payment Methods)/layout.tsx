"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "@/components/sidebar";
import PaymentHeader from "@/components/paymentHeader";
import { useRouter } from "next/navigation";

export default function PaymentMethodsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const router = useRouter();
    const pathname = usePathname();
    const hideSidebarRoutes = ["/success"];
    const shouldHideSidebar = hideSidebarRoutes.includes(pathname);

    const [isMobile, setIsMobile] = useState<boolean | null>(null);
    const [showMainContent, setShowMainContent] = useState(false);
    const [hydrated, setHydrated] = useState(false);

    const isOtpPage = pathname === "/card/otp";

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth < 640;
            setIsMobile(mobile);

            if (mobile) {
                const flag = localStorage.getItem("showMethods");
                if (flag === "true") {
                    setShowMainContent(false);
                    localStorage.removeItem("showMethods");
                } else {
                    setShowMainContent(true);
                }
            } else {
                setShowMainContent(true); // Always show on desktop
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        setHydrated(true);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (!hydrated || isMobile === null) return null;

    // ✅ Mobile layout
    if (isMobile && !shouldHideSidebar) {
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
                    {/* Mobile Payment Header */}
                    <div className="flex items-center justify-between mb-6 md:hidden">
                        <button onClick={() => router.back()} className="p-2">
                            <svg
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clip-path="url(#clip0_930_5122)">
                                    <path
                                        d="M14.828 15.9997L19.778 20.9497L18.364 22.3637L12 15.9997L18.364 9.63574L19.778 11.0497L14.828 15.9997Z"
                                        fill="black"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_930_5122">
                                        <rect
                                            width="24"
                                            height="24"
                                            fill="white"
                                            transform="translate(4 4)"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                        <h1 className="text-lg font-semibold text-gray-900">Payment</h1>
                        {isOtpPage ? (
                            <button className="p-2">
                                <svg
                                    width="32"
                                    height="32"
                                    viewBox="0 0 32 32"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clipPath="url(#clip0_930_5128)">
                                        <path
                                            d="M7 8H25V10H7V8ZM7 15H25V17H7V15ZM7 22H25V24H7V22Z"
                                            fill="black"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_930_5128">
                                            <rect
                                                width="24"
                                                height="24"
                                                fill="white"
                                                transform="translate(4 4)"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </button>
                        ) : (
                            <div className="w-8 h-8" /> // empty space for layout consistency
                        )}
                    </div>
                    <div className="mt-2">{children}</div>
                </main>
            </div>
        );
    }

    // ✅ Desktop layout
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

{
    /* <body className="flex flex-col md:flex-row min-h-screen">
              {!shouldHideSidebar && (
                  <div className="w-full md:w-[30%] bg-white md:border-r border-b md:border-b-0">
                      <Sidebar />
                  </div>
              )}
  
              <main className="w-full md:w-[70%] bg-gray-50">
                  <PaymentHeader />
                  {children}
              </main>
          </body> */
}
