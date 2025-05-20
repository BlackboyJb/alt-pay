import { CheckCircle } from 'lucide-react';

export default function PaymentSuccess() {
    return (
        <div className="flex items-center justify-center bg-gray-100 p-50">
            <div className="bg-white rounded-xl w-full max-w-md text-center p-8">

                <div className="flex justify-center mb-12">
                    <CheckCircle className="text-green-600 w-16 h-16" />
                </div>


                <h2 className="text-2xl font-semibold text-gray-800 mb-5">Payment Successful</h2>


                <p className="text-gray-600 mb-8">
                    Your payment of <strong>N100,050.00</strong> is successful and a receipt has been sent
                    to your provided email address.
                </p>


                <button className="w-full py-3 bg-indigo-600 text-white rounded-md text-base font-medium">
                    Done
                </button>


                <p className="text-1xl text-gray-500 font-medium m-10">
                    Powered by <span className="text-purple-700 font-semibold">altpay</span>
                </p>
            </div>
        </div>
    );
}
