import { useState } from "react";
import Button from "./componets/Buttons";
import HeaderText from "./componets/HeaderText";
import NavHeader from "./componets/NavHeader";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-white p-4 flex justify-between items-center relative">
      {/* Logo */}
      <div>
        <HeaderText text="Animate" />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-x-6">
        <NavHeader text="LandingPage1"  route={'/'}/>
        <NavHeader text="LandingPage2" route={"/landing-page-2"} />
       
      </nav>

      {/* Get Started Button */}
      <div className="hidden md:block">
        <Button text="Get Started" />
      </div>

      {/* Mobile Menu Toggle */}
      <button
        onClick={toggleMenu}
        className="md:hidden focus:outline-none flex items-center"
      >
        <div className="space-y-1">
          <span className="block w-6 h-0.5 bg-dark-purple"></span>
          <span className="block w-6 h-0.5 bg-dark-purple"></span>
          <span className="block w-6 h-0.5 bg-dark-purple"></span>
        </div>
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="absolute top-full left-0 w-full bg-white shadow-md z-50 flex flex-col items-center py-4 gap-y-3 md:hidden">
            <NavHeader text="LandingPage1"  route={'/'}/>
            <NavHeader text="LandingPage2" route={"/landing-page-2"} />
          <Button text="Get Started" />
        </nav>
      )}
    </header>
  );
}
