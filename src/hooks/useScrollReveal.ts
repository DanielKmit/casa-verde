"use client";

import { useRef, useEffect, useState } from "react";

export function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    // Above fold or near viewport → show immediately
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 1.1) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.02, rootMargin: "100px 0px" }
    );
    observer.observe(el);

    // Safety fallback — shorter timeout
    const timer = setTimeout(() => setIsVisible(true), 2000);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return { ref, isVisible };
}
