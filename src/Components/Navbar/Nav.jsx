import { useState } from "react";
import NavLinks from "./NavLinks";
import logo from "../../assets/images/LUOX 1.png";
import { HiMenu, HiX } from "react-icons/hi"; // Importing icons for the hamburger menu

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false); // State to control mobile menu visibility
  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Contact", path: "/contact" },
    { id: 5, name: "Blog", path: "/blog" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggling menu visibility for mobile
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-blue-950 text-white">
      {/* Flex container for logo and menu items */}
      <div className="flex justify-between py-4 px-6 md:px-16">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-46" />
        </div>

        {/* Hamburger icon for mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Full menu for large screens */}
        <ul className={`hidden md:flex space-x-8`}>
          {routes.map((route) => (
            <NavLinks key={route.id} route={route}></NavLinks>
          ))}
        </ul>

        {/* SignIn and SignUp buttons for large screens */}
        <div className="hidden md:flex space-x-2">
          <button className="border py-1 px-2 rounded-md hover:bg-green-700 hover:text-white">
            SignIn
          </button>
          <button className="border py-1 px-2 rounded-md hover:bg-green-700 hover:text-white">
            SignUp
          </button>
        </div>
      </div>

      {/* Mobile menu (shows when the hamburger is clicked) */}
      {isOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col space-y-4 bg-blue-950 py-4">
            {routes.map((route) => (
              <NavLinks key={route.id} route={route}></NavLinks>
            ))}
            <button className="border py-1 px-2 rounded-md hover:bg-green-700 hover:text-white">
              SignIn
            </button>
            <button className="border py-1 px-2 rounded-md hover:bg-green-700 hover:text-white">
              SignUp
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
