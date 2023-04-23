import { useState } from "react";
import Logo from "../Atoms/Logo";
import MobileBurger from "../Atoms/MobileBurger";
import NavLinks from "../Molecules/NavLinks";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full md:p-10 md:pb-0">
      <div className=" mx-auto px-6 md:px-16">
        <div className="flex items-center h-16 ">
          <div className="flex w-full justify-between">
            <div className="flex items-center">
              <Logo />
            </div>
            <div className="ml-10 hidden items-baseline space-x-4 md:flex">
              <NavLinks />
            </div>
            <div className="hidden">
              {/* TODO: Create nav buttons change theme (light dark) */}
              {/* <NavButtons /> */}
            </div>
          </div>
          <MobileBurger toggle={toggle} />
        </div>
      </div>

      <div className={`${isOpen ? "block" : "hidden"} md:hidden `}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NavLinks />
        </div>
      </div>
    </nav>
  );
}
