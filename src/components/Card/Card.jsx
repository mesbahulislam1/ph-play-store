import { FaDownload, FaStar } from "react-icons/fa";
import { Link } from "react-router";

const Card = ({ app }) => {

  return (
    <Link to={`/appdetails/${app.id}`} className="p-4  bg-white space-y-3 border border-black/10 rounded-[8px]">
      <img src={app.image} alt="" className="w-full rounded-[8px]"/>
      <h2 className="text-left font-medium text-[20px]">{app.title}</h2>
      <div className="flex justify-between">
        <h4 className="text-green-500 flex items-center gap-1">
          <FaDownload></FaDownload> {app.downloads}
        </h4>
        <h4 className="text-yellow-500 flex items-center gap-1">
          <FaStar></FaStar> {app.ratingAvg}
        </h4>
      </div>
    </Link>
  );
};

export default Card;
