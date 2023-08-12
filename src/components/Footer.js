import React from "react";
import Logo from "../assets/ThynkCafe.png";
import { Link } from "react-router-dom";

export const Footer = () => {
  const date=new Date().getFullYear();
  return (
    <footer className="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            to="/"
            className="flex items-center mb-4 sm:mb-0"
          >
            <img
              src={Logo}
              className="h-8 mr-3"
              alt="MovieHub Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
             MovieHub
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="/" target="_blank" className="mr-4 hover:underline md:mr-6 ">
                FaceBook
              </a>
            </li>
            <li>
              <a href="/"target="_blank" className="mr-4 hover:underline md:mr-6">
                Twitter
              </a>
            </li>
            <li>
              <a href="/" target="_blank" className="mr-4 hover:underline md:mr-6 ">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="/" target="_blank" className="hover:underline">
                GitHub
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {date}{" "}
          <Link href="/" className="hover:underline">
            MovieHub™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};
