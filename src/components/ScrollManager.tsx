import { useEffect } from "react";
import { useLocation } from "react-router";

/**
 * React Router does not restore scroll or honour #hash targets on its own.
 * Top of page on navigation; scroll to the anchor when one is present.
 */
export default function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash]);

  return null;
}
