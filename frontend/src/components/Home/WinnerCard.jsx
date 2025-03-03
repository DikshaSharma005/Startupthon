import { Link } from "react-router-dom";

export function WinnerCard({ data }) {
  console.log(data)
  return (
    <div className="relative flex items-center justify-center mt-16">
      <div className="group relative w-80 h-100 cursor-pointer perspective-1000">
        {/* Back Side with View More */}
        <Link
          to={`/winner-student/${data._id}`}
          className="absolute  inset-0 flex items-center justify-center bg-gradient-to-r from-violet-600 to-indigo-400 rounded-2xl transition-all duration-500 transform rotate-y-180 backface-hidden group-hover:rotate-y-0"
        >
          <p className="text-white text-lg font-semibold">View More</p>
        </Link>

        {/* Front Side with Content */}
        <div className="inset-0 flex flex-col items-center text-center justify-center  border border-violet-500 rounded-2xl shadow-lg transition-transform duration-500 transform backface-hidden group-hover:rotate-y-180 ">
          <h2 className="text-2xl font-bold text-violet-500 mt-4 mb-4">
            {data.projectName}
          </h2>
          <img
            src={data.completerImage}
            alt="Profile"
            className="w-24 h-24 rounded-full border-3 border-violet-500 mb-4"
          />
          <h2 className="text-xl font-bold text-white">{data.personName}</h2>
          <h2 className="text-lg font-medium text-white">
            {data.position}, {data.projectName}
          </h2>
          <p className="text-gray-300 text-center mt-2">{data.description}</p>
          <p className="text-gray-300 text-center mt-2 mb-6">
            {" "}
            Initial funding offered: {data.fundingAmount}
          </p>
        </div>
      </div>
    </div>
  );
}
