// 'use client';

// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import clsx from 'clsx';
// import { X } from 'lucide-react';
// import React, { useState } from 'react';

// const methods = [
//     { name: 'Pay with Card', path: '/card', description: 'Enter Card details to make full Payment' },
//     { name: 'Pay with Bank Transfer', path: '/transfer', description: 'Get Bank details to make full payment' },
//     { name: 'Recurring Payment', path: '/recurring', description: 'Set up auto-pay for convenience' },
//     { name: 'Pay with Credit', path: '/credit', description: 'Pay later using credit options' },
//     { name: 'Pay in Installment', path: '/installment', description: 'Split your payment over time' },
// ];

// const Sidebar = ({ onClose }: { onClose?: () => void }) => {
//     const pathname = usePathname();
//     const [showModal, setShowModal] = useState(false);

//     const handleCancelClick = () => setShowModal(true);

//     const handleConfirmCancel = () => {
//         setShowModal(false);
//         if (onClose) onClose();
//     };

//     const handleDismissModal = () => setShowModal(false);

//     return (
//         <aside className="w-[500px] h-[1024px] bg-white shadow-md flex flex-col relative rounded-br-[12px] pb-5">
//             {/* X Button */}
//             <button
//                 className="absolute top-20 right-4 text-gray-500 hover:text-gray-800"
//                 onClick={handleCancelClick}
//                 aria-label="Close"
//             >
//                 <X className="w-5 h-5" />
//             </button>

//             {/* Header */}
//             <div className="pt-28 px-30">
//                 <div className="text-[28px] font-bold text-purple-700 leading-[56px]">altpay</div>
//                 <h2 className="text-sm text-gray-400">Select Payment Method</h2>
//             </div>

//             {/* Payment Methods */}
//             <ul className="space-y-2 mt-6 flex-1">
//                 {methods.map(({ name, path, description }) => (
//                     <li key={path}>
//                         <Link
//                             href={path}
//                             className={clsx(
//                                 'block px-10 py-4 rounded-md transition-colors border-l-4',
//                                 pathname.startsWith(path)
//                                     ? 'bg-[#f3ecff] border-indigo-600 text-indigo-700'
//                                     : 'border-transparent text-gray-700 hover:bg-gray-50'
//                             )}
//                         >
//                             <div className={clsx(
//                                 'text-1xl font-semibold flex items-center gap-2',
//                                 pathname.startsWith(path) ? 'text-indigo-700' : 'text-gray-700'
//                             )}>
//                                 {name}
//                             </div>
//                             <p className={clsx(
//                                 'text-md mt-0.5',
//                                 pathname.startsWith(path) ? 'text-gray-600' : 'text-gray-400'
//                             )}>
//                                 {description}
//                             </p>
//                         </Link>
//                     </li>
//                 ))}
//             </ul>

//             {/* Footer Text */}
//             <p className="text-xs text-gray-400 px-20">
//                 Powered by <span className="text-purple-600 font-semibold">altpay</span>
//             </p>

// {/* Modal */}
// {showModal && (
//     <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
//         <div className="bg-white rounded-xl max-w-[600px] w-full p-8 relative">
//             <button
//                 className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
//                 onClick={handleDismissModal}
//                 aria-label="Dismiss"
//             >
//                 <X className="w-5 h-5" />
//             </button>
//             <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">Cancel Payment</h3>
//             <p className="text-sm text-gray-500 mb-6 text-center">You are about to cancel this payment.</p>
//             <div className="flex justify-center space-x-4">
//                 <button
//                     className="flex-1 py-2 border border-indigo-600 text-gray-700 font-semibold rounded-md"
//                     onClick={handleDismissModal}
//                 >
//                     Cancel
//                 </button>
//                 <button
//                     className="flex-1 py-2 bg-indigo-700 text-white font-medium rounded-md"
//                     onClick={handleConfirmCancel}
//                 >
//                     Continue
//                 </button>
//             </div>
//             <p className="text-1xl text-center text-gray-400 mt-6">
//                 Powered by <span className="text-indigo-600 font-semibold">altpay</span>
//             </p>
//         </div>
//     </div>
// )}
//         </aside>

//     );
// };

// export default Sidebar;


'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { X, CreditCard, RefreshCcw, Wallet, House, Repeat } from 'lucide-react';
import React, { useState } from 'react';

const methods = [
    {
        name: 'Pay with Card',
        path: '/card',
        description: 'Enter card details to make full payment',
        icon: <CreditCard className="w-5 h-5" />,
    },
    {
        name: 'Pay with Bank Transfer',
        path: '/transfer',
        description: 'Get bank details to make full payment',
        icon: <House className="w-5 h-5" />,
    },
    {
        name: 'Recurring Payment',
        path: '/recurring',
        description: 'Tokenize card for recurring payment',
        icon: <RefreshCcw className="w-5 h-5" />,
    },
    {
        name: 'Pay with Credit',
        path: '/credit',
        description: 'Applicable to AltBank accounts only.',
        icon: <Wallet className="w-5 h-5" />,
    },
    {
        name: 'Pay in Instalment',
        path: '/installment',
        description: 'Make instalment payments',
        icon: <Repeat className="w-5 h-5" />,
    },
];

const Sidebar = ({ onClose }: { onClose?: () => void }) => {
    const pathname = usePathname();
    const [showModal, setShowModal] = useState(false);

    const handleCancelClick = () => setShowModal(true);
    const handleConfirmCancel = () => {
        setShowModal(false);
        if (onClose) onClose();
    };
    const handleDismissModal = () => setShowModal(false);

    return (
        <aside className="w-[400px] bg-white shadow-md flex flex-col relative rounded-br-2xl pb-6">
            {/* Close Button */}
            <button
                className="absolute top-20 right-4 text-gray-500 hover:text-gray-800"
                onClick={handleCancelClick}
                aria-label="Close"
            >
                <X className="w-5 h-5" />
            </button>


            {/* Header */}
            <div className="pt-30 px-6 text-center">
                <div className="text-2xl font-bold text-purple-700 flex items-center justify-center gap-2 mb-2">
                    {/* Replace with your actual logo if needed */}
                    <div className="w-5 h-5 bg-[url('/altpay-logo.svg')] bg-contain bg-no-repeat" />
                    <span className="text-black font-semibold">
                        alt<span className="text-purple-700">pay</span>
                    </span>
                </div>
                <p className="text-sm text-gray-600">Select Payment Method</p>
            </div>


            <ul className="mt-6 flex-1 font-sans text-[15px]">
                {methods.map(({ name, path, description, icon }) => {
                    const isActive = pathname.startsWith(path);
                    return (
                        <li key={path}>
                            <Link
                                href={path}
                                className={clsx(
                                    'flex items-start gap-4 px-6 py-4 transition-colors relative',
                                    isActive ? 'bg-[#f3ecff] text-indigo-700' : 'hover:bg-gray-50'
                                )}
                            >
                                {/* Left Highlight Bar */}
                                {isActive && (
                                    <span className="absolute left-0 top-0 h-full w-1 bg-indigo-600 rounded-r-md" />
                                )}

                                <div className="mt-1 text-purple-700">{icon}</div>
                                <div className="space-y-1">
                                    <p className={clsx(
                                        'font-semibold text-[16px] leading-[22px]',
                                        isActive ? 'text-indigo-700' : 'text-black'
                                    )}>
                                        {name}
                                    </p>
                                    <p className="text-[14px] text-gray-500 leading-[20px]">
                                        {description}
                                    </p>
                                </div>
                            </Link>
                        </li>
                    );
                })}
            </ul>


            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
                    <div className="bg-white rounded-xl max-w-[600px] w-full p-8 relative">
                        <button
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                            onClick={handleDismissModal}
                            aria-label="Dismiss"
                        >
                            <X className="w-5 h-5" />
                        </button>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">Cancel Payment</h3>
                        <p className="text-sm text-gray-500 mb-6 text-center">You are about to cancel this payment.</p>
                        <div className="flex justify-center space-x-4">
                            <button
                                className="flex-1 py-2 border border-indigo-600 text-gray-700 font-semibold rounded-md"
                                onClick={handleDismissModal}
                            >
                                Cancel
                            </button>
                            <button
                                className="flex-1 py-2 bg-indigo-700 text-white font-medium rounded-md"
                                onClick={handleConfirmCancel}
                            >
                                Continue
                            </button>
                        </div>
                        <p className="text-1xl text-center text-gray-400 mt-6">
                            Powered by <span className="text-indigo-600 font-semibold">altpay</span>
                        </p>
                    </div>
                </div>
            )}




        </aside>
    );
};

export default Sidebar;
