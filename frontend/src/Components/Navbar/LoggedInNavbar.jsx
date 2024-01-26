import React, {useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../../assets/logo.png";

import { UserContext } from "../../context/UserContext";


function LoggedInNavbar() {

  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);


  const logoutCall = async () => {
    try{
      const { data } = await axios.get("/logout");
      if (data.success === true) {
        setUser(null);
        navigate("/");
      }
    }
    catch(err){
      console.log(err);
    }
  }


  const HSThemeAppearance = {
    init() {
      const defaultTheme = "default";
      let theme = localStorage.getItem("hs_theme") || defaultTheme;

      if (document.querySelector("html").classList.contains("dark")) return;
      this.setAppearance(theme);
    },
    _resetStylesOnLoad() {
      const $resetStyles = document.createElement("style");
      $resetStyles.innerText = `*{transition: unset !important;}`;
      $resetStyles.setAttribute("data-hs-appearance-onload-styles", "");
      document.head.appendChild($resetStyles);
      return $resetStyles;
    },
    setAppearance(theme, saveInStore = true, dispatchEvent = true) {
      const $resetStylesEl = this._resetStylesOnLoad();

      if (saveInStore) {
        localStorage.setItem("hs_theme", theme);
      }

      if (theme === "auto") {
        theme = window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "default";
      }

      document.querySelector("html").classList.remove("dark");
      document.querySelector("html").classList.remove("default");
      document.querySelector("html").classList.remove("auto");

      document
        .querySelector("html")
        .classList.add(this.getOriginalAppearance());

      setTimeout(() => {
        $resetStylesEl.remove();
      });

      if (dispatchEvent) {
        window.dispatchEvent(
          new CustomEvent("on-hs-appearance-change", { detail: theme })
        );
      }
    },
    getAppearance() {
      let theme = this.getOriginalAppearance();
      if (theme === "auto") {
        theme = window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "default";
      }
      return theme;
    },
    getOriginalAppearance() {
      const defaultTheme = "default";
      return localStorage.getItem("hs_theme") || defaultTheme;
    },
  };
  HSThemeAppearance.init();

  return (
    <div>
      <div className="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center py-4">
          <button
            type="button"
            className="text-gray-500 hover:text-gray-600"
            data-hs-overlay="#application-sidebar-dark"
            aria-controls="application-sidebar-dark"
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Toggle Navigation</span>
            <svg
              className="w-5 h-5"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
            </svg>
          </button>
          <ol
            className="ms-3 flex items-center whitespace-nowrap"
            aria-label="Breadcrumb"
          >
            <li className="flex items-center text-sm text-gray-800 dark:text-gray-400">
              Application Layout
              <svg
                className="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-400 dark:text-gray-600"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                  stroke="currentColor"
                />
              </svg>
            </li>
            <li
              className="text-sm font-semibold text-gray-800 truncate dark:text-gray-400"
              aria-current="page"
            >
              Dashboard
            </li>
          </ol>
        </div>
      </div>
      <div
        id="application-sidebar-dark"
        className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-64 bg-gray-900 border-e border-gray-800 pt-7 pb-10  lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500"
      >
        <div className="px-6">
          <Link
            to="/"
            className="btn flex justify-center items-center btn-ghost font-tiltWrap font-[900] text-2xl text-white"
          >
            <div className="w-[3rem] ">
              <img src={logo} alt="Logo" />
            </div>
            CashCow
          </Link>
        </div>

        <nav
          className="hs-accordion-group p-6 w-full h-full flex flex-col justify-between flex-wrap"
          data-hs-accordion-always-open
        >
          <ul className="space-y-1.5">
            <li>
              <Link
                className="flex items-center gap-x-3 py-2 px-2.5 bg-gray-700 text-sm text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-600"
                to='/dashboard'
              >
                <svg
                  className="flex-shrink-0 w-4 h-4"
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                Dashboard
              </Link>
            </li>

            <li>
              <Link
                className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 rounded-lg hover:bg-gray-800 hover:text-white-300 focus:outline-none focus:ring-1 focus:ring-gray-600"
                to='/Expenses'
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  // eslint-disable-next-line react/no-unknown-property
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  className="flex-shrink-0 w-4 h-4"
                  width="24"
                  height="24"
                  viewBox="0 0 64 64"
                >
                  <path
                    fill="#ffffff"
                    d="M30,39c0-0.552-0.447-1-1-1H3c-0.553,0-1,0.448-1,1v16c0,0.552,0.447,1,1,1h26c0.553,0,1-0.448,1-1V39z M28,41.816  c-0.847-0.302-1.514-0.969-1.816-1.816H28V41.816z M24.101,54H7.899C7.5,52.044,5.956,50.5,4,50.101v-6.202  C5.956,43.5,7.5,41.956,7.899,40h16.202c0.399,1.956,1.943,3.5,3.899,3.899v6.202C26.044,50.5,24.5,52.044,24.101,54z M5.816,40  C5.514,40.847,4.847,41.514,4,41.816V40H5.816z M4,52.184C4.847,52.486,5.514,53.153,5.816,54H4V52.184z M26.184,54  c0.302-0.847,0.969-1.514,1.816-1.816V54H26.184z"
                  />
                  <path
                    fill="#ffffff"
                    d="M16,44c0.552,0,1,0.449,1,1h2c0-1.302-0.839-2.402-2-2.816V41h-2v1.184c-1.161,0.414-2,1.514-2,2.816c0,1.654,1.346,3,3,3  c0.552,0,1,0.449,1,1s-0.448,1-1,1s-1-0.449-1-1h-2c0,1.302,0.839,2.402,2,2.816V53h2v-1.184c1.161-0.414,2-1.514,2-2.816  c0-1.654-1.346-3-3-3c-0.552,0-1-0.449-1-1S15.448,44,16,44z"
                  />
                  <rect fill="#ffffff" x="2" y="57" width="28" height="2" />
                  <rect fill="#ffffff" x="2" y="60" width="28" height="2" />
                  <path
                    fill="#ffffff"
                    d="M3,11h2v9c0,0.552,0.447,1,1,1h12c0.553,0,1-0.448,1-1v-9h2c0.427,0,0.808-0.271,0.946-0.675  c0.139-0.404,0.005-0.852-0.332-1.114L18,6.399V3h-2v1.844L12.614,2.21c-0.361-0.28-0.867-0.28-1.229,0l-9,7  c-0.337,0.263-0.471,0.71-0.332,1.114C2.192,10.729,2.573,11,3,11z M13,19h-2v-3h2V19z M12,4.267L18.086,9H18c-0.553,0-1,0.448-1,1  v9h-2v-4c0-0.552-0.447-1-1-1h-4c-0.553,0-1,0.448-1,1v4H7v-9c0-0.552-0.447-1-1-1H5.914L12,4.267z"
                  />
                  <path
                    fill="#ffffff"
                    d="M58.427,8.339l-0.595-0.893c-0.036-0.055-0.078-0.106-0.125-0.152l-1-1c-0.109-0.11-0.243-0.192-0.391-0.242l-3-1  c-0.293-0.097-0.615-0.054-0.871,0.117L49.697,7H48c-0.431,0-0.812,0.275-0.948,0.684L46.28,10H45v2h1.382l1.724,3.447  C48.275,15.786,48.621,16,49,16h8c0.379,0,0.725-0.214,0.895-0.553L59.618,12H61v-2h-1.237l2.094-3.485l-1.715-1.03L58.427,8.339z   M48.721,9H50c0.197,0,0.391-0.059,0.555-0.168l2.593-1.729l2.312,0.771l0.763,0.763L57.131,10h-8.744L48.721,9z M56.382,14h-6.764  l-1-2h8.764L56.382,14z"
                  />
                  <path
                    fill="#ffffff"
                    d="M40.03,2.757L39.22,6H37c-0.287,0-0.56,0.123-0.75,0.338c-0.189,0.215-0.278,0.501-0.242,0.786l1,8  C37.07,15.625,37.496,16,38,16h4c0.504,0,0.93-0.375,0.992-0.876l1-8c0.036-0.285-0.053-0.571-0.242-0.786  C43.56,6.123,43.287,6,43,6h-1.719l0.501-2H45V2h-4C40.541,2,40.142,2.312,40.03,2.757z M41.117,14h-2.234l-0.75-6h3.734L41.117,14z  "
                  />
                  <path
                    fill="#ffffff"
                    d="M41.832,51.445l-2-3l-1.664,1.109L39.131,51H32v2h7.131l-0.963,1.445l1.664,1.109l2-3  C42.056,52.219,42.056,51.781,41.832,51.445z"
                  />
                  <path
                    fill="#ffffff"
                    d="M13,36V25.868l1.445,0.964l1.109-1.664l-3-2c-0.336-0.224-0.773-0.224-1.109,0l-3,2l1.109,1.664L11,25.868V36H13z"
                  />
                  <path
                    fill="#ffffff"
                    d="M31.707,34.707l9.457-9.457l0.341,1.704l1.961-0.393l-0.707-3.536c-0.079-0.396-0.389-0.705-0.784-0.784l-3.536-0.707  l-0.393,1.961l1.704,0.341l-9.457,9.457L31.707,34.707z"
                  />
                  <polygon
                    fill="#ffffff"
                    points="52,46 52,49 49,49 49,51 52,51 52,54 54,54 54,51 57,51 57,49 54,49 54,46 "
                  />
                  <path
                    fill="#ffffff"
                    d="M62,42c0-0.552-0.447-1-1-1h-0.758c-2.469,0-4.789-0.961-6.535-2.707c-0.391-0.391-1.023-0.391-1.414,0  C50.547,40.039,48.227,41,45.758,41H45c-0.553,0-1,0.448-1,1v6.241c0,5.206,2.636,9.961,7.05,12.72l1.42,0.888  C52.632,61.949,52.816,62,53,62s0.368-0.051,0.53-0.152l1.42-0.888c4.414-2.759,7.05-7.514,7.05-12.72V42z M60,48.241  c0,4.512-2.284,8.633-6.11,11.023L53,59.821l-0.89-0.557C48.284,56.874,46,52.752,46,48.241v-5.243c2.591-0.055,5.037-0.981,7-2.64  c1.963,1.659,4.409,2.585,7,2.64V48.241z"
                  />
                </svg>
                Expense Tracking
              </Link>
            </li>
            <li>
              <Link
                className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 rounded-lg hover:bg-gray-800 hover:text-white-300 focus:outline-none focus:ring-1 focus:ring-gray-600"
                to='/EMI'
              >
                <svg
                  className="flex-shrink-0 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 64 64"
                  id="calculator"
                >
                  <path
                    fill="#ffffff"
                    d="M44,11H20c-1.7,0-3,1.3-3,3v4c0,1.7,1.3,3,3,3h24c1.7,0,3-1.3,3-3v-4C47,12.3,45.7,11,44,11z M45,18
			c0,0.6-0.4,1-1,1H20c-0.6,0-1-0.4-1-1v-4c0-0.6,0.4-1,1-1h24c0.6,0,1,0.4,1,1V18z"
                  ></path>
                  <path
                    fill="#ffffff"
                    d="M48,5H16c-1.7,0-3,1.3-3,3v48c0,1.7,1.3,3,3,3h32c1.7,0,3-1.3,3-3V8C51,6.3,49.7,5,48,5z M49,56
			c0,0.6-0.4,1-1,1H16c-0.6,0-1-0.4-1-1V8c0-0.6,0.4-1,1-1h32c0.6,0,1,0.4,1,1V56z"
                  ></path>
                  <path
                    fill="#ffffff"
                    d="M23 25h-2c-1.7 0-3 1.3-3 3v2c0 1.7 1.3 3 3 3h2c1.7 0 3-1.3 3-3v-2C26 26.3 24.7 25 23 25zM24 30c0 .6-.4 1-1 1h-2c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1h2c.6 0 1 .4 1 1V30zM33 25h-2c-1.7 0-3 1.3-3 3v2c0 1.7 1.3 3 3 3h2c1.7 0 3-1.3 3-3v-2C36 26.3 34.7 25 33 25zM34 30c0 .6-.4 1-1 1h-2c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1h2c.6 0 1 .4 1 1V30zM43 25h-2c-1.7 0-3 1.3-3 3v2c0 1.7 1.3 3 3 3h2c1.7 0 3-1.3 3-3v-2C46 26.3 44.7 25 43 25zM44 30c0 .6-.4 1-1 1h-2c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1h2c.6 0 1 .4 1 1V30zM23 35h-2c-1.7 0-3 1.3-3 3v2c0 1.7 1.3 3 3 3h2c1.7 0 3-1.3 3-3v-2C26 36.3 24.7 35 23 35zM24 40c0 .6-.4 1-1 1h-2c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1h2c.6 0 1 .4 1 1V40zM33 35h-2c-1.7 0-3 1.3-3 3v2c0 1.7 1.3 3 3 3h2c1.7 0 3-1.3 3-3v-2C36 36.3 34.7 35 33 35zM34 40c0 .6-.4 1-1 1h-2c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1h2c.6 0 1 .4 1 1V40zM43 35h-2c-1.7 0-3 1.3-3 3v12c0 1.7 1.3 3 3 3h2c1.7 0 3-1.3 3-3V38C46 36.3 44.7 35 43 35zM44 50c0 .6-.4 1-1 1h-2c-.6 0-1-.4-1-1V38c0-.6.4-1 1-1h2c.6 0 1 .4 1 1V50zM23 45h-2c-1.7 0-3 1.3-3 3v2c0 1.7 1.3 3 3 3h2c1.7 0 3-1.3 3-3v-2C26 46.3 24.7 45 23 45zM24 50c0 .6-.4 1-1 1h-2c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1h2c.6 0 1 .4 1 1V50zM33 45h-2c-1.7 0-3 1.3-3 3v2c0 1.7 1.3 3 3 3h2c1.7 0 3-1.3 3-3v-2C36 46.3 34.7 45 33 45zM34 50c0 .6-.4 1-1 1h-2c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1h2c.6 0 1 .4 1 1V50z"
                  ></path>
                </svg>
                Loan Calculator
              </Link>
            </li>
            <li>
              <Link
                className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 rounded-lg hover:bg-gray-800 hover:text-white-300 focus:outline-none focus:ring-1 focus:ring-gray-600"
                to='/Family'
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
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                Family Budgeting
              </Link>
            </li>
            <li>
              <a
                className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 rounded-lg hover:bg-gray-800 hover:text-white-300 focus:outline-none focus:ring-1 focus:ring-gray-600"
                href="#"
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
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
                Documentation
              </a>
            </li>
          </ul>
          <ul>
            <li className="hs-accordion" id="account-accordion">
              <button
                type="button"
                className="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-white hs-accordion-active:hover:bg-transparent text-sm text-gray-400 rounded-lg hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-1 focus:ring-gray-600"
              >
                <svg
                  className="flex-shrink-0 mt-0.5 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="18" cy="15" r="3" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M10 15H6a4 4 0 0 0-4 4v2" />
                  <path d="m21.7 16.4-.9-.3" />
                  <path d="m15.2 13.9-.9-.3" />
                  <path d="m16.6 18.7.3-.9" />
                  <path d="m19.1 12.2.3-.9" />
                  <path d="m19.6 18.7-.4-1" />
                  <path d="m16.8 12.3-.4-1" />
                  <path d="m14.3 16.6 1-.4" />
                  <path d="m20.7 13.8 1-.4" />
                </svg>
                Account
                <svg
                  className="hs-accordion-active:block ms-auto hidden w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="m18 15-6-6-6 6" />
                </svg>
                <svg
                  className="hs-accordion-active:hidden ms-auto block w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              <div
                id="account-accordion-child"
                className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
              >
                <ul className="pt-2 ps-2">
                  <li>
                    <a
                      className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 rounded-lg hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-1 focus:ring-gray-600"
                      href="#"
                    >
                      Profile
                    </a>
                  </li>
                  <li>
                    <a
                      className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 rounded-lg hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-1 focus:ring-gray-600"
                      href="#"
                    >
                      Settings
                    </a>
                  </li>
                  <li className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 rounded-lg hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-1 focus:ring-gray-600">
                    <button onClick={logoutCall} className="">
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default LoggedInNavbar;
