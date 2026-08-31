import { useEffect, useRef } from "react";

/**
 * Reveals an element once as it scrolls into view. Purely additive: the
 * element is fully visible from the start when the observer is unavailable
 * or the reader prefers reduced motion (handled in CSS).
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      node.dataset.visible = "true";
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            node.dataset.visible = "true";
            observer.unobserve(node);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return ref;
}
