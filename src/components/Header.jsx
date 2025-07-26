
import React from "react";
import Link from "next/link";
const Header = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full bg-gray-300" >
        <Link href="/" className="mr-40 ml-100 text-xl"> Home</Link>
        <Link href="/about" className="mr-40 text-xl"> About Me</Link>
        <Link href="/users" className="text-xl"> Users</Link>
      </div>
     
    </>
  );
};

export default Header;
