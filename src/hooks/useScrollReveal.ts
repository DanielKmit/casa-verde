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

    // Above fold → show immediately
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.9) {
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
      { threshold: 0.05 }
    );
    observer.observe(el);

    // Safety fallback
    const timer = setTimeout(() => setIsVisible(true), 5000);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return { ref, isVisible };
}
