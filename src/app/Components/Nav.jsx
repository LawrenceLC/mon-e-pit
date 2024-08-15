"use client";

import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const NavLinks = () => {
  return (
    <>
      <NavLink to="/Home">Home</NavLink>
      <NavLink to="/Checkout">Checkout</NavLink>
    </>
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="flex w-1/3 justify-end">
        <div className=" hidden w-full md:flex justify-between">
          <NavLinks />
        </div>
        <div class="md:hidden">
          <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
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
