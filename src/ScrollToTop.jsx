import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;

// How it Works:
// Custom Hook (useScrollToTop):

// This hook gets the current route path using useLocation from react-router-dom.
// It uses useEffect to listen for changes to the pathname. Whenever pathname changes, it runs window.scrollTo(0, 0), scrolling the window to the top.
// Integration in App:

// By calling useScrollToTop at the top of the App component, the hook will be active for the entire app.
// This ensures that on every route change, the window scrolls to the top.
