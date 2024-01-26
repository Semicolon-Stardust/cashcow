import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

function Error404() {
  return (
    <div>
      <html className="h-screen">
        <body className="flex h-full">
          <div className="max-w-[50rem] flex flex-col mx-auto w-full h-full">
            <header className="mb-auto flex justify-center z-50 w-full py-4">
              <nav className="px-4 sm:px-6 lg:px-8" aria-label="Global">
              <Link to="/" className="btn flex justify-center items-center btn-ghost font-tiltWrap font-[900] text-2xl text-white">
                <div className="w-[3rem] ">
                    <img src={logo} alt="Logo" />
                </div>
                CashCow
                </Link>
              </nav>
            </header>

            <div className="text-center py-10 px-4 sm:px-6 lg:px-8">
              <h1 className="block text-7xl font-bold text-gray-800 sm:text-9xl dark:text-white">
                404
              </h1>
              <h1 className="block text-2xl font-bold text-white"></h1>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
                Oops, something went wrong.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Sorry, we couldn't find your page.
              </p>
              <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
                <Link
                    className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    to="/login"
                >
                  Login
                </Link>
                <Link
                  className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  to="/"
                >
                  <svg
                    className="flex-shrink-0 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                  Back to Landing Page
                </Link>
              </div>
            </div>

            <footer className="mt-auto text-center py-5">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-sm text-gray-500">
                  © All Rights Reserved. 2024.
                </p>
              </div>
            </footer>
          </div>
        </body>
      </html>
    </div>
  );
}

export default Error404;
