import React, { useState } from "react";

export default function ForgetPassword() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);
  const resetSteps = () => setStep(1);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      {/* Stepper Nav */}
      <ul className="flex justify-between mb-8">
        {["Account Details", "Personal Info", "Social Links"].map(
          (label, index) => {
            const currentIndex = index + 1;
            return (
              <li
                key={index}
                className="flex flex-col items-center flex-1 relative"
              >
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full font-bold ${
                    step === currentIndex
                      ? "bg-blue-500 text-white"
                      : step > currentIndex
                      ? "bg-green-500 text-white"
                      : "bg-gray-300 text-black"
                  }`}
                >
                  {step > currentIndex ? "✓" : currentIndex}
                </div>
                <span className="mt-2 text-sm">{label}</span>
                {currentIndex < 3 && (
                  <div className="absolute top-5 left-1/2 w-full h-0.5 bg-gray-300 -z-10"></div>
                )}
              </li>
            );
          }
        )}
      </ul>

      {/* Stepper Content */}
      <form className="space-y-6">
        {step === 1 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Account Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="border p-2 rounded w-full"
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border p-2 rounded w-full"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="border p-2 rounded w-full"
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="border p-2 rounded w-full"
                required
              />
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Personal Info</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="file"
                className="border p-2 rounded w-full"
                required
              />
              <input
                type="text"
                placeholder="YYYY-MM-DD"
                className="border p-2 rounded w-full"
                required
              />
              <select className="border p-2 rounded w-full" required>
                <option value="">Select Country</option>
                <option value="usa">USA</option>
                <option value="uk">UK</option>
                <option value="france">France</option>
                <option value="australia">Australia</option>
                <option value="spain">Spain</option>
              </select>
              <div className="flex gap-4 items-center">
                <label className="flex items-center gap-2">
                  <input type="radio" name="gender" required /> Male
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="gender" required /> Female
                </label>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Social Links</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Twitter URL"
                className="border p-2 rounded w-full"
              />
              <input
                type="text"
                placeholder="Facebook URL"
                className="border p-2 rounded w-full"
              />
              <input
                type="text"
                placeholder="Google+ URL"
                className="border p-2 rounded w-full"
              />
              <input
                type="text"
                placeholder="LinkedIn URL"
                className="border p-2 rounded w-full"
              />
            </div>
          </div>
        )}

        {step > 3 && (
          <div className="text-center py-10">
            <h2 className="text-2xl font-bold text-green-600">
              🎉 Your Form has been Submitted!
            </h2>
          </div>
        )}

        {/* Buttons */}
        <div className="flex justify-between mt-6">
          {step > 1 && step <= 3 && (
            <button
              type="button"
              onClick={prevStep}
              className="bg-gray-400 text-white px-4 py-2 rounded"
            >
              Back
            </button>
          )}
          {step < 3 && (
            <button
              type="button"
              onClick={nextStep}
              className="bg-blue-500 text-white px-4 py-2 rounded ml-auto"
            >
              Next
            </button>
          )}
          {step === 3 && (
            <button
              type="button"
              onClick={nextStep}
              className="bg-green-500 text-white px-4 py-2 rounded ml-auto"
            >
              Finish
            </button>
          )}
          {step > 3 && (
            <button
              type="button"
              onClick={resetSteps}
              className="bg-blue-500 text-white px-4 py-2 rounded ml-auto"
            >
              Reset
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
