import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="flex flex-row justify-between p-4 bg-purple-800">
        <div className="ml-2">LOGO</div>
        <div className="flex flex-row space-x-4 mr-2">
          <div>Menu</div>
          <div>Near Me </div>
          <div>
            <Link href={"/about"}>About</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
