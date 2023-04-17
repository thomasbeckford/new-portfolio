import { useState } from "react";
import Logo from "../Atoms/Logo";
import MobileBurger from "../Atoms/MobileBurger";
import NavLinks from "../Molecules/NavLinks";
import NavButtons from "../Molecules/NavButtons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-slate-50 border-b border-slate-200 fixed w-full z-50">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          <div className="flex w-full justify-between">
            <div className="flex items-center">
              <Logo />
              <div className="ml-10 hidden items-baseline space-x-4 md:flex ">
                <NavLinks />
              </div>
            </div>

            <NavButtons />
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
