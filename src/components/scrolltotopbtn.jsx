import React, { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    console.log("Current scrollY:", window.scrollY); // Log the current scroll position
    if (window.scrollY > 300) {
      setIsVisible(true);
      console.log("Button should appear");
    } else {
      setIsVisible(false);
      console.log("Button should disappear");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-4 right-4">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-blue text-white shadow-lg hover:bg-lightblue focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="m6 11l6-6l6 6M6 19l6-6l6 6"
            ></path>
          </svg>
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
