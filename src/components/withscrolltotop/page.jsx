import { useEffect } from "react";
import { useLocation } from "react-router-dom"; // Or `next/router` for Next.js

const ScrollToTop = () => {
  const { pathname } = useLocation(); // Or `router` for Next.js

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
