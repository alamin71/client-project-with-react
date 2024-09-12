import { FaFacebook, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import Nav from "./Navbar/Nav";

const FooterShowata = ({ footer }) => {
  const { name, address, facebook, linkedIn, github, copyright } = footer;
  return (
    <div>
      <h1>{name}</h1>
      <span>{address}</span>
      <div>
        <ul className="flex mr-48">
          <li className="mr-4">
            <a href={facebook} target="_blank" rel="noopener noreferrer">
              <FaFacebook
                className="hover:bg-green-700 rounded-full"
                size={30}
              />
            </a>
          </li>
          <li className="mr-4">
            <a href={linkedIn} target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="hover:bg-green-700" size={30} />
            </a>
          </li>
          <li className="mr-4">
            <a href={github} target="_blank" rel="noopener noreferrer">
              <FaGithubSquare className="hover:bg-green-700" size={30} />
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
