import NavLinks from "./NavLinks";
import logo from "../../assets/images/LUOX 1.png";

const Nav = () => {
  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Contact", path: "/contact" },
    { id: 5, name: "Blog", path: "/blog" },
  ];

  return (
    <nav className="md:flex justify-between mx-16 py-4">
      <img src={logo} alt="" />
      <ul className="md:flex">
        {routes.map((route) => (
          <NavLinks key={route.id} route={route}></NavLinks>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
