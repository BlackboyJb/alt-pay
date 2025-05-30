'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import PaymentHeader from '@/components/paymentHeader';

export default function ConfirmPaymentPage() {
    const [otp, setOtp] = useState(Array(6).fill(''));
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
            <PaymentHeader />
            <div className="min-h-screen bg-gray-100 p-4">
                {/* Back Button */}
                <button
                    className="flex items-center text-zinc-700 border border-blue-500 px-6 py-4 rounded-lg text-base font-semibold mt-20 mb-10"
                    onClick={() => router.back()}
                >
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    Back
                </button>


                <div className="max-w-[600px] mx-auto bg-white rounded-xl mt-10">
                    {/* Confirm Payment Box */}
                    <div className="bg-white rounded-xl p-6 text-center">
                        <h2 className="text-2xl font-semibold  text-gray-900 mb-7">Confirm Payment</h2>
                        <p className="text-md text-gray-600 mb-4">
                            Enter the OTP sent to your email address and phone number
                        </p>

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
                                    className="w-14 h-14 text-center  text-gray-900 border border-gray-300 rounded-md text-lg"
                                />
                            ))}
                        </div>

                        <p className="text-1xl font-light text-gray-900 cursor-pointer m-10">
                            Resend OTP
                        </p>
                        <button
                            disabled={otp.some((val) => val === '')}
                            onClick={() => {
                                if (!otp.some((val) => val === '')) {
                                    setLoading(true);
                                    setTimeout(() => {
                                        router.push('/success');
                                    }, 1000);
                                }
                            }}
                            className={`w-[500px] py-3 px-6 rounded-lg text-white text-lg font-semibold transition duration-200 ${otp.some((val) => val === '')
                                ? 'bg-stone-200 cursor-not-allowed'
                                : 'bg-indigo-600'
                                }`}
                        >
                            {loading ? 'Processing...' : 'Proceed'}
                        </button>


                        <p className="text-1xl text-gray-500 font-medium m-10">
                            Powered by <span className="text-purple-700 font-semibold">altpay</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
