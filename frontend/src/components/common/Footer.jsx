import React from "react";

export const Footer = () => {
  return (
    <footer className=" mt-6 text-white py-6 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
        <div>
          <h2 className="text-xl font-semibold">Persist Ventures</h2>
          <p className="text-sm mt-2">Creating innovative solutions for the future.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-1">
            <li><a href="#" className="hover:text-gray-400">Home</a></li>
            <li><a href="#" className="hover:text-gray-400">About</a></li>
            <li><a href="#" className="hover:text-gray-400">Services</a></li>
            <li><a href="#" className="hover:text-gray-400">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Legal</h3>
          <ul className="mt-2 space-y-1">
            <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gray-400">Terms of Service</a></li>
            <li><a href="#" className="hover:text-gray-400">Disclaimer</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Subscribe</h3>
          <p className="text-sm mt-2">Get the latest updates and offers.</p>
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="mt-2 px-3 py-2 w-full text-white-900  border-2 rounded focus:outline-none" 
          />
          <button className="mt-2 w-full bg-violet-500 hover:bg-indigo-500 text-white py-2 rounded">
            Subscribe
          </button>
        </div>
      </div>
      <div className="text-center text-sm mt-6 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} Persist Ventures. All rights reserved.
      </div>
    </footer>
  );
};

