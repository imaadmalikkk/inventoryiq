"use client";

import { useCallback } from "react";

export function useSmoothScroll() {
  const scrollToElement = useCallback((elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      const offset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, []);

  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (href?.startsWith("#")) {
      const elementId = href.slice(1);
      scrollToElement(elementId);
    }
  }, [scrollToElement]);

  return { handleClick };
} 