import React from "react";

const Footer = () => {
  return (
    <footer className="text-white py-6 mt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-center justify-between">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-lg mb-2">Questions? Contact us.</h3>
            <ul className="list-none opacity-50">
              <li>
                <button className="underline">FAQ</button>
              </li>
              <li>
                <button className="underline">Investor Relations</button>
              </li>
              <li>
                <button className="underline">Privacy</button>
              </li>
              <li>
                <button className="underline">Terms of Use</button>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-lg mb-2">Quick Links</h3>
            <ul className="list-none opacity-50">
              <li>
                <button className="underline">Help Center</button>
              </li>
              <li>
                <button className="underline">Jobs</button>
              </li>
              <li>
                <button className="underline">Cookie Preferences</button>
              </li>
              <li>
                <button className="underline">Corporate Information</button>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg mb-2">Social Media</h3>
            <ul className="list-none opacity-50">
              <li>
                <button className="underline">Facebook</button>
              </li>
              <li>
                <button className="underline">Twitter</button>
              </li>
              <li>
                <button className="underline">Instagram</button>
              </li>
              <li>
                <button className="underline">YouTube</button>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-sm mx-auto text-center mt-10">
          &copy; 2024 Netflix Clone. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
