import { useState, useEffect } from "react";
import Banner from "./Banners/Banner";

function Hero() {
  // Banner Details
  const BannerDetails = [
    {
      id: 0,
      images:
        "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Effortless Expense Tracking for a Smarter Financial Future.",
      buttonText: "Get Started",
      buttonPath: "/register",
    },
    {
      id: 1,
      images:
        "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TW9uZXl8ZW58MHwwfDB8fHww",
      text: "Financial Freedom is a Click Away.",
      buttonText: "Get Started",
      buttonPath: "/register",
    },
  ];

  // Banner Slider Logic
  const [current, setCurrent] = useState(BannerDetails[0].id);

  // Auto Slider Logic
  const delay = 5000;
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(current === BannerDetails.length - 1 ? 0 : current + 1);
    }, delay);
    return () => clearInterval(interval);
  });

  // Previous Button Logic
  const previousSlide = () => {
    if (current === BannerDetails[0].id) {
      setCurrent(BannerDetails.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };

  // Next Button Logic
  const nextSlide = () => {
    if (current === BannerDetails.length - 1) {
      setCurrent(BannerDetails[0].id);
    } else {
      setCurrent(current + 1);
    }
  };

  return (
    // Components
    <div className="">
      <div
        className="flex justify-center items-center w-full min-h-screen"
        // style={{ transform: `translateX(-${current * 100}%)`}}
      >
        {/* Banner Component */}
        <Banner
          images={BannerDetails[current].images}
          text={BannerDetails[current].text}
          buttonText={BannerDetails[current].buttonText}
          buttonPath={BannerDetails[current].buttonPath}
        />
      </div>

      <div className="absolute bottom-0 left-0 sm:flex justify-between items-center w-full hidden pb-[3rem] p-[3rem]">
        {/* Left & Right Buttons */}
        <div className="join flex justify-between items-center w-full">
          <button
            className="flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            onClick={previousSlide}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </button>

          <div className="hs-carousel-pagination flex justify-center space-x-2">
            {
            BannerDetails.map((banner) => (
              <input
            key={banner.id}
            className={"hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 w-3 h-3 border border-gray-400 rounded-full cursor-pointer"}
            type="radio"
            name="options"
            aria-label={banner.id === current ? "●" : `○`}
            checked={banner.id === current}
            onClick={() => setCurrent(banner.id)}
          />
            ))
          }
          </div>

          <button
            type="button"
            className="flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            onClick={nextSlide}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>

    // <>
    // <Banner />
    // </>
  );
}

export default Hero;
