import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-gray-400">
      <div className="px-5 py-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-10">
          <div className="">
            <h3 className="text-white font-semibold text-lg mb-4">
              CS — Ticket System
            </h3>
            <p className="text-sm leading-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold text-base mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Our Mission</a></li>
              <li><a href="#" className="hover:text-white">Contact Sales</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold text-base mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Products & Services</a></li>
              <li><a href="#" className="hover:text-white">Customer Stories</a></li>
              <li><a href="#" className="hover:text-white">Download Apps</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold text-base mb-4">Information</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white">Join Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold text-base mb-4">Social Links</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 flex-shrink-0">
                <span>✖</span>
                <a href="#" className="hover:text-white inline-block whitespace-nowrap">
                  @CS — Ticket System
                </a>
              </li>
              <li className="flex items-center gap-2 flex-shrink-0">
                <span>in</span>
                <a href="#" className="hover:text-white inline-block whitespace-nowrap">
                  @CS — Ticket System
                </a>
              </li>
              <li className="flex items-center gap-2 flex-shrink-0">
                <span>f</span>
                <a href="#" className="hover:text-white inline-block whitespace-nowrap">
                  @CS — Ticket System
                </a>
              </li>
              <li className="flex items-center gap-2 flex-shrink-0">
                <span>✉</span>
                <a href="mailto:support@cst.com" className="hover:text-white inline-block whitespace-nowrap">
                  support@cst.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-sm">
          © 2025 CS — Ticket System. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
