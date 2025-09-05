"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import { Menu, X, ArrowRight, Zap, Search } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "@/assets/Logo.png";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";
import { IoPersonCircle } from "react-icons/io5";
import axios from "axios";
import { serverUrl } from "@/App";
import { setUserData } from "@/redux/userSlice";
import { toast } from "react-toastify";

const navItems = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Courses", to: "/courses" },
  { name: "Pricing", to: "/pricing" },
  { name: "Resources", to: "/resources" },
  { name: "Contact", to: "/contact" },
];

export default function Header2() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const { userData } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3,
        ease: easeInOut,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: easeInOut,
        staggerChildren: 0.1,
      },
    },
  };

  const mobileItemVariants = {
    closed: { opacity: 0, x: 20 },
    open: { opacity: 1, x: 0 },
  };

  const handleLogout = async () => {
    try {
      const result = await axios.get(serverUrl + "/api/auth/logout", {
        withCredentials: true,
      });
      console.log(result);
      dispatch(setUserData(null));
      // Redirect after logout
      navigate("/login", { replace: true });
      toast.success("Logout Successfully");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "border-border/50 bg-background/80 border-b shadow-sm backdrop-blur-md"
            : "bg-transparent"
        }`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <motion.div
              className="flex items-center space-x-3"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <Link to="/" className="flex items-center space-x-3">
                <img src={Logo} alt="Logo" className="w-25 h-25" />
              </Link>
            </motion.div>

            <nav className="hidden items-center space-x-1 lg:flex">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  variants={itemVariants}
                  className="relative"
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <Link
                    to={item.to}
                    className="text-foreground/80 font-mont-alt capitalize hover:text-white relative rounded-lg px-4 py-2 text-sm font-semibold transition-colors duration-200"
                  >
                    {hoveredItem === item.name && (
                      <motion.div
                        className="bg-red-600 absolute inset-0 rounded-lg"
                        layoutId="navbar-hover"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative z-10">{item.name}</span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              className="hidden items-center space-x-3 lg:flex"
              variants={itemVariants}
            >
              <div
                className="relative inline-block text-left"
                ref={dropdownRef}
              >
                {/* Trigger */}
                <div
                  className="cursor-pointer"
                  onClick={() => setIsOpen((prev) => !prev)}
                >
                  {!userData ? (
                    <IoPersonCircle className="h-10 w-10 text-gray-700 hover:text-gray-900 transition" />
                  ) : (
                    <div className="w-[50px] h-[50px] rounded-full text-white flex items-center justify-center text-[20px] border-2 bg-black border-white">
                      {userData?.data?.name
                        ? userData.data.name.slice(0, 1).toUpperCase()
                        : userData?.name
                        ? userData.name.slice(0, 1).toUpperCase()
                        : null}
                    </div>
                  )}
                </div>

                {/* Dropdown Menu */}
                {isOpen  && (
                  <div className="absolute right-0 mt-2 w-48 rounded-lg bg-accent-200 shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                    <div className="py-">
                      <Link
                        to="/profile"
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setIsOpen(false);
                        }}
                        className="block px-4 py-2 text-sm text-black font-syne font-medium hover:text-gray-500"
                      >
                        My Profile
                      </Link>
                      <hr className="bg-black" />
                      <Link
                        to="/my-courses"
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setIsOpen(false);
                        }}
                        className="block px-4 py-2 text-sm text-black font-syne font-medium hover:text-gray-500"
                      >
                        My Courses
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {(userData?.data?.role?.toLowerCase() === "educator" ||
                userData?.role?.toLowerCase() === "educator") && (
                <Link
                  to="/dashboard"
                  className="bg-foreground cursor-pointer font-mont-alt capitalize text-background hover:bg-foreground/90 inline-flex items-center space-x-2 rounded-lg px-5 py-2.5 text-sm font-medium shadow-sm transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Dashboard
                </Link>
              )}

              {!userData ? (
                <Link
                  to="/login"
                  className="text-black
                 border-2 space-y-2 border-black  outline-none font-mont-alt capitalize px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-sm"
                >
                  Sign In
                </Link>
              ) : (
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    className="bg-foreground cursor-pointer font-mont-alt capitalize text-background hover:bg-foreground/90 inline-flex items-center space-x-2 rounded-lg px-5 py-2.5 text-sm font-medium shadow-sm transition-all duration-200"
                    onClick={() => handleLogout()}
                  >
                    <span>Logout</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </motion.div>
              )}
            </motion.div>

            <motion.button
              className="text-foreground hover:bg-muted rounded-lg p-2 transition-colors duration-200 lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              variants={itemVariants}
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.header>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              className="border-border bg-background fixed top-16 right-4 z-50 w-80 overflow-hidden rounded-2xl border shadow-2xl lg:hidden"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="space-y-6 p-6">
                <div className="space-y-1">
                  {navItems.map((item) => (
                    <motion.div key={item.name} variants={mobileItemVariants}>
                      <Link
                        to="/login"
                        className="text-foreground font-syne text-sm tracking-wider hover:bg-muted block rounded-lg px-4 py-3 font-medium transition-colors duration-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="border-border space-y-3 border-t pt-6"
                  variants={mobileItemVariants}
                >
                  {userData?.data?.role?.toLowerCase() === "educator" && (
                    <Link
                      to="/dashboard"
                      className="bg-foreground font-mont-alt text-background hover:bg-foreground/90 block w-full rounded-lg py-2 text-center font-medium transition-all duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Dashboard
                    </Link>
                  )}

                  {!userData ? (
                    <Link
                      to="/login"
                      className="text-white bg-black border border-black outline-none rounded-xl font-mont-alt hover:bg-muted block w-full py-2 text-center font-medium transition-colors duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Sign In
                    </Link>
                  ) : (
                    <Button
                      className="bg-foreground font-mont-alt text-background hover:bg-foreground/90 block w-full rounded-lg py-2 text-center font-medium transition-all duration-200"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        handleLogout(); // call the function here
                      }}
                    >
                      <span>Logout</span>
                    </Button>
                  )}
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
