'use client'

import { Copy, AlertTriangle, Info } from 'lucide-react';

// Mobile-only Detail Row
function DetailItem({ label, value, copy = false }: { label: string; value: string; copy?: boolean }) {
    return (
        <div className="flex justify-between items-center">
            <span className="text-gray-700 text-sm">{label}</span>
            <span className="flex items-center gap-1 text-sm font-medium text-gray-900">
                {value}
                {copy && <Copy className="w-4 h-4 text-indigo-600 cursor-pointer" />}
            </span>
        </div>
    );
}

export default function PaymentDetails() {
    return (
        <div className="min-h-screen bg-zinc-100">
            {/* Desktop Version */}
            <div className="hidden md:flex items-center justify-center bg-gray-100 px-8 py-10">
                <div className="bg-white max-w-[600px] p-8">
                    {/* Title */}
                    <h2 className="text-xl font-semibold text-center text-gray-900 mb-1">Payment Details</h2>
                    <p className="text-center text-sm text-gray-600 mb-4">
                        Pay with the account details below and indicate when done.
                        <br />
                        Account number expires in:
                    </p>

                    {/* Timer */}
                    <div className="text-center text-xl font-bold text-gray-900 mb-6">59:59</div>

                    {/* Info Rows */}
                    <div className="space-y-8 mb-10">
                        <div className="flex items-center justify-between">
                            <span className="text-gray-700">Amount</span>
                            <span className="flex items-center gap-2 font-medium text-gray-900">
                                N100,100.00
                                <Copy className="w-6 h-5 text-indigo-600 cursor-pointer" />
                            </span>
                        </div>

                        <div className="flex items-center justify-between">
                            <span className="text-gray-700">Bank</span>
                            <span className="text-gray-900 font-medium">AltBank</span>
                        </div>

                        <div className="flex items-center justify-between">
                            <span className="text-gray-700">Account Number</span>
                            <span className="flex items-center gap-2 font-medium text-gray-900">
                                0123456789
                                <Copy className="w-6 h-5 text-indigo-600 cursor-pointer" />
                            </span>
                        </div>

                        <div className="flex items-center justify-between">
                            <span className="text-gray-700">Unique Ref ID</span>
                            <span className="flex items-center gap-2 font-medium text-gray-900">
                                07pD123456789
                                <Copy className="w-6 h-5 text-indigo-600 cursor-pointer" />
                            </span>
                        </div>
                    </div>

                    {/* Note */}
                    <div className="bg-gray-100 p-4 rounded-md flex items-start gap-2 mb-4">
                        <AlertTriangle className="text-red-500 w-10 h-5 mt-1" />
                        <p className="text-sm text-gray-700 font-light">
                            Note: please copy your Unique Ref ID in the Narration or Reference section of your bank transfer.
                        </p>
                    </div>

                    {/* Transaction Info */}
                    <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-100 pl-8 rounded-md mb-6">
                        <Info className="w-4 h-4" />
                        Transaction cost of N100.00 applies
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4">
                        <button
                            type="button"
                            onClick={() => {
                                if (typeof window !== 'undefined' && window.innerWidth < 640) {
                                    // Mobile: Show Sidebar instead of content
                                    localStorage.setItem('showMethods', 'true');
                                    window.dispatchEvent(new Event('resize'));
                                } else {
                                    // Desktop: Go back to previous page
                                    window.history.back();
                                }
                            }}
                            className="flex-1 py-2 border border-indigo-600 text-gray-700 font-semibold rounded-md"
                        >
                            Back
                        </button>

                        <button className="flex-1 py-2 bg-indigo-700 text-white font-medium rounded-md">
                            I Have Paid
                        </button>
                    </div>

                    <p className="text-1xl text-center text-gray-400 mt-6">
                        Powered by <span className="text-indigo-600 font-semibold">altpay</span>
                    </p>
                </div>
            </div>


            {/* Mobile Version */}
            <div className="md:hidden flex items-center justify-center bg-zinc-100  p-4 pt-6 sm:mt-20">

                <div className="mb-6 lg:text-center">
                    <h2 className="text-2xl font-semibold text-zinc-800 block lg:hidden">
                        Pay with Bank Transfer
                    </h2>
                    <p className="text-1xl text-black pt-2 font-extralight">Pay with the account details and indicate when done</p>


                    <p className="text-1xl font-light text-center text-black pt-4">Account number expires in:</p>
                    <div className="text-center  font-bold text-gray-900 mb-9 mt-4">59:59</div>

                    <div className="space-y-8 mb-6">
                        <DetailItem label="Amount" value="N100,100.00" copy />
                        <DetailItem label="Bank" value="AltBank" />
                        <DetailItem label="Account Number" value="0123456789" copy />
                        <DetailItem label="Unique Ref ID" value="07pD123456789" copy />
                    </div>

                    <div className="bg-gray-100 rounded-md p-3 flex items-start gap-2 mb-4">
                        <AlertTriangle className="text-red-500 w-5 h-5 mt-0.5" />
                        <p className="text-sm text-gray-700">
                            <span className="font-semibold">Note:</span> please copy your Unique Ref ID in the Narration or Reference section of your bank transfer.
                        </p>
                    </div>

                    <div className="bg-gray-100 rounded-md px-3 py-2 flex items-center text-sm text-gray-700 mb-6">
                        <Info className="w-4 h-4 mr-2" />
                        Transaction cost of N100.00 applies
                    </div>

                    <div className="flex gap-4 mb-6">
                        <button
                            type="button"
                            onClick={() => {
                                if (typeof window !== 'undefined' && window.innerWidth < 640) {
                                    // Mobile: Show Sidebar instead of content
                                    localStorage.setItem('showMethods', 'true');
                                    window.dispatchEvent(new Event('resize'));
                                } else {
                                    // Desktop: Go back to previous page
                                    window.history.back();
                                }
                            }}
                            className="flex-1 py-2 border border-indigo-600 text-gray-700 font-semibold rounded-md"
                        >
                            Back
                        </button>

                        <button className="flex-1 bg-indigo-700 text-white font-semibold py-2 rounded-md">
                            I Have Paid
                        </button>
                    </div>

                    <p className="text-center text-sm text-gray-400">
                        Powered by <span className="text-indigo-600 font-bold">altpay</span>
                    </p>
                </div>
            </div>

        </div >
    );
}
