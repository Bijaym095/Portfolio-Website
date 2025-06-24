import React from "react";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="site-wrapper min-h-screen flex flex-col">
      <main className="grow">{children}</main>
    </div>
  );
}

export default MainLayout;
