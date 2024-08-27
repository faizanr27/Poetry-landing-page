import React, { useState } from "react";
import './index.css'; // Ensure this file imports Tailwind CSS

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col bg-bg-creme bg-hero-pattern min-h-screen bg-cover bg-center">
      <header className="h-[120px] w-full flex flex-wrap items-center justify-between px-8 md:px-10 py-6 text-gray-300">
        <div className="logo">
          <img
            src="/assets/PH.png"
            alt="Poetry Haven Logo"
            className="p-2 h-32 w-32 sm:h-24 sm:w-24 md:h-36 md:w-36 xl:ml-32 -mt-4 md:ml-18 sm:ml-12"
          />
        </div>
        <button
          className="block md:hidden text-gray-300 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
        <nav className={`flex flex-col md:flex-row md:space-x-4 ${isMenuOpen ? 'block' : 'hidden'} md:block transition-all duration-300 ease-in-out`}>
          <button className="bg-orange-500 backdrop-blur-md shadow-md text-white px-2 py-1 sm:px-4 sm:py-2 rounded hover:bg-orange-600 text-sm sm:text-base">
            Log In
          </button>
          <button className="bg-orange-500 backdrop-blur-md shadow-md text-white px-2 py-1 sm:px-4 sm:py-2 rounded hover:bg-orange-600 text-sm sm:text-base">
            Create Account
          </button>
          <button className="bg-orange-500 backdrop-blur-md shadow-md text-white px-2 py-1 sm:px-4 sm:py-2 rounded hover:bg-orange-600 text-sm sm:text-base md:hidden">
            Subscribe Now
          </button>
        </nav>
      </header>

      <main className="flex flex-col items-center justify-center flex-grow h-screen py-8 px-4 sm:py-12 sm:px-6 md:py-16 md:px-8 lg:py-20 lg:px-16">
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
            Discover the World of Verse
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-white">
            From heartfelt sonnets to modern spoken word,
            Poetry Haven brings you the essence of expression.<br />
          </p>
        </div>
        <div className="search-poet flex flex-col md:flex-row gap-4 rounded-md mb-8">
          <input
            type="text"
            placeholder="Search Poet..."
            className="p-2 pr-5 rounded-full w-72 md:w-96 md:h-18 backdrop-blur-md shadow-md outline-slate-700"
          />
          <button className="bg-orange-500 text-white px-4 w-32 self-center py-2 rounded-2xl md:h-18 md:w-20 hover:bg-orange-600 backdrop-blur-md shadow-md">
            Search
          </button>
        </div>
        <button className="bg-orange-500 text-white px-6 py-3 rounded-2xl self-center hover:bg-orange-600 text-sm sm:text-base md:text-lg backdrop-blur-md shadow-md hidden md:block md:-ml-10">
          Subscribe Now
        </button>
      </main>

      <footer className="text-center py-4 bg-orange-500 shadow-md text-white">
        <p className="text-xs md:text-base">&copy; 2024 Poetry Haven, Inc. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
