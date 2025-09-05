import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";
import loginAnimation from "@/assets/Informative-pages/Banner-page/Loginverification.json";
import "react-toastify/dist/ReactToastify.css";
import { IoEyeOutline } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import { serverUrl } from "@/App";
import { useDispatch } from "react-redux";
import { setUserData } from "@/redux/userSlice";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      role: "student", // 👈 default role value
    },
  });

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(serverUrl + "/api/auth/login", data, {
        withCredentials: true,
      });
      reset(); // Reset form fields
      navigate("/", { replace: true }); // Always go to home after login
      toast.success("Login Successfully", {
        autoClose: 3000,
      });
      dispatch(setUserData(res.data));
    } catch (error) {
      toast.error(error.response?.data?.message);
      console.error(
        "Login failed",
        error.response?.data?.message || "Login failed. Please try again."
      );
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="flex h-screen">
        {/* Lottie Animation Section */}
        <div className="hidden lg:flex items-center justify-center flex-1 bg-top text-black">
          <div className="max-w-md text-center">
            <Lottie
              animationData={loginAnimation}
              loop={true}
              className="w-full h-auto"
            />
            <h1 className="text-2xl font-syne font-semibold mt-6 text-black">
              Welcome Back to Borcella LMS
            </h1>
            <p className="text-sm font-mont-alt capitalize font-medium mt-2 text-gray-600">
              Continue your learning journey with smarter tools, personalized
              content, and progress that never resets.
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full bg-top lg:w-1/2 flex items-center justify-center">
          <div className="max-w-md w-full border-2 border-black shadow-xl rounded-xl p-6">
            <h1 className="text-3xl font-semibold mb-6 text-black font-mont-alt capitalize text-center">
              Sign In
            </h1>

            {/* Social Auth Buttons */}
            <div className="mt-4 flex flex-col lg:flex-row items-center justify-between">
              <div className="w-full lg:w-1/2 mb-2 lg:mb-0">
                <button
                  type="button"
                  className="w-full h-12 flex justify-center items-center gap-2 bg-black text-sm text-white font-mont p-2 rounded-md hover:bg-gray-50 border-2 border-green-600 cursor-pointer focus:outline-none hover:text-black focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-colors duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-4"
                    id="google"
                  >
                    <path
                      fill="#fbbb00"
                      d="M113.47 309.408 95.648 375.94l-65.139 1.378C11.042 341.211 0 299.9 0 256c0-42.451 10.324-82.483 28.624-117.732h.014L86.63 148.9l25.404 57.644c-5.317 15.501-8.215 32.141-8.215 49.456.002 18.792 3.406 36.797 9.651 53.408z"
                    ></path>
                    <path
                      fill="#518ef8"
                      d="M507.527 208.176C510.467 223.662 512 239.655 512 256c0 18.328-1.927 36.206-5.598 53.451-12.462 58.683-45.025 109.925-90.134 146.187l-.014-.014-73.044-3.727-10.338-64.535c29.932-17.554 53.324-45.025 65.646-77.911h-136.89V208.176h245.899z"
                    ></path>
                    <path
                      fill="#28b446"
                      d="m416.253 455.624.014.014C372.396 490.901 316.666 512 256 512c-97.491 0-182.252-54.491-225.491-134.681l82.961-67.91c21.619 57.698 77.278 98.771 142.53 98.771 28.047 0 54.323-7.582 76.87-20.818l83.383 68.262z"
                    ></path>
                    <path
                      fill="#f14336"
                      d="m419.404 58.936-82.933 67.896C313.136 112.246 285.552 103.82 256 103.82c-66.729 0-123.429 42.957-143.965 102.724l-83.397-68.276h-.014C71.23 56.123 157.06 0 256 0c62.115 0 119.068 22.126 163.404 58.936z"
                    ></path>
                  </svg>{" "}
                  Sign Up with Google{" "}
                </button>
              </div>
              <div className="w-full lg:w-1/2 ml-0 lg:ml-2">
                <button
                  type="button"
                  className="w-full h-12 flex justify-center items-center gap-2 bg-amber-300 text-sm text-black font-mont p-2 rounded-md hover:bg-gray-50 border-2 border-black cursor-pointer hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-colors duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    id="github"
                    className="w-4"
                  >
                    <path d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z"></path>
                  </svg>{" "}
                  Sign Up with Github{" "}
                </button>
              </div>
            </div>

            {/* OR with email */}
            <div className="mt-4 font-mont-alt text-[16px] text-black font-[400] text-center">
              <p>or with email</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-2">
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block font-mont-alt text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
                      message: "Enter a valid email address",
                    },
                  })}
                  className={`mt-1 font-mont p-2 w-full border-2 border-black rounded-md focus:outline-none focus:ring-1 transition duration-300 ${
                    errors.email
                      ? "border-red-500 ring-red-300"
                      : "focus:border-gray-200 focus:ring-gray-300"
                  }`}
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="text-red-600 text-xs mt-1 font-mont-alt">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div className="w-full">
                <label
                  htmlFor="password"
                  className="block font-mont text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="relative w-full mt-1">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    {...register("password", {
                      required: "Password is required",
                      pattern: {
                        value:
                          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&^])[A-Za-z\d@$!%*#?&^]{8,}$/,
                        message:
                          "Password must be 8+ characters, with letters, numbers & special characters",
                      },
                    })}
                    className="font-mont p-2 border-black border-2 w-full rounded-md focus:border-gray-400 focus:outline-none focus:ring-0 focus:ring-gray-600 transition-colors duration-300 pr-10"
                    placeholder="Enter your password"
                  />
                  {/* Eye Icon */}
                  <div
                    className="absolute inset-y-0 right-2 flex items-center cursor-pointer text-gray-600"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <IoEye /> : <IoEyeOutline />}
                  </div>
                </div>

                {errors.password && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={!isValid}
                  className={`w-full mt-4 bg-black cursor-pointer font-mont-alt p-2 rounded-md text-white transition-colors duration-300 ${
                    isValid
                      ? "bg-black hover:bg-gray-800 focus:bg-black"
                      : "bg-orange-400 border-2 border-black cursor-not-allowed"
                  }`}
                >
                  Login
                </button>
              </div>
              {/* Forgot Password Link */}
              <div className="mt-1 text-center">
                <Link
                  to="/forgot-password"
                  className="text-sm font-medium text-blue-600 hover:underline font-mont-alt"
                >
                  Forgot Your Password?
                </Link>
              </div>
            </form>

            {/* Footer Link */}
            <div className="mt-4 text-sm font-mont-alt text-gray-600 text-center">
              <p>
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="text-red-600 font-medium hover:underline"
                >
                  Register here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
