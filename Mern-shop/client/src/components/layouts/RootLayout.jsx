import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar";

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
        {/* Contains children elements */}
      </main>
    </div>
  );
};

export default RootLayout;
