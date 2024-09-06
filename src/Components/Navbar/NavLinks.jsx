const NavLinks = ({ route }) => {
  return (
    <li className="mr-10 bg-slate-600 text-white py-1 px-2 rounded-md hover:bg-violet-400 hover:text-white">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

export default NavLinks;
