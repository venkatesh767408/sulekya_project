import React, { useState } from "react";
import { TfiWrite } from "react-icons/tfi";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#1C2434] backdrop-blur-xl shadow-2xl sticky top-0 z-50 border-b border-purple-500/20">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo with animated gradient */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <span className="relative text-2xl font-black bg-gradient-to-r from-rose-300 to-amber-300 bg-clip-text text-transparent">
                B® Sutekna
              </span>
            </div>
          </div>

          {/* Desktop Navigation with hover effects */}
          <div className="hidden lg:flex items-center space-x-1">
            {["Home", "Services", "Roommates", "Jobs", "Events", "About"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="relative px-4 py-2 text-gray-300 hover:text-white transition-all duration-500 group"
                >
                  <span className="relative z-10 font-medium tracking-wide">
                    {item}
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-rose-500/10 to-purple-500/10 rounded-xl scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"></span>
                </a>
              )
            )}
          </div>

          {/* Desktop Auth Buttons with glass morphism */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Sign In - Glass effect */}
            <button className="relative px-6 py-2.5 font-semibold text-white rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
              <span className="bg-gradient-to-r from-rose-100 to-amber-100 bg-clip-text text-transparent">
                Sign In
              </span>
            </button>

            {/* List Your Service - Gradient glow */}
            <button className="relative px-6 py-2.5 font-bold text-white rounded-2xl bg-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30 group overflow-hidden">
              <span className="relative z-10">List Your Service</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </button>

            {/* Post a Request - Animated button */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-400 to-orange-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <button className="relative flex items-center gap-2 bg-slate-900 px-6 py-2.5 rounded-2xl text-white font-bold hover:bg-slate-800 transition-all duration-300">
                <TfiWrite className="text-amber-300 text-lg" />
                <span>Post a Request</span>
              </button>
            </div>
          </div>

          {/* Mobile Menu Button - Modern design */}
          <button
            className="lg:hidden relative w-10 h-10 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <FiX className="text-white text-xl" />
            ) : (
              <FiMenu className="text-white text-xl" />
            )}
          </button>
        </div>

        {/* Mobile Navigation - Full screen overlay */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 z-40">
            <div className="container mx-auto px-6 py-8">
              {/* Mobile Menu Items */}
              <div className="flex flex-col space-y-6">
                {["Home", "Services", "Roommates", "Jobs", "Events", "About"].map(
                  (item, index) => (
                    <a
                      key={item}
                      href="#"
                      className="group flex items-center space-x-4 text-2xl font-bold text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-4"
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-rose-400 to-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span>{item}</span>
                    </a>
                  )
                )}
              </div>

              {/* Mobile Auth Buttons */}
              <div className="pt-12 border-t border-white/10 mt-8 flex flex-col space-y-4">
                {/* Sign In */}
                <button className="w-full px-8 py-4 text-lg font-bold text-white rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <span className="bg-gradient-to-r from-rose-100 to-amber-100 bg-clip-text text-transparent">
                    Sign In
                  </span>
                </button>

                {/* List Your Service */}
                <button className="w-full px-8 py-4 text-lg font-bold text-white rounded-2xl bg-gradient-to-br from-rose-500 via-purple-500 to-blue-500 hover:from-rose-600 hover:via-purple-600 hover:to-blue-600 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/30">
                  List Your Service
                </button>

                {/* Post a Request */}
                <button className="w-full flex items-center justify-center gap-3 px-8 py-4 text-lg font-bold text-white rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 transition-all duration-300">
                  <TfiWrite className="text-white text-xl" />
                  <span>Post a Request</span>
                </button>
              </div>

              {/* Close button for mobile */}
              <button
                className="absolute top-8 right-6 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                <FiX className="text-white text-xl" />
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;