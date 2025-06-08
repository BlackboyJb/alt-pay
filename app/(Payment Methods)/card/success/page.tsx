'use client'

import { CheckCircle } from 'lucide-react';
import { useRouter } from "next/navigation";

export default function PaymentSuccess() {
    const router = useRouter();


    "use client";

    export default function DoneButton() {
        const handleDoneClick = () => {
            localStorage.setItem("showMethods", "true");
            window.dispatchEvent(new Event("showSidebar")); // 🔔 Custom event
        };

        return (
            <button
                onClick={handleDoneClick}
                className="w-full py-3 bg-indigo-600 text-white rounded-md text-base font-medium"
            >
                Done
            </button>
        );
    }

    return (
        <div className="flex justify-center bg-gray-100 min-h-screen md:items-center px-4">
            <div className="flex flex-col bg-white rounded-xl w-full max-w-md text-center p-4 sm:p-6 md:p-8 min-h-[80vh] md:min-h-[90vh]">

                {/* Mobile Header - Icon */}
                <div className="md:hidden">
                    <div className="flex justify-center mb-4">
                        <CheckCircle className="text-green-600 w-16 h-16" />
                    </div>
                </div>

                {/* Desktop Icon */}
                <div className="hidden md:flex justify-center mb-8">
                    <CheckCircle className="text-green-600 w-16 h-16" />
                </div>

                {/* Heading */}
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Payment Successful</h2>

                {/* Description */}
                <p className="text-gray-600 mb-6 text-sm sm:text-base">
                    Your payment of <strong>N100,050.00</strong> is successful and a receipt has been sent
                    to your provided email address.
                </p>

                {/* Done Button */}
                <button
                    onClick={handleDoneClick}
                    className="w-full py-3 bg-indigo-600 text-white rounded-md text-base font-medium"
                >
                    Done
                </button>

                {/* Footer */}
                <footer className="mt-auto text-center pt-6 sm:pt-10">
                    <p className="text-sm text-gray-500 font-medium">
                        Powered by <span className="text-purple-700 font-semibold">altpay</span>
                    </p>
                </footer>
            </div>
        </div>

    );
}
