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
      images: "",
      text: "Financial Freedom is a Click Away.",
      buttonText: "Get Started",
      buttonPath: "/register",
    },
    {
      id: 2,
      images:
        "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TW9uZXl8ZW58MHwwfDB8fHww",
      text: "Effortless Expense Tracking for a Smarter Financial Future.",
      buttonText: "Get Started",
      buttonPath: "/register",
    },
    {
      id: 3,
      images:
        "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8TW9uZXl8ZW58MHwwfDB8fHww",
      text: "Effortless Expense Tracking for a Smarter Financial Future.",
      buttonText: "Get Started",
      buttonPath: "/register",
    },
    {
      id: 4,
      images: "",
      text: "Effortless Expense Tracking for a Smarter Financial Future.",
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

  // Pause Button Logic
  const pauseBanner = () => {
    setCurrent(current);
  };
  
  // Play Button Logic
  const playBanner = () => {
    setCurrent(current + 1);
  }

  return (
    // Components
    <div>
      <div
        className="flex overflow-hidden"
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
        <div className="join flex justify-end items-center w-full">
          <button className="join-item btn btn-info" onClick={previousSlide}>
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


          {
            BannerDetails.map((banner) => (
              <input
            key={banner.id}
            className={"join-item btn btn-square"}
            type="radio"
            name="options"
            aria-label={`${banner.id + 1}`}
            checked={banner.id === current}
            onClick={() => setCurrent(banner.id)}
          />
            ))
          }

          <button className="join-item btn btn-info" onClick={nextSlide}>
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
  );
}

export default Hero;
