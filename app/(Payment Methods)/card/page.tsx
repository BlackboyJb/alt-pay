"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Info, ArrowLeft } from "lucide-react";

export default function CardPage() {
    const router = useRouter();

    const [cardNumber, setCardNumber] = useState("");
    const [expiry, setExpiry] = useState("");
    const [cvv, setCvv] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const isFormValid =
        cardNumber.trim() !== "" && expiry.trim() !== "" && cvv.trim() !== "";

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!isFormValid) return;

        setIsSubmitting(true);

        // Simulate payment processing delay
        setTimeout(() => {
            router.push("/card/otp"); // Navigate to OTP page
        }, 1200);
    };

    return (
        <div className="max-w-lg mx-auto bg-white rounded-lg p-4 pt-6 sm:mt-20">
            {/* Header with Back and Title */}
            {/* <div className="md:hidden flex items-center gap-3 px-4 pt-6">
                <button onClick={() => router.back()}>
                    <ArrowLeft className="w-5 h-5 text-black" />
                </button>
            </div> */}

            <div className="mb-6 lg:text-center">
                <h2 className="text-2xl font-semibold text-zinc-800 block lg:hidden">
                    Pay with Card
                </h2>
                <h2 className="text-2xl font-semibold text-zinc-800 hidden lg:block">
                    Card Details
                </h2>
                <p className="text-md text-black pt-2">
                    Enter card details to make payment
                </p>
            </div>

            {/* Card Form */}
            <div className="flex flex-col gap-y-5">
                {/* Card Number */}
                <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-1">
                        Card Number
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                            placeholder="Enter number"
                            className="w-full border text-gray-600 border-gray-400 px-3 py-2 rounded-lg pr-12 focus:outline-none focus:border-indigo-800"
                        />
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3ZM20 11H4V19H20V11ZM20 9V5H4V9H20ZM14 15H18V17H14V15Z"
                                    fill="black"
                                />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Expiry + CVV */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-zinc-700 mb-1">
                            Card Valid Till
                        </label>
                        <input
                            type="text"
                            value={expiry}
                            onChange={(e) => setExpiry(e.target.value)}
                            placeholder="MM/YY"
                            className="w-full border text-gray-600 border-gray-400 px-3 py-2 rounded-lg focus:outline-none focus:border-indigo-600"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-zinc-700 mb-1">
                            CVV
                        </label>
                        <input
                            type="password"
                            value={cvv}
                            onChange={(e) => setCvv(e.target.value)}
                            placeholder="Enter number"
                            className="w-full border text-gray-600 border-gray-400 px-3 py-2 rounded-lg focus:outline-none focus:border-indigo-600"
                            required
                        />
                    </div>
                </div>

                {/* Fee Info */}
                <div className="bg-zinc-100 text-xs text-zinc-600 px-3 py-3 rounded flex items-center space-x-2">
                    <Info size={14} className="text-gray-500" />
                    <span>Transaction cost of ₦50.00 applies</span>
                </div>

                {/* Actions */}
                <div className="grid grid-cols-2 gap-4">
                    <button
                        type="button"
                        onClick={() => {
                            if (typeof window !== "undefined" && window.innerWidth < 640) {
                                // Mobile: Show Sidebar instead of content
                                localStorage.setItem("showMethods", "true");
                                window.dispatchEvent(new Event("resize"));
                            } else {
                                // Desktop: Go back to previous page
                                window.history.back();
                            }
                        }}
                        className="flex-1 py-2 border border-indigo-600 text-gray-700 font-semibold rounded-md"
                    >
                        Back
                    </button>

                    <button
                        type="submit"
                        disabled={!isFormValid || isSubmitting}
                        onClick={handleSubmit}
                        className={`py-3 rounded transition text-sm ${!isFormValid || isSubmitting
                            ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                            : "bg-purple-600 text-white hover:bg-purple-700"
                            }`}
                    >
                        {isSubmitting ? "Processing..." : "Pay ₦100,050.00"}
                    </button>
                </div>
            </div>

            {/* Footer */}
            <p className="text-xs text-center text-gray-400 mt-6">
                Powered by <span className="text-indigo-600 font-semibold">altpay</span>
            </p>
        </div>
    );
}
