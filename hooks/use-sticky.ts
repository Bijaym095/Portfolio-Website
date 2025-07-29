"use client";

import { useEffect, useState } from "react";

function useSticky() {
  const [sticky, setSticky] = useState("");

  const isSticky = () => {
    const scrollTop = window.scrollY;
    const stickyClass = scrollTop >= 80 ? "stickyHeader" : "";
    setSticky(stickyClass);
  };

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  return { sticky };
}

export default useSticky;
