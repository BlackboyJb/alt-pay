import PaymentHeader from '@/components/paymentHeader';
import { Copy, AlertTriangle, Info } from 'lucide-react';

export default function PaymentDetails() {
    return (
        <div className="min-h-screen bg-zinc-100">
            <PaymentHeader />
            <div className="flex items-center justify-center bg-gray-100 px-8 py-10">
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
                            <span className="flex items-center gap-2 font-medium text-gray-900 ">
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
                        <button className="flex-1 py-2 border border-indigo-600 text-gray-700 font-semibold rounded-md">
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
        </div>
    );
}
