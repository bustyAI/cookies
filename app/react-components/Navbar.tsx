import Link from "@/node_modules/next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar-bg">
        <div className="navbar">
          <div>Logo</div>
          <div className="navbar-navigation">
            <div>Menu</div>
            <div>Near Me </div>
            <div>
              <Link href={"/about"}>About</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
