import logo from "../../assets/logo.png";

function Footer() {
    return (
        <div>
            <footer className="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
                <div className="text-center">
                    <div>
                        <a
                            className="flex-none text-xl font-semibold text-black dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            href="#"
                            aria-label=""
                        >
                            <div className="flex justify-center items-center flex-col">
                                <div className="w-[3rem]">
                                    <img src={logo} alt="Logo" />
                                </div>
                                CashCow
                            </div>
                        </a>
                    </div>

                    <div className="mt-3">
                        <p className="text-gray-500">
                            © Semicolon Stardust; 2024; All rights reserved;
                        </p>
                    </div>

                    <div className="mt-3 space-x-2">
                        <a className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800"
                            href="https://www.instagram.com/semicolonstardust" target="_blank">

                            {/* Instagram icon svg */}
                            <svg
                                className="flex-shrink-0 w-3.5 h-3.5"
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12.5 0H3.5A3.5 3.5 0 0 0 0 3.5v8.1A3.5 3.5 0 0 0 3.5 15h8.1a3.5 3.5 0 0 0 3.5-3.5v-8.1A3.5 3.5 0 0 0 12.5 0zm1 11.6a1 1 0 0 1-1 1H3.5a1 1 0 0 1-1-1v-8.1a1 1 0 0 1 1-1h8.1a1 1 0 0 1 1 1v8.1z"
                                />
                                <path
                                    fillRule="evenodd"
                                    d="M8 4.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm0 1a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zm4.5-1a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1zM8.5 9a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm2-3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z"
                                />
                            </svg>
                        </a>

                        <a className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800" href="https://github.com/Semicolon-Stardust" target="_blank">
                            <svg
                                className="flex-shrink-0 w-3.5 h-3.5"
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                            >
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
