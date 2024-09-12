import { FaFacebook, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import Nav from "./Navbar/Nav";

const FooterShowata = ({ footer }) => {
  const { name, address, facebook, linkedIn, github, copyright } = footer;
  return (
    <div>
      <h1>{name}</h1>
      <span>{address}</span>
      <div>
        <ul className="md:flex mr-48">
          <li className="mr-4">
            <a href={facebook} target="_blank" rel="noopener noreferrer">
              <FaFacebook size={30} />
            </a>
          </li>
          <li className="mr-4">
            <a href={linkedIn} target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className="mr-4">
            <a href={github} target="_blank" rel="noopener noreferrer">
              <FaGithubSquare size={30} />
            </a>
          </li>
        </ul>
      </div>
      <div className="text-center">
        <p className=" text-green-600">{copyright}</p>
      </div>
    </div>
  );
};

export default FooterShowata;
