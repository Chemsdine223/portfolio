import React from "react";
import sedad from "../Assets/sedad_logo.png";
import maurinet from "../Assets/maurinet.png";

const banks = [
  {
    name: "Sedad Bank",
    icon: "../Assets/sedad_logo.png",
    link: "next-payment/sedadbank",
  },
];

// window.location.href = "https://portfolio-zeta-self-68.vercel.app/next-payment/sedadbank";

const PaymentMethods = () => {
  const handleBankClick = (link) => {
    window.location.href = link; // Opens your app via deep link
  };

  return (
    <div className="min-h-screen bg-white px-4 py-6 text-gray-800 font-sans">
      <div className="flex items-center mb-6">
        <button
          onClick={() => {
            if (
              window.ClosePageChannel &&
              window.ClosePageChannel.postMessage
            ) {
              window.ClosePageChannel.postMessage("close");
            } else {
              console.warn("ClosePageChannel is not available");
            }
          }}
        >
          <span className="text-2xl mr-2">←</span>
        </button>
        <h1 className="text-2xl font-semibold">
          <span className="text-blue-600">Next</span>Payments
        </h1>
      </div>

      <div className="flex items-center gap-4 mb-6">
        <img
          src={maurinet}
          alt="Pay Maurinet"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="text-sm text-gray-500">Pay Maurinet</p>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold">9 000,0</span>
            <span className="bg-black text-white text-xs px-2 py-0.5 rounded">
              MRU
            </span>
          </div>
        </div>
      </div>

      <h2 className="text-lg font-semibold mb-3">Payment Methods</h2>

      <div className="bg-gray-50 rounded-lg divide-y border border-gray-200">
        {banks.map((bank) => (
          <button
            key={bank.name}
            onClick={() => handleBankClick(bank.link)}
            className="w-full flex items-center justify-between px-4 py-3 hover:bg-gray-100"
          >
            <div className="flex items-center gap-3">
              <img src={sedad} alt={bank.name} className="w-6 h-6" />
              <span className="text-base">{bank.name}</span>
            </div>
            <span className="text-gray-400 text-xl">›</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default PaymentMethods;
