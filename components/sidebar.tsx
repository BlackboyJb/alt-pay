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
        <section className="w-[400px] bg-white">
            <div className='w-full flex justify-end p-6'>
                <button onClick={handleCancelClick} aria-label="Close">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 1.00005L1 13M0.999949 1L12.9999 13" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>
                </button>
            </div>

            {/* Header */}
            <div className="mt-4 px-6 ">
                <div className="text-3xl font-bold text-purple-700 flex items-center justify-center gap-2 mb-2">
                    <div className="w-5 h-5 bg-[url('/altpay-logo.svg')] bg-contain bg-no-repeat" />
                    <span className="text-black font-semibold">
                        alt<span className="text-purple-700">pay</span>
                    </span>
                </div>
                <p className="text-xs text-gray-600 font-light text-center">Select Payment Method</p>
            </div>

            <ul className='flex flex-col mt-6'>
                {
                    methods.map(({ name, path, description, icon }) => {
                        const isActive = pathname.startsWith(path);

                        return (
                            <Link key={path} href={path}>
                                <li className={`w-full flex items-start gap-4 px-4 py-5 ${isActive ? ' bg-[#f3ecff] border-l-4 border-l-[#592FFF] border-y border-y-[#E6E6E6] ' : ' hover:bg-gray-50 '}`}>
                                    <div className="text-purple-700">{icon}</div>
                                    <div className="">
                                        <h4 className={`font-semibold text-[16px] ${isActive ? ' text-indigo-700 ' : ' text-black '}`}>
                                            {name}
                                        </h4>
                                        <p className="text-sm text-gray-500 leading-[20px]">
                                            {description}
                                        </p>
                                    </div>
                                </li>
                            </Link>
                        );
                    })
                }
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
            )
            }
        </section>
    );
};

export default Sidebar;
