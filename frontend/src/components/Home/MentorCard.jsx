import { Link } from "react-router-dom";

export function MentorCard({ data }) {
  return (
    <Link
      to={`/mentor/${data._id}`}
      className="text-white flex justify-between gap-4 flex-col text-left border rounded-2xl border-violet-600 p-4 w-[19rem]"
    >
      <div className="flex flex-col justify-start gap-4">
        <h3 className="text-2xl font-bold">{data.name}</h3>
        <img
          src={data.founderImage}
          alt="mentorImages"
          className="w-[35rem] h-[15rem] object-cover"
        />

        <p className="text-violet-600 text-lg">{data.position}</p>
      </div>
      <p className="text-sm">
        {data.description.length > 100
          ? data.description.slice(0, 100) + "..."
          : data.description}
      </p>
    </Link>
  );
}
