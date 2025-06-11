"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function ConfirmPaymentPage() {
    const [otp, setOtp] = useState(Array(6).fill(""));
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleChange = (index: number, value: string) => {
        if (/^\d?$/.test(value)) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            // Move to next input
            if (value && index < 5) {
                document.getElementById(`otp-${index + 1}`)?.focus();
            }
        }
    };

    const handleSubmit = () => {
        if (otp.every((val) => val !== "")) {
            setLoading(true);
            setTimeout(() => {
                router.push("/success");
            }, 1000);
        }
    };

    return (
        <div className="min-h-screen bg-zinc-100 p-4">
            {/* Back Button (Desktop only) */}
            <button
                onClick={() => router.back()}
                className="hidden md:flex items-center text-zinc-700 border border-blue-500 px-6 py-3 rounded-lg font-semibold mb-10"
            >
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back
            </button>

            <div className="max-w-[600px] mx-auto bg-white rounded-xl p-6 text-center">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">Confirm Payment</h2>
                <p className="text-md text-gray-600 mb-6">
                    Enter the OTP sent to your email address and phone number
                </p>

                {/* OTP Inputs */}
                <div className="flex justify-center gap-2 mb-6">
                    {otp.map((digit, index) => (
                        <input
                            key={index}
                            id={`otp-${index}`}
                            type="text"
                            maxLength={1}
                            value={digit}
                            onChange={(e) => handleChange(index, e.target.value)}
                            className="w-12 h-12 sm:w-12 sm:h-12 text-center text-gray-900 border border-black rounded-md text-lg font-semibold focus:outline-none focus:border-indigo-800"
                        />
                    ))}
                </div>

                {/* Resend link (placeholder) */}
                <p className="text-base text-gray-900 underline cursor-pointer mb-6">
                    Resend OTP
                </p>

                {/* Submit Button */}
                <button
                    disabled={otp.some((val) => val === "") || loading}
                    onClick={handleSubmit}
                    className={`w-full max-w-[500px] py-3 rounded-lg text-white font-semibold transition ${otp.some((val) => val === "") || loading
                        ? "bg-stone-200 cursor-not-allowed"
                        : "bg-indigo-600 hover:bg-indigo-700"
                        }`}
                >
                    {loading ? "Processing..." : "Proceed"}
                </button>

                {/* Footer */}
                <p className="text-sm text-gray-500 font-medium mt-10">
                    Powered by <span className="text-purple-700 font-semibold">altpay</span>
                </p>
            </div>
        </div>
    );
}
