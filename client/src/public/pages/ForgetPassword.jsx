"use client";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Step1Image from "@/assets/Informative-pages/Banner-page/Emailimage.json";
import Step2Image from "@/assets/Informative-pages/Banner-page/OtpImage.json";
import Step3Image from "@/assets/Informative-pages/Banner-page/ConfirmPassword.json";
import Step4Image from "@/assets/Informative-pages/Banner-page/SuccessPageImage.json";

import Lottie from "lottie-react";
import { ConfettiSideCannons } from "@/components/magicui/confetti";
import { Button } from "@/components/ui/button";

import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";

export default function ForgetPassword() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  // React Hook Form setup
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const password = watch("password", "");

  // Map each step to a Lottie animation
  const stepImages = {
    1: Step1Image,
    2: Step2Image,
    3: Step3Image,
    4: Step4Image,
  };

  const onSubmitStep1 = (data) => {
    console.log("Email submitted:", data.email);
    setStep(2);
  };

  const onSubmitStep2 = (data) => {
    console.log("OTP verified:", data.otp);
    setStep(3);
  };

  const onSubmitStep3 = (data) => {
    console.log("Password reset:", data.password);
    setStep(4);
  };


  
  const handleBackToLogin = () => {
    navigate("/login"); 
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Image */}
      <div className="hidden md:flex w-1/2 bg-top items-center justify-center">
        <Lottie
          animationData={stepImages[step]}
          loop={step !== 4} // loop for steps 1-3
          className="w-[85%] h-auto"
        />
      </div>

      {/* Right Side - Form */}
      <div className="flex w-full md:w-1/2 items-center justify-center p-6 bg-top">
        <div className="max-w-md w-full bg-transparent border-2 border-black p-6 rounded-lg shadow-2xl">
          {/* Stepper Nav */}
          <ul className="flex justify-between mb-6">
            {["Email", "OTP", "Password", "Done"].map((label, index) => {
              const currentIndex = index + 1;
              return (
                <li key={index} className="flex flex-col items-center flex-1">
                  <div
                    className={`flex items-center outline-none border-black border-2 justify-center w-10 h-10 rounded-full font-bold ${
                      step === currentIndex
                        ? "bg-black text-white"
                        : step > currentIndex
                        ? "bg-green-500 text-white"
                        : "bg-transparent text-black"
                    }`}
                  >
                    {step > currentIndex ? "✓" : currentIndex}
                  </div>
                  <span className="mt-2 font-mont font-medium text-xs">
                    {label}
                  </span>
                </li>
              );
            })}
          </ul>

          {/* Stepper Content */}
          <form className="space-y-6">
            {step === 1 && (
              <div>
                <h2 className="text-lg font-semibold mb-4 font-syne">
                  Enter Email
                </h2>
                <input
                  type="email"
                  placeholder="Enter your email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email",
                    },
                  })}
                  className="border-2 border-black outline-none font-mont-alt text-black p-2 rounded w-full"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm font-mont-alt font-medium mt-1">
                    {errors.email.message}
                  </p>
                )}
                <button
                  type="button"
                  onClick={handleSubmit(onSubmitStep1)}
                  className="bg-black font-mont font-semibold uppercase tracking-[3px] text-white w-full py-2 rounded mt-4"
                >
                  Submit
                </button>
              </div>
            )}

            {step === 2 && (
              <div>
                <h2 className="text-lg font-semibold mb-4 font-syne">
                  Enter OTP
                </h2>
                <input
                  type="text"
                  placeholder="Enter 6-digit OTP"
                  {...register("otp", {
                    required: "OTP is required",
                    minLength: { value: 6, message: "OTP must be 6 digits" },
                    maxLength: { value: 6, message: "OTP must be 6 digits" },
                  })}
                  className="border-2 border-black outline-none font-mont-alt text-black p-2 rounded w-full"
                />
                {errors.otp && (
                  <p className="text-red-500 text-sm font-mont-alt font-medium mt-1">
                    {errors.otp.message}
                  </p>
                )}
                <button
                  type="button"
                  onClick={handleSubmit(onSubmitStep2)}
                  className="bg-black font-mont font-semibold uppercase tracking-[3px] text-white w-full py-2 rounded mt-4"
                >
                  Verify OTP
                </button>
              </div>
            )}

            {step === 3 && (
              <div>
                <h2 className="text-lg font-semibold mb-4 font-syne">
                  Reset Password
                </h2>
                <input
                  type="password"
                  placeholder="New Password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                  className="border-2 border-black outline-none font-mont-alt text-black p-2 rounded w-full mb-3"
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  {...register("confirmPassword", {
                    required: "Confirm your password",
                    validate: (value) =>
                      value === password || "Passwords do not match",
                  })}
                  className="border-2 border-black outline-none font-mont-alt text-black p-2 rounded w-full"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm font-mont-alt font-medium mt-1">
                    {errors.password.message}
                  </p>
                )}
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm font-mont-alt font-medium mt-1">
                    {errors.confirmPassword.message}
                  </p>
                )}

                <ConfettiSideCannons
                  type="button"
                  onClick={handleSubmit(onSubmitStep3)}
                  className="bg-black font-mont font-semibold uppercase tracking-[3px] text-white w-full py-2 rounded mt-4"
                >
                  Submit
                </ConfettiSideCannons>
              </div>
            )}

            {step === 4 && (
              <div className="text-center py-6">
                <h2 className="text-xl font-bold text-green-600">
                  🎉 Password reset successfully!
                </h2>
                <Button
                  type="button"
                  onClick={handleBackToLogin}
                  className="bg-black font-mont font-semibold uppercase tracking-[3px] px-4 py-2 rounded mt-6"
                >
                  Back to Login
                </Button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
