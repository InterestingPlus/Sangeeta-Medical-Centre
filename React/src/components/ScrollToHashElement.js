import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHashElement = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);

      if (element) {
        // Scroll to the element smoothly
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        // If no element found, scroll to top
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      // If no hash at all (pure navigation), scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [hash, pathname]);

  return null;
};

export default ScrollToHashElement;
