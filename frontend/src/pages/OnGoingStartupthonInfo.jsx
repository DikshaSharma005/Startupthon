import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicData } from "../service/operations/challengeApi";

export function OnGoingStartupthonInfo() {
  const { id } = useParams();

  const [onGoingStartupthon, setOnGoingStartupthon] = useState({});

  const dataHandler = async () => {
    const sampleData = await publicData();
    const result = sampleData.challenges.find((data) => data._id == id);
    setOnGoingStartupthon(result);
  };

  useEffect(() => {
    dataHandler();
  }, []);

  return (
    <div className="mt-4 ml-8 justify-center justify-items-center ">
      <img
        className=" mb-4 w-[15rem] h-[10rem] object-cover "
        src={onGoingStartupthon?.challengeImage}
        alt="challenge Image"
      />
      <h3 className="text-fuchsia-50 mt-6 text-5xl mb-4 justify-center">
        {onGoingStartupthon?.title}
      </h3>

      <p className="text-violet-500 text-2xl mt-2 font-medium">
        {onGoingStartupthon?.fundingAmount}
      </p>

      <p className="text-fuchsia-50 text-xl mt-4">
        {onGoingStartupthon?.description}
      </p>

      <p className="text-violet-300 text-lg mt-2">
        Submit your work before: {onGoingStartupthon?.deadlineChallenge}
      </p>
    </div>
  );
}
