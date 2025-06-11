"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import React, { useState } from "react";

const methods = [
    {
        name: "Pay with Card",
        path: "/card",
        description: "Enter card details to make full payment",
        icon: (
            <svg
                width="24"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g clip-path="url(#clip0_834_3682)">
                    <path
                        d="M3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3ZM20 11H4V19H20V11ZM20 9V5H4V9H20ZM14 15H18V17H14V15Z"
                        fill="black"
                    />
                </g>
            </svg>
        ),
    },
    {
        name: "Pay with Bank Transfer",
        path: "/transfer",
        description: "Get bank details to make full payment",
        icon: (
            <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g clip-path="url(#clip0_834_4014)">
                    <path
                        d="M6 24H26V26H6V24ZM8 16H10V23H8V16ZM13 16H15V23H13V16ZM17 16H19V23H17V16ZM22 16H24V23H22V16ZM6 11L16 6L26 11V15H6V11ZM8 12.236V13H24V12.236L16 8.236L8 12.236ZM16 12C15.7348 12 15.4804 11.8946 15.2929 11.7071C15.1054 11.5196 15 11.2652 15 11C15 10.7348 15.1054 10.4804 15.2929 10.2929C15.4804 10.1054 15.7348 10 16 10C16.2652 10 16.5196 10.1054 16.7071 10.2929C16.8946 10.4804 17 10.7348 17 11C17 11.2652 16.8946 11.5196 16.7071 11.7071C16.5196 11.8946 16.2652 12 16 12Z"
                        fill="black"
                    />
                </g>
            </svg>
        ),
    },
    {
        name: "Recurring Payment",
        path: "/recurring",
        description: "Tokenize card for recurring payment",
        icon: (
            <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g clip-path="url(#clip0_834_7659)">
                    <path
                        d="M9.463 8.43301C11.2776 6.86067 13.599 5.99666 16 6.00001C21.523 6.00001 26 10.477 26 16C26 18.136 25.33 20.116 24.19 21.74L21 16H24C24.0001 14.4316 23.5392 12.8978 22.6747 11.5893C21.8101 10.2807 20.5799 9.25517 19.1372 8.64013C17.6944 8.0251 16.1027 7.84771 14.56 8.13003C13.0172 8.41234 11.5915 9.14191 10.46 10.228L9.463 8.43301ZM22.537 23.567C20.7224 25.1393 18.401 26.0034 16 26C10.477 26 6 21.523 6 16C6 13.864 6.67 11.884 7.81 10.26L11 16H8C7.99987 17.5684 8.46075 19.1022 9.32534 20.4108C10.1899 21.7193 11.4201 22.7449 12.8628 23.3599C14.3056 23.9749 15.8973 24.1523 17.44 23.87C18.9828 23.5877 20.4085 22.8581 21.54 21.772L22.537 23.567Z"
                        fill="black"
                    />
                </g>
            </svg>
        ),
    },
    {
        name: "Pay with Credit",
        path: "/credit",
        description: "Applicable to AltBank accounts only.",
        icon: (
            <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g clip-path="url(#clip0_834_4595)">
                    <path
                        d="M16 8C22.075 8 27 10.686 27 14V18C27 21.314 22.075 24 16 24C10.033 24 5.176 21.409 5.005 18.177L5 18V14C5 10.686 9.925 8 16 8ZM16 20C12.28 20 8.99 18.993 7 17.45V18C7 19.882 10.883 22 16 22C21.01 22 24.838 19.97 24.995 18.118L25 18L25.001 17.45C23.011 18.992 19.721 20 16 20ZM16 10C10.883 10 7 12.118 7 14C7 15.882 10.883 18 16 18C21.117 18 25 15.882 25 14C25 12.118 21.117 10 16 10Z"
                        fill="black"
                    />
                </g>
            </svg>
        ),
    },
    {
        name: "Pay in Instalment",
        path: "/installment",
        description: "Make instalment payments",
        icon: (
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M11.9508 7.95L10.5368 9.364L8.00078 6.828V20H6.00078V6.828L3.46578 9.364L2.05078 7.95L7.00078 3L11.9508 7.95ZM21.9508 16.05L17.0008 21L12.0508 16.05L13.4648 14.636L16.0018 17.172L16.0008 4H18.0008V17.172L20.5368 14.636L21.9508 16.05Z"
                    fill="black"
                />
            </svg>
        ),
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
        <section className="w-full md:w-[500px] bg-white">
            <div className="w-full md:w-[400px] flex justify-end p-10">
                <div className="md:hidden flex items-center justify-center text-black pr-30">
                    <h1 className="text-[20px]">Payment</h1>
                </div>
                <button onClick={handleCancelClick} aria-label="Close" className="hidden lg:block">
                    <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M13 1.00005L1 13M0.999949 1L12.9999 13"
                            stroke="black"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </button>
            </div>

            <div className="sm:hidden flex items-center justify-center gap-3 pr-10">
                <div className="w-8 h-8 rounded-full  flex items-center justify-center text-white text-sm font-bold">
                    <svg width="26" height="32" viewBox="0 0 26 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.49379 14.1541L0.577026 18.0047L3.21622 13.1638L8.39181 6.23446L11.6167 5.06934L4.49379 14.1541Z" fill="#592FFF" />
                        <path d="M4.48096 20.7049L0.26123 24.8724L3.15596 19.7734L15.0274 3.8373L18.7122 2.50586L4.48096 20.7049Z" fill="#592FFF" />
                        <path d="M7.77205 23.0178L1.83508 29.3487L6.36294 22.0287L21.7783 1.39781L25.7143 0L7.77205 23.0178Z" fill="#592FFF" />
                        <path d="M25.739 6.45138L11.024 25.3037L5.01941 31.7253L9.61443 24.3133L25.739 2.73047V6.45138Z" fill="#592FFF" />
                        <path d="M25.7387 12.8131L14.2345 27.5604L9.80811 32.0002L12.9029 26.6248L25.7387 9.37988V12.8131Z" fill="#592FFF" />
                        <path d="M25.7386 19.1356L20.404 25.951L16.4503 29.8286L19.1132 24.9935L25.7386 16.1035V19.1356Z" fill="#592FFF" />
                    </svg>

                </div>
                <div>
                    <p className="text-lg font-semibold text-zinc-900">₦100,000.00</p>
                    <p className="text-xs text-gray-500">Transaction Amount</p>
                </div>
            </div>

            {/* Header */}
            <div className="mt-4 px-6 md:w-[400px] ">
                <div className=" hidden lg:flex text-3xl font-bold text-purple-700  items-center justify-center gap-2 mb-2 ">
                    <div className="w-5 h-5 bg-[url('/altpay-logo.svg')] bg-contain bg-no-repeat" />
                    <svg width="172" height="56" viewBox="0 0 172 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.82112 24.7695L0.966797 31.5079L5.58539 23.0365L14.6427 10.91L20.2862 8.87107L7.82112 24.7695Z" fill="#592FFF" />
                        <path d="M7.79858 36.2334L0.414062 43.5266L5.47984 34.6033L26.2549 6.71513L32.7032 4.3851L7.79858 36.2334Z" fill="#592FFF" />
                        <path d="M13.5577 40.2812L3.16797 51.3603L11.0917 38.5503L38.0685 2.44618L44.9566 1.52588e-05L13.5577 40.2812Z" fill="#592FFF" />
                        <path d="M44.9995 11.2893L19.2482 44.281L8.74023 55.5187L16.7815 42.5477L44.9995 4.77775V11.2893Z" fill="#592FFF" />
                        <path d="M44.9997 22.4226L24.8673 48.2305L17.1211 56L22.537 46.5931L44.9997 16.4145V22.4226Z" fill="#592FFF" />
                        <path d="M44.9986 33.4867L35.6631 45.4137L28.7441 52.1995L33.4041 43.7381L44.9986 28.1805V33.4867Z" fill="#592FFF" />
                        <path d="M165.73 16.8077H171.587L158.138 48H152.325L156.707 37.8484L148.16 16.8077H154.321L157.574 26.0483L159.613 32.0785L161.826 26.1784L165.73 16.8077Z" fill="#592FFF" />
                        <path d="M139.367 19.7577L139.54 16.8077H144.616V38.1955H139.627L139.367 35.0719C138.152 37.5881 134.812 38.8028 132.425 38.8462C126.092 38.8896 121.406 34.9851 121.406 27.4799C121.406 20.1048 126.309 16.2437 132.556 16.2871C135.419 16.2871 138.152 17.632 139.367 19.7577ZM133.033 21.0158C129.519 21.0158 126.699 23.4019 126.699 27.4799C126.699 31.5579 129.519 33.9873 133.033 33.9873C141.362 33.9873 141.362 21.0158 133.033 21.0158Z" fill="#592FFF" />
                        <path d="M106.885 33.5969C110.485 33.5969 112.958 30.8638 112.958 27.5233C112.958 24.1828 110.702 21.4497 106.885 21.4497C103.067 21.4497 100.811 24.1828 100.811 27.5233C100.811 30.8638 103.284 33.5969 106.885 33.5969ZM100.334 48H95.041V16.8077H99.9867L100.334 19.7577C101.982 17.3717 104.846 16.3305 107.275 16.3305C113.869 16.3305 118.251 21.2328 118.251 27.5233C118.251 33.7704 114.303 38.7161 107.449 38.7161C105.193 38.7161 101.852 38.0219 100.334 35.6793V48Z" fill="#592FFF" />
                        <path d="M89.5718 15.8878V18.2757H78.2793V15.8878H89.5718ZM81.8072 10.2184H84.5649V33.3734C84.5649 34.3594 84.7343 35.1348 85.0733 35.6997C85.4122 36.2543 85.8538 36.6497 86.3982 36.886C86.9425 37.1119 87.5228 37.2249 88.139 37.2249C88.4985 37.2249 88.8066 37.2044 89.0634 37.1633C89.3202 37.1119 89.5461 37.0606 89.7413 37.0092L90.3267 39.4896C90.0596 39.5923 89.731 39.6847 89.3407 39.7669C88.9504 39.8593 88.4677 39.9055 87.8925 39.9055C86.886 39.9055 85.9155 39.6847 84.9808 39.2431C84.0565 38.8014 83.2965 38.1441 82.7008 37.2711C82.1051 36.3981 81.8072 35.3146 81.8072 34.0205V10.2184Z" fill="black" />
                        <path d="M74.3497 8V39.5512H71.6074V8H74.3497Z" fill="black" />
                        <path d="M56.78 40.0904C55.3523 40.0904 54.048 39.8131 52.8669 39.2585C51.6858 38.6936 50.746 37.8822 50.0476 36.8243C49.3492 35.7562 49 34.4621 49 32.9421C49 31.7712 49.2208 30.7853 49.6625 29.9841C50.1041 29.183 50.7306 28.5257 51.542 28.0122C52.3533 27.4987 53.3136 27.093 54.4229 26.7951C55.5321 26.4973 56.7543 26.2662 58.0895 26.1019C59.4144 25.9375 60.5338 25.7938 61.4479 25.6705C62.3723 25.5473 63.0758 25.3521 63.5585 25.0851C64.0412 24.818 64.2826 24.3867 64.2826 23.791V23.2364C64.2826 21.6239 63.7999 20.3555 62.8345 19.4311C61.8793 18.4965 60.503 18.0292 58.7057 18.0292C57.0008 18.0292 55.6091 18.4041 54.5307 19.1538C53.4626 19.9036 52.7128 20.7869 52.2814 21.8036L49.6779 20.8639C50.2119 19.5698 50.9514 18.5376 51.8963 17.7673C52.8412 16.9867 53.8991 16.427 55.0699 16.0881C56.2408 15.7389 57.427 15.5643 58.6287 15.5643C59.5325 15.5643 60.4722 15.6824 61.4479 15.9186C62.4339 16.1548 63.348 16.5656 64.1902 17.1511C65.0324 17.7262 65.7153 18.5325 66.2391 19.5698C66.7629 20.5968 67.0248 21.9012 67.0248 23.4829V39.5512H64.2826V35.8076H64.1131C63.7845 36.506 63.2966 37.1838 62.6496 37.8411C62.0025 38.4984 61.1912 39.0376 60.2155 39.4587C59.2398 39.8798 58.0946 40.0904 56.78 40.0904ZM57.1497 37.5792C58.6081 37.5792 59.8714 37.2557 60.9395 36.6087C62.0077 35.9616 62.8293 35.104 63.4045 34.0359C63.9899 32.9575 64.2826 31.7712 64.2826 30.4771V27.057C64.0772 27.2522 63.7331 27.4268 63.2504 27.5808C62.778 27.7349 62.2285 27.8735 61.602 27.9968C60.9858 28.1098 60.3695 28.2073 59.7533 28.2895C59.1371 28.3717 58.5824 28.4436 58.0895 28.5052C56.7543 28.6695 55.6142 28.9263 54.6694 29.2755C53.7245 29.6247 53.0004 30.1074 52.4971 30.7236C51.9939 31.3296 51.7422 32.1102 51.7422 33.0653C51.7422 34.5032 52.2558 35.6176 53.2828 36.4084C54.3099 37.1889 55.5988 37.5792 57.1497 37.5792Z" fill="black" />
                    </svg>

                </div>
                <p className="text-xs text-black font-light text-center lg:hidden ">
                    How would you like to Proceed?
                </p>
                <p className="text-xs text-gray-600 font-light text-center sm:block hidden">
                    Select Payment Method
                </p>
            </div>

            <ul className="flex flex-col mt-6 md:w-[400px]">
                {methods.map(({ name, path, description, icon }) => {
                    const isActive = pathname.startsWith(path);

                    return (
                        <Link
                            key={path}
                            href={path}
                            onClick={() => {
                                if (onClose) onClose();
                            }}
                        >
                            <li
                                className={`w-full flex items-start gap-4 px-4 py-5 border-y border-y-[#E6E6E6] ${isActive
                                    ? "sm:bg-[#f3ecff] sm:border-l-4 border-l-[#592FFF]"
                                    : "hover:bg-gray-50"
                                    }`}
                            >
                                <div>{icon}</div>
                                <div className="flex items-center justify-between w-full">
                                    <div>
                                        <h4
                                            className={`font-semibold text-[16px] ${isActive
                                                ? "text-black sm:text-indigo-700"
                                                : "text-black"
                                                }`}
                                        >
                                            {name}
                                        </h4>
                                        <p className="text-sm text-gray-500 leading-[20px]">
                                            {description}
                                        </p>
                                    </div>
                                    <svg
                                        className="mr-2 sm:hidden"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M9 18L15 12L9 6"
                                            stroke="#000000"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            </li>
                        </Link>
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
                        <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                            Cancel Payment
                        </h3>
                        <p className="text-sm text-gray-500 mb-6 text-center">
                            You are about to cancel this payment.
                        </p>
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
                            Powered by{" "}
                            <span className="text-indigo-600 font-semibold">altpay</span>
                        </p>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Sidebar;
