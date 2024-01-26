import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

function DashboradNavbar() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <header className="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-[48] w-full bg-white border-b text-sm py-2.5 sm:py-4 lg:ps-64 dark:bg-gray-800 dark:border-gray-700">
        <nav
          className="flex basis-full items-center w-full mx-auto px-4 sm:px-6 md:px-8"
          aria-label="Global"
        >
          <div className="w-full flex items-center justify-end ms-auto sm:justify-between sm:gap-x-3 gap-5 sm:order-3">

            <div className="flex flex-row items-center justify-end gap-2 dark:text-white">
              {user !== null ? (
                <>
                  <span className="text-gray-600 dark:text-white">
                    Hi, {user.name}
                  </span>
                </>
              ) : null}
            </div>
            <div className="flex items-center gap-5">
              <button
                type="button"
                className="hs-dark-mode-active:hidden block hs-dark-mode group flex items-center text-gray-600 hover:text-blue-600 font-medium dark:text-gray-400 dark:hover:text-gray-500"
                data-hs-theme-click-value="dark"
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
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                </svg>
              </button>
              <button
                type="button"
                className="hs-dark-mode-active:block hidden hs-dark-mode group flex items-center text-gray-600 hover:text-blue-600 font-medium dark:text-gray-400 dark:hover:text-gray-500"
                data-hs-theme-click-value="light"
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
                  {" "}
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 8a2 2 0 1 0 4 4" />
                  <path d="M12 2v2" />
                  <path d="M12 20v2" />
                  <path d="m4.93 4.93 1.41 1.41" />
                  <path d="m17.66 17.66 1.41 1.41" />
                  <path d="M2 12h2" />
                  <path d="M20 12h2" />
                  <path d="m6.34 17.66-1.41 1.41" />
                  <path d="m19.07 4.93-1.41 1.41" />
                </svg>
              </button>
              <span className="inline-flex items-center justify-center h-[2.875rem] w-[2.875rem] text-sm font-semibold leading-none rounded-full bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
                {
                  user !== null ? user.name[0].toUpperCase() : null
                }
              </span>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default DashboradNavbar;
