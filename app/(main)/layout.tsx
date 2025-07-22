"use client"

import MainHeader from "@/components/layouts/main-header";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

function MainLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  return (
    <div className="site-wrapper min-h-screen flex flex-col">
      <MainHeader />
      <main className="grow">{children}</main>
    </div>
  );
}

export default MainLayout;
