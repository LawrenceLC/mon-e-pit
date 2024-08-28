"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const NavLinks = () => {
  return (
    <>
      <Link href="/home">Home</Link>
      <Link href="/checkout">Checkout</Link>
    </>
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  //const windowWidth = window.innerWidth;

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="flex w-1/3 justify-end">
        {!isOpen && (
        <div className=" hidden w-full md:flex justify-evenly">
          <NavLinks />
        </div>          
        )}
        <div class="md:hidden">
          <button onClick={toggleNavbar}>{isOpen ? null : <Menu />}</button>
        </div>
        <div class="">
          <button onClick={toggleNavbar}>{isOpen ? <X /> : null}</button>
        </div>
      </nav>
      {isOpen && (
      <div className="flex flex-col items-center basis-full">
        <NavLinks />
      </div>
      )}
    </>
  );
};

export default Nav;
