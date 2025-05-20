'use client';

import { usePathname } from 'next/navigation';

const pageTitles: { [key: string]: string } = {
    '/card': 'Pay with Card',
    '/card/otp': 'Pay with Card',
    '/transfer': 'Pay with Bank Transfer',
    '/recurring': 'Recurring Payment',
    '/credit': 'Pay with Credit',
    '/installment': 'Pay in Installment',
};

const PaymentHeader = () => {
    const pathname = usePathname();
    const title = pageTitles[pathname] || 'Payment Method';

    return (
        <div className="w-full flex items-center justify-between px-6 py-1  mb-7 border-b border-zinc-200 bg-white">
            <h1 className="text-2xl font-semibold  text-gray-900 p-3">{title}</h1>
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#001f4d] flex items-center justify-center text-white text-sm font-bold">
                    D
                </div>
                <div className="text-right">
                    <p className="text-sm font-medium text-zinc-900">₦100,000.00</p>
                    <p className="text-xs text-zinc-500">Transaction Amount</p>
                </div>
            </div>
        </div>
    );
};

export default PaymentHeader;
