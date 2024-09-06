import { FaCheckCircle } from "react-icons/fa";
const Feature = ({ feature }) => {
  return (
    <div>
      <h1 className="text 3xl flex items-center">
        <FaCheckCircle className="mr-2"></FaCheckCircle>
        {feature}
      </h1>
    </div>
  );
};

export default Feature;
