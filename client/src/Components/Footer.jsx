import React from 'react'
import SendMail from './SendMail'
import Line from './Line'
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import GoogleStore from '../assets/icone/GooglePlay.svg'

const Footer = () => {
  return (
    <footer className="w-full bg-zinc-800 text-zinc-300">
      <div className="max-w-7xl mx-auto px-6 py-5">

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">

          {/* Exclusive */}
          <div>
            <h1 className="font-semibold text-2xl mb-5">Exclusive</h1>
            <p className="text-lg mb-2">Subscribe</p>
            <p className="text-[#79befbd3] mb-4">
              Get <span className="font-bold">10%</span> off your first order
            </p>
            <SendMail />
          </div>

          {/* Support */}
          <div>
            <h1 className="font-semibold text-2xl mb-5">Support</h1>
            <p className="mb-2">
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh
            </p>
            <p>example@gmail.com</p>
            <p>+88015-88888 9999</p>
          </div>

          {/* Account */}
          <div>
            <h1 className="font-semibold text-2xl mb-5">Account</h1>
            <p>My Account</p>
            <p>Cart</p>
            <p>Wishlist</p>
            <p>Shop</p>
          </div>

          {/* Quick Link */}
          <div>
            <h1 className="font-semibold text-2xl mb-5">Quick Link</h1>
            <p>Privacy Policy</p>
            <p>Terms Of Use</p>
            <p>FAQ</p>
            <p>Contact</p>
          </div>

          {/* Download */}
          <div>
            <h1 className="font-semibold text-2xl mb-5">Download App</h1>

            <a href="https://play.google.com/store">
              <img
                src={GoogleStore}
                alt="Google Play"
                className="h-10 mb-5 hover:opacity-80 transition"
              />
            </a>

            <div className="flex gap-4 text-xl">
              <FaInstagramSquare className="text-[#E1306C] cursor-pointer" />
              <FaFacebookSquare className="text-[#1DA1F2] cursor-pointer" />
              <FaLinkedin className="text-[#0A66C2] cursor-pointer" />
              <FaSquareTwitter className="text-[#1DA1F2] cursor-pointer" />
            </div>
          </div>

        </div>

        {/* LINE */}
        <Line />

        {/* COPYRIGHT */}
        <div className="flex justify-center items-center gap-2 text-zinc-500 mt-6">
          <AiOutlineCopyrightCircle />
          <p>Copyright Ali 2026. All right reserved</p>
        </div>

      </div>
    </footer>
  );
};


export default Footer
