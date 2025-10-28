import React from "react";

const HeroSection = () => {
  return (
    <section className="flex flex-wrap justify-between items-center px-10 lg:px-24 py-16 bg-gradient-to-br from-[#f6f8fc] to-white relative overflow-hidden">
      {/* Left Content */}
      <div className="flex-1 max-w-xl">
        <span className="text-orange-500 font-semibold mb-3 block">
          We serve all your needs
        </span>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-4">
          Find Trusted <span className="text-blue-600">Local Experts</span>{" "}
          Instantly on <span className="text-orange-500">Sulekya</span>
        </h1>

        <p className="text-gray-600 mb-8 text-lg">
          From home repairs to beauty services — discover, compare, and connect
          with verified professionals near you. Fast, reliable, and easy.
        </p>

        <div className="flex gap-4 mb-10">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition">
            Get Started
          </button>
          <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
            See How It Works
          </button>
        </div>

        <div className="flex gap-8">
          <div>
            <h3 className="text-blue-600 text-2xl font-bold">10K+</h3>
            <p className="text-gray-500 text-sm">Verified Vendors</p>
          </div>
          <div>
            <h3 className="text-blue-600 text-2xl font-bold">1M+</h3>
            <p className="text-gray-500 text-sm">Happy Users</p>
          </div>
          <div>
            <h3 className="text-blue-600 text-2xl font-bold">4.9★</h3>
            <p className="text-gray-500 text-sm">Service Rating</p>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative flex-1 flex justify-center mt-16 lg:mt-0">
        {/* Main Circular Image */}
        <div className="relative object-center">
          <img
            src="/home/girl.png"
            alt="Sulekya Services"
            className="rounded-full w-72 h-72 object-cover border-[8px] border-white shadow-xl relative z-10 object-center"
          />

          {/* Rotating Icons */}
          <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 animate-spin-slow">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2920/2920658.png"
              alt="Home Repair"
              className="w-12 absolute top-0 left-1/2 -translate-x-1/2"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/2972/2972090.png"
              alt="Salon"
              className="w-12 absolute right-0 top-1/2 -translate-y-1/2"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Tutor"
              className="w-12 absolute bottom-0 left-1/2 -translate-x-1/2"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/2920/2920222.png"
              alt="Electrician"
              className="w-12 absolute left-0 top-1/2 -translate-y-1/2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
