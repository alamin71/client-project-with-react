const NavLinks = ({ route }) => {
  return (
    <li className="mr-10  text-white py-1 px-2 rounded-md hover:bg-sky-950 hover:text-white">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

export default NavLinks;
