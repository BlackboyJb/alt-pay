"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import PaymentMobileLayout from "@/app/(Payment Methods)/layouts/PaymentMobileLayout";
import PaymentDesktopLayout from "@/app/(Payment Methods)/layouts/PaymentDesktopLayout";

export default function PaymentMethodsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();


    const hideSidebarRoutes = ["/success"];
    const shouldHideSidebar = hideSidebarRoutes.includes(pathname);
    const isOtpPage = pathname === "/card/otp";

    const [isMobile, setIsMobile] = useState<boolean | null>(null);
    const [showMainContent, setShowMainContent] = useState(false);
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth < 640;
            setIsMobile(mobile);

            if (mobile) {
                const flag = localStorage.getItem("showMethods");
                setShowMainContent(flag !== "true");
            } else {
                setShowMainContent(true);
            }
        };

        const handleShowSidebar = () => {
            setShowMainContent(false);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        window.addEventListener("showSidebar", handleShowSidebar);
        setHydrated(true);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("showSidebar", handleShowSidebar);
        };
    }, []);

    if (!hydrated || isMobile === null) return null;

    if (isMobile) {
        return (
            <PaymentMobileLayout
                showMainContent={showMainContent}
                setShowMainContent={setShowMainContent}
                isOtpPage={isOtpPage}
                shouldHideSidebar={shouldHideSidebar}
            >
                {children}
            </PaymentMobileLayout>

        );
    }

    return (
        <PaymentDesktopLayout shouldHideSidebar={shouldHideSidebar}>
            {children}
        </PaymentDesktopLayout>

    );
}
