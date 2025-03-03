import { Link } from "react-router-dom";

export function OnGoingStartupthonCard({ data }) {
  return (
    <div className="relative  m-2 flex w-80 flex-col rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-600 bg-clip-border text-gray-700 shadow-md">
      <div className="relative mx-4 -mt-6 h-37 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-black shadow-lg shadow-blue-gray-500/40 bg-amber-50">
        <img
          src={data.challengeImage}
          alt="OnGoingStartupthon Logo"
          className="justify-center mt-3 mb-3"
        />
      </div>
      <div className="p-6 flex flex-col justify-between">
        <h5 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-black text-blue-gray-900 antialiased">
          {data?.title}
        </h5>
        <div className="flex flex-col gap-4 justify-between">
          <p className="block font-sans text-fuchsia-50 text-base  leading-relaxed  antialiased">
            {data?.description.length > 120
              ? data?.description.slice(0, 120) + "..."
              : data?.description}
          </p>
          <p className="block font-sans text-base font-light leading-relaxed text-fuchsia-50 antialiased">
            {data?.fundingAmount}
          </p>
        </div>
      </div>
      <Link to={`/on-going-startupthon/${data?._id}`} className="p-6 pt-0">
        <button
          data-ripple-light="true"
          type="button"
          className="select-none rounded-lg bg-white py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-indigo-500 shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          Read More
        </button>
      </Link>
      <p className="block font-sans text-base font-light leading-relaxed text-fuchsia-50 antialiased pb-2 pl-6">
        deadline : {new Date(data?.deadlineChallenge).toDateString()}
      </p>
    </div>
  );
}
