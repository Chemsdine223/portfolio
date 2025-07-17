import React, { useState } from "react";
import sedad from "../Assets/sedad_logo.png";
import maurinet from "../Assets/maurinet.png";

const SedadBank = () => {
  const [step, setStep] = useState("phone"); // "phone" | "otp" | "success"
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");

  const sendMessageToFlutter = (type) => {
    if (window.ClosePageChannel && window.ClosePageChannel.postMessage) {
      window.ClosePageChannel.postMessage(type);
    } else {
      console.warn("ClosePageChannel is not available");
    }
  };

  const handleSendOtp = () => {
    if (phone.length < 8) {
      alert("Numéro invalide");
      sendMessageToFlutter("error");
      return;
    }
    setStep("otp");
  };

  const handlePayment = () => {
    if (otp.length < 6) {
      alert("OTP invalide");
      sendMessageToFlutter("error");
      return;
    }
    setStep("success");

    // setTimeout(() => {
    //   sendMessageToFlutter("close");
    // }, 2000);
  };

  const renderPhoneStep = () => (
    <>
      <div className="text-center mb-4">
        <img src={sedad} alt="SedadBank" className="w-14 mx-auto mb-2" />
        <h2 className="font-semibold text-lg">Sedad Bank</h2>
      </div>
      <input
        type="tel"
        placeholder="33 22 33 01"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="border p-3 rounded w-full text-center"
      />
      <button
        onClick={handleSendOtp}
        className="mt-4 bg-blue-600 text-white w-full py-2 rounded"
      >
        Envoyez-moi un OTP
      </button>
    </>
  );

  const renderOtpStep = () => (
    <>
      <div className="text-center mb-4">
        <img src={sedad} alt="SedadBank" className="w-14 mx-auto mb-2" />
        <h2 className="font-semibold text-lg">Sedad Bank</h2>
        <p className="text-sm mt-2 text-gray-500">
          Entrez l'OTP envoyé au {phone}
        </p>
      </div>
      <input
        type="text"
        maxLength={6}
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        className="border p-3 rounded w-full text-center tracking-widest text-xl"
      />
      <button
        onClick={handlePayment}
        className="mt-4 bg-blue-600 text-white w-full py-2 rounded"
      >
        Payer 9 000,0 MRU
      </button>
    </>
  );

  const renderSuccessStep = () => (
    <div className="text-center">
      <div className="flex justify-center my-4">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
          <span className="text-white text-3xl">✓</span>
        </div>
      </div>
      <h2 className="text-xl font-bold mb-4">Payment Success!</h2>
      <table className="text-left text-sm mx-auto mb-6">
        <tbody>
          <tr>
            <td className="pr-4">Code de paiement</td>
            <td className="font-semibold">001234</td>
          </tr>
          <tr>
            <td className="pr-4">Date de paiement</td>
            <td className="font-semibold">19-09-23 20:18:40</td>
          </tr>
          <tr>
            <td className="pr-4">ID de la transaction</td>
            <td className="font-semibold">TR123456789</td>
          </tr>
        </tbody>
      </table>
      <button
        onClick={() => sendMessageToFlutter("close")}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Retour à Maurinet
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-white px-6 py-10 font-sans">
      <div className="flex items-center gap-3 mb-6">
        <img src={maurinet} className="w-10 h-10 rounded-full" alt="maurinet" />
        <div>
          <p className="text-sm text-gray-500">Pay Maurinet</p>
          <h1 className="text-xl font-bold">9 000,0 MRU</h1>
        </div>
      </div>

      {step === "phone" && renderPhoneStep()}
      {step === "otp" && renderOtpStep()}
      {step === "success" && renderSuccessStep()}
    </div>
  );
};

export default SedadBank;
