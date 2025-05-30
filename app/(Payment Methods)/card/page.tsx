'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Info } from 'lucide-react';
import PaymentHeader from '@/components/paymentHeader';

export default function CardPage() {
    const router = useRouter();

    const [cardNumber, setCardNumber] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvv, setCvv] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const isFormValid = cardNumber.trim() !== '' && expiry.trim() !== '' && cvv.trim() !== '';

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!isFormValid) return;

        setIsSubmitting(true);

        // Simulate payment processing delay
        setTimeout(() => {
            router.push('/card/otp'); // Navigate to OTP page
        }, 1200);
    };

    return (
        <div className="max-w-lg mx-auto bg-white rounded-lg mt-20 p-6">
            <div className="text-center mb-12">
                <h1 className="text-xl font-semibold text-zinc-800">Card Details</h1>
                <p className="text-sm text-gray-500 font-normal">Enter card details to make payment</p>
            </div>

            <div className='flex flex-col gap-y-5'>
                <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-1">Card Number</label>
                    <input
                        type="text"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        placeholder="1234 5678 9012 3456"
                        className="w-full border text-gray-600 border-gray-400 px-3 py-2 rounded-lg"
                        required
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="">
                        <label className="block text-sm font-medium text-zinc-700 mb-1">Card Valid Till</label>
                        <input
                            type="text"
                            value={expiry}
                            onChange={(e) => setExpiry(e.target.value)}
                            placeholder="MM/YY"
                            className="w-full border text-gray-600 border-gray-400 px-3 py-2 rounded-lg"
                            required
                        />
                    </div>

                    <div className="">
                        <label className="block text-sm font-medium text-zinc-700 mb-1">CVV</label>
                        <input
                            type="password"
                            value={cvv}
                            onChange={(e) => setCvv(e.target.value)}
                            placeholder="123"
                            className="w-full border text-gray-600 border-gray-400 px-3 py-2 rounded-lg"
                            required
                        />
                    </div>
                </div>

                <div className="bg-zinc-100 text-xs text-zinc-600 px-3 py-3 rounded flex items-center space-x-2">
                    <Info size={14} className="text-gray-500" />
                    <span>Transaction cost of ₦50.00 applies</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <button
                        type="button"
                        onClick={() => router.back()}
                        className="py-3 rounded-md border border-indigo-800 text-zinc-900"
                    >
                        Back
                    </button>

                    <button
                        type="submit"
                        disabled={!isFormValid || isSubmitting}
                        className={`py-3 rounded transition ${!isFormValid || isSubmitting
                            ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                            : 'bg-purple-600 text-white hover:bg-purple-700'
                            }`}
                    >
                        {isSubmitting ? 'Processing...' : 'Pay ₦100,000'}
                    </button>
                </div>
            </div>

            <p className="text-xs text-center text-gray-400 mt-6">
                Powered by <span className="text-indigo-600 font-semibold">altpay</span>
            </p>
        </div>
    );
}
