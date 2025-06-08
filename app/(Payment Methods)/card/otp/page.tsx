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
            // Auto-focus next
            if (value && index < 5) {
                const nextInput = document.getElementById(`otp-${index + 1}`);
                nextInput?.focus();
            }
        }
    };

    return (
        <div className="min-h-screen bg-zinc-100">
            <div className="min-h-screen bg-gray-100 p-4">
                {/* Back Button */}
                <button
                    className="hidden md:flex items-center text-zinc-700 border border-blue-500 px-6 py-4 rounded-lg text-base font-semibold mb-10"
                    onClick={() => router.back()}
                >
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    Back
                </button>

                <div className="max-w-[600px] mx-auto bg-white rounded-xl">
                    {/* Confirm Payment Box */}
                    <div className="bg-white rounded-xl text-center">
                        <div className="sm:text-center text-left sm:text-inherit">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                                Confirm Payment
                            </h2>
                            <p className="text-md text-gray-600 mb-4">
                                Enter the OTP sent to your email address and phone number
                            </p>
                        </div>

                        {/* OTP Input */}
                        <div className="flex justify-center gap-2 m-10">
                            {otp.map((digit, index) => (
                                <input
                                    key={index}
                                    id={`otp-${index}`}
                                    type="text"
                                    maxLength={1}
                                    value={digit}
                                    onChange={(e) => handleChange(index, e.target.value)}
                                    className="w-12 h-12 sm:w-16 sm:h-16 text-center text-gray-900 border-1 border-black rounded-md text-lg font-semibold"
                                />
                            ))}
                        </div>

                        <p className="text-1xl font-light text-gray-900 cursor-pointer m-10">
                            Resend OTP
                        </p>
                        <button
                            disabled={otp.some((val) => val === "")}
                            onClick={() => {
                                if (!otp.some((val) => val === "")) {
                                    setLoading(true);
                                    setTimeout(() => {
                                        router.push("/card/success");
                                    }, 1000);
                                }
                            }}
                            className={`w-full sm:w-[300px] md:w-[400px] lg:w-[500px] py-3 px-6 rounded-lg text-white text-lg font-semibold transition duration-200 ${otp.some((val) => val === "")
                                ? "bg-stone-200 cursor-not-allowed"
                                : "bg-indigo-600"
                                }`}
                        >
                            {loading ? "Processing..." : "Proceed"}
                        </button>

                        <p className="text-1xl text-gray-500 font-medium m-10">
                            Powered by{" "}
                            <span className="text-purple-700 font-semibold">altpay</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
