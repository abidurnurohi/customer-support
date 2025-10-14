import React, { useState } from 'react';

const ResponsiveNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#E9E9E9]">
      <div className="navbar bg-white shadow-sm px-4 py-2 flex flex-col md:flex-row md:items-center justify-between">
        {/* Logo / Brand */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <a className="text-xl text-black font-bold">CS — Ticket System</a>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-black focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Nav Links */}
        <div
          className={`w-full md:w-auto transition-all duration-300 ease-in-out ${
            isOpen ? 'block' : 'hidden'
          } md:block`}
        >
          <ul className="menu menu-horizontal flex flex-col md:flex-row gap-2 md:gap-4 mt-2 md:mt-0 items-start md:items-center text-black text-sm">
            <li><a href="#">Home</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Changelog</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Download</a></li>
            <li><a href="#">Contact</a></li>
            <li>
              <button
                className="text-white font-semibold px-4 py-2 rounded"
                style={{
                  background: 'linear-gradient(#632EE3, #9F62F2)',
                }}
              >
                <span className="mr-1">+</span> New Ticket
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveNavbar;
