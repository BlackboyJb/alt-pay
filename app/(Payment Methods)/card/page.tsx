"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Info } from "lucide-react";

export default function CardPage() {
    const router = useRouter();

    const [cardNumber, setCardNumber] = useState("");
    const [expiry, setExpiry] = useState("");
    const [cvv, setCvv] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const isFormValid = [cardNumber, expiry, cvv].every((val) => val.trim() !== "");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!isFormValid) return;

        setIsSubmitting(true);
        setTimeout(() => router.push("/card/otp"), 1200); // Simulate delay
    };

    const handleBack = () => {
        if (window.innerWidth < 640) {
            localStorage.setItem("showMethods", "true");
            window.dispatchEvent(new Event("resize"));
        } else {
            window.history.back();
        }
    };

    return (
        <div className="max-w-lg mx-auto bg-white rounded-lg p-4 pt-6 sm:mt-20">
            <div className="mb-6 text-center">
                <h2 className="text-2xl font-semibold text-zinc-800 lg:hidden">Pay with Card</h2>
                <h2 className="hidden lg:block text-2xl font-semibold text-zinc-800">Card Details</h2>
                <p className="text-md text-black pt-2">Enter card details to make payment</p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-y-5">
                {/* Card Number */}
                <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-1">
                        Card Number
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                            placeholder="Enter number"
                            className="w-full border text-gray-600 border-gray-400 px-3 py-2 rounded-lg pr-12 focus:outline-none focus:border-indigo-800"
                        />
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                            {/* Card Icon */}
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3ZM20 11H4V19H20V11ZM20 9V5H4V9H20ZM14 15H18V17H14V15Z"
                                    fill="black"
                                />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Expiry + CVV */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-zinc-700 mb-1">
                            Card Valid Till
                        </label>
                        <input
                            type="text"
                            value={expiry}
                            onChange={(e) => setExpiry(e.target.value)}
                            placeholder="MM/YY"
                            className="w-full border text-gray-600 border-gray-400 px-3 py-2 rounded-lg focus:outline-none focus:border-indigo-600"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-zinc-700 mb-1">
                            CVV
                        </label>
                        <input
                            type="password"
                            value={cvv}
                            onChange={(e) => setCvv(e.target.value)}
                            placeholder="Enter number"
                            className="w-full border text-gray-600 border-gray-400 px-3 py-2 rounded-lg focus:outline-none focus:border-indigo-600"
                            required
                        />
                    </div>
                </div>

                {/* Info */}
                <div className="bg-zinc-100 text-xs text-zinc-600 px-3 py-3 rounded flex items-center space-x-2">
                    <Info size={14} className="text-gray-500" />
                    <span>Transaction cost of ₦50.00 applies</span>
                </div>

                {/* Actions */}
                <div className="grid grid-cols-2 gap-4">
                    <button
                        type="button"
                        onClick={handleBack}
                        className="py-2 border border-indigo-600 text-gray-700 font-semibold rounded-md"
                    >
                        Back
                    </button>

                    <button
                        type="submit"
                        disabled={!isFormValid || isSubmitting}
                        className={`py-3 rounded text-sm font-medium transition ${!isFormValid || isSubmitting
                            ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                            : "bg-purple-600 text-white hover:bg-purple-700"
                            }`}
                    >
                        {isSubmitting ? "Processing..." : "Pay ₦100,050.00"}
                    </button>
                </div>
            </form>

            {/* Footer */}
            <footer className=" text-center pt-6 sm:pt-10">
                <p className="text-sm text-gray-500 font-medium flex items-center justify-center gap-1">
                    Powered by
                    <span className="ml-1">
                        <svg
                            width="70"
                            height="20"
                            viewBox="0 0 70 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M3.16672 8.84596L0.71875 11.2525L2.36825 8.22704L5.60299 3.89617L7.61855 3.16797L3.16672 8.84596Z"
                                fill="#592FFF"
                            />
                            <path
                                d="M3.15881 12.9408L0.521484 15.5455L2.33069 12.3586L9.75037 2.39856L12.0533 1.56641L3.15881 12.9408Z"
                                fill="#592FFF"
                            />
                            <path
                                d="M5.21646 14.3861L1.50586 18.343L4.33577 13.7679L13.9704 0.87363L16.4304 0L5.21646 14.3861Z"
                                fill="#592FFF"
                            />
                            <path
                                d="M16.4458 4.03163L7.24894 15.8143L3.49609 19.8278L6.36798 15.1953L16.4458 1.70605V4.03163Z"
                                fill="#592FFF"
                            />
                            <path
                                d="M16.4449 8.00806L9.2548 17.2251L6.48828 20L8.42255 16.6404L16.4449 5.8623V8.00806Z"
                                fill="#592FFF"
                            />
                            <path
                                d="M16.4458 11.9595L13.1117 16.2192L10.6406 18.6427L12.3049 15.6207L16.4458 10.0645V11.9595Z"
                                fill="#592FFF"
                            />
                            <path
                                d="M67.1374 5.52344H69.4801L64.1006 18.0004H61.7753L63.5279 13.9397L60.1094 5.52344H62.5735L63.875 9.21966L64.6906 11.6317L65.5756 9.27172L67.1374 5.52344Z"
                                fill="#592FFF"
                            />
                            <path
                                d="M56.5924 6.70285L56.6618 5.52283H58.6921V14.0779H56.6965L56.5924 12.8285C56.1065 13.835 54.7703 14.3209 53.8159 14.3382C51.2823 14.3556 49.4082 12.7938 49.4082 9.79171C49.4082 6.84168 51.3691 5.29724 53.868 5.3146C55.0133 5.3146 56.1065 5.85254 56.5924 6.70285ZM54.0588 7.20609C52.6532 7.20609 51.5253 8.16051 51.5253 9.79171C51.5253 11.4229 52.6532 12.3947 54.0588 12.3947C57.3907 12.3947 57.3907 7.20609 54.0588 7.20609Z"
                                fill="#592FFF"
                            />
                            <path
                                d="M43.5987 12.2386C45.0391 12.2386 46.0282 11.1453 46.0282 9.80914C46.0282 8.47295 45.1258 7.3797 43.5987 7.3797C42.0717 7.3797 41.1693 8.47295 41.1693 9.80914C41.1693 11.1453 42.1584 12.2386 43.5987 12.2386ZM40.9784 17.9998H38.8613V5.52292H40.8396L40.9784 6.70293C41.6378 5.74851 42.7831 5.33203 43.7549 5.33203C46.3926 5.33203 48.1453 7.29294 48.1453 9.80914C48.1453 12.308 46.5661 14.2863 43.8243 14.2863C42.922 14.2863 41.5858 14.0086 40.9784 13.0715V17.9998Z"
                                fill="#592FFF"
                            />
                            <path
                                d="M36.6732 5.15544V6.1106H32.1562V5.15544H36.6732ZM33.5674 2.8877H34.6705V12.1497C34.6705 12.5441 34.7383 12.8543 34.8738 13.0802C35.0094 13.3021 35.1861 13.4602 35.4038 13.5547C35.6215 13.6451 35.8537 13.6903 36.1001 13.6903C36.2439 13.6903 36.3672 13.6821 36.4699 13.6656C36.5726 13.6451 36.663 13.6245 36.741 13.604L36.9752 14.5961C36.8684 14.6372 36.7369 14.6742 36.5808 14.7071C36.4247 14.744 36.2316 14.7625 36.0015 14.7625C35.5989 14.7625 35.2107 14.6742 34.8369 14.4975C34.4671 14.3209 34.1631 14.058 33.9248 13.7088C33.6866 13.3596 33.5674 12.9261 33.5674 12.4085V2.8877Z"
                                fill="black"
                            />
                            <path d="M30.5852 2V14.6205H29.4883V2H30.5852Z" fill="black" />
                            <path
                                d="M23.5573 14.8358C22.9863 14.8358 22.4645 14.7249 21.9921 14.5031C21.5196 14.2771 21.1437 13.9526 20.8644 13.5294C20.585 13.1022 20.4453 12.5845 20.4453 11.9765C20.4453 11.5082 20.5336 11.1138 20.7103 10.7933C20.8869 10.4729 21.1375 10.21 21.4621 10.0046C21.7866 9.79915 22.1708 9.63687 22.6145 9.51774C23.0581 9.3986 23.547 9.30616 24.0811 9.24043C24.6111 9.1747 25.0589 9.11718 25.4245 9.06789C25.7942 9.01859 26.0756 8.94053 26.2687 8.83372C26.4618 8.7269 26.5584 8.55436 26.5584 8.31608V8.09424C26.5584 7.44924 26.3653 6.94188 25.9791 6.57214C25.597 6.19829 25.0465 6.01137 24.3276 6.01137C23.6456 6.01137 23.089 6.16132 22.6576 6.46122C22.2303 6.76112 21.9304 7.11442 21.7579 7.52114L20.7165 7.14524C20.9301 6.6276 21.2259 6.21472 21.6038 5.90661C21.9818 5.59438 22.4049 5.37048 22.8733 5.23491C23.3416 5.09523 23.8161 5.02539 24.2968 5.02539C24.6583 5.02539 25.0342 5.07264 25.4245 5.16712C25.8189 5.26161 26.1845 5.42594 26.5214 5.66011C26.8583 5.89017 27.1315 6.21267 27.341 6.6276C27.5505 7.03842 27.6553 7.56017 27.6553 8.19283V14.6202H26.5584V13.1227H26.4906C26.3591 13.4021 26.164 13.6732 25.9051 13.9361C25.6463 14.1991 25.3218 14.4147 24.9315 14.5832C24.5412 14.7516 24.0831 14.8358 23.5573 14.8358ZM23.7052 13.8314C24.2886 13.8314 24.7939 13.702 25.2211 13.4431C25.6484 13.1843 25.977 12.8413 26.2071 12.414C26.4413 11.9827 26.5584 11.5082 26.5584 10.9905V9.6225C26.4762 9.70055 26.3386 9.77039 26.1455 9.83202C25.9565 9.89364 25.7367 9.9491 25.4861 9.9984C25.2396 10.0436 24.9931 10.0826 24.7466 10.1155C24.5001 10.1483 24.2783 10.1771 24.0811 10.2018C23.547 10.2675 23.091 10.3702 22.7131 10.5099C22.3351 10.6496 22.0455 10.8426 21.8442 11.0891C21.6429 11.3315 21.5422 11.6437 21.5422 12.0258C21.5422 12.601 21.7476 13.0467 22.1584 13.363C22.5693 13.6753 23.0848 13.8314 23.7052 13.8314Z"
                                fill="black"
                            />
                        </svg>
                    </span>
                </p>
            </footer>
        </div>
    );
}
