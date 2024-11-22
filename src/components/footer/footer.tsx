import React from "react";
import Social from "../social/social";

function Footer() {
  return (
    <footer className="bg-[#f5faff] py-8">
      <div className="container mx-auto px-4">
        <img src="/navbar/logo.svg" alt="Skilllety Logo" className="mb-4" />
        <div className="flex justify-between flex-col md:flex-row">
          {/* Left Section */}
          <div className="w-full lg:w-52 text-left mb-6 lg:mb-0">
            <p className="text-gray-600 text-sm mb-4">
              Skilllety is a revolutionary AI-driven Job Portal exclusively for the IT industry. Our AI-Recruiter "Lety"
              sources, screens & interviews candidates effectively with over 96% accuracy.
            </p>
            <p className="text-gray-600 text-sm mb-2">
              <strong>Help Line:</strong> +91-996-643-3330
            </p>
            <p className="text-gray-600 text-sm mb-4">
              <strong>Email:</strong> info@skilllety.com
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-gray-600 hover:text-primary">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Middle Section */}
          <div className="mb-6 lg:mb-0 flex ">
            <div className="flex justify-between">
              <ul className="w-full mx-2 text-sm">
                <li>
                  <a href="/about" className="text-gray-600 hover:text-primary">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-600 hover:text-primary">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/pricing" className="text-gray-600 hover:text-primary">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="/blog" className="text-gray-600 hover:text-primary">
                    Blog
                  </a>
                </li>
              </ul>
              <ul className="w-full mx-2 text-sm">
                <li>
                  <a href="/" className="text-gray-600 hover:text-primary">
                    Browse Jobs
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-600 hover:text-primary">
                    Browse Employers
                  </a>
                </li>
                <li>
                  <a href="/pricing" className="text-gray-600 hover:text-primary">
                    Post a Job
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-600 hover:text-primary">
                    Search CVs
                  </a>
                </li>
              </ul>
              <ul className="w-full mx-2 text-sm">
                <li>
                  <a href="/" className="text-gray-600 hover:text-primary">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="text-gray-600 hover:text-primary">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="/faqs" className="text-gray-600 hover:text-primary">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="/chat" className="text-gray-600 hover:text-primary">
                    Chat with Lety
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex">
            <img src="/footer/startup.svg" alt="startup" className="w-20 h-20" />
            <img src="/footer/di.svg" alt="di" className="w-20 h-20" />
            <img src="/footer/msme.svg" alt="msme" className="w-20 h-20" />
          </div>

          {/* Right Section */}
          <div className="text-left">
            <h5 className="text-gray-800 font-medium mb-4">Subscribe to our Newsletter</h5>
            <div className="flex mb-6">
              <input
                type="email"
                placeholder="Email Address"
                className="px-4 py-2 mr-3 border border-gray-300 rounded-md focus:outline-none"
              />
              <button className="bg-[#0a65cc] text-xs text-white px-4 py-2 rounded-md">Submit</button>
            </div>
            <h5 className="text-gray-800 font-medium mb-2">Apply on the go</h5>
            <p className="text-gray-600 text-sm mb-4">Get real-time job updates on our App</p>
            <div className="flex space-x-2">
              <a href="#">
                <img src="/footer/play.svg" alt="Google Play" className="h-10" />
              </a>
              <a href="#">
                <img src="/footer/appstore.svg" alt="App Store" className="h-10" />
              </a>
            </div>
          </div>
        </div>
        <Social />
        <div className="border-t border-gray-300 mt-8 pt-4 text-start text-gray-600 text-sm">
          <p>
            All trademarks are the property of their respective owners. © 2024 Skilllety Technologies Private Ltd. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
