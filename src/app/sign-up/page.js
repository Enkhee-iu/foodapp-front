"use client";

import { useState } from "react";
import Step1 from "../components/step1";
import Step2 from "../components/step2";

const Home = () => {
  const [step, setStep] = useState(1);

  // Энд бүх өгөгдөл хадгална
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
  });

  const increaseStep = (data) => {
    if (data) {
      // дата ирвэл formData-д нэмнэ
      setFormData((prev) => ({ ...prev, ...data }));
    }
    setStep((prev) => prev + 1);
  };

  const reduceStep = () => setStep((prev) => prev - 1);

  return (
    <div className="w-screen h-screen justify-center items-center flex">
      {step === 1 && <Step1 increaseStep={increaseStep} />}

      {step === 2 && (
        <Step2
          email={formData.email} // ← EMAIL ЭНДЭЭС ЯВНА!!!
          increaseStep={increaseStep}
          reduceStep={reduceStep}
        />
      )}
    </div>
  );
};

export default Home;
