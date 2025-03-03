import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { winnersCardData } from "../data/winnersCardData";
import { championDataSystem } from "../service/operations/championApi";

export function WinnerStudentInfo() {
  const { id } = useParams();

  const [winnerStudent, setWinnerStudent] = useState({});

  const fetchDataHandler = async () => {
    const response = await championDataSystem();
    const result = response.completers.find((data) => data._id == id);
    setWinnerStudent(result);
  };

  useEffect(() => {
    fetchDataHandler();
  }, []);

  return (
    <div className="mt-8 flex">
      <img
        className=" mb-4 ml-8 w-[25rem] h-[25rem] object-cover "
        src={winnerStudent.completerImage}
        alt="challenge Image"
      />
      <div className="text-fuchsia-50 ml-10">
        <p className=" text-4xl ">{winnerStudent?.personName}</p>
        <p className="mt-3 text-violet-500 text-2xl">
          {winnerStudent.position} at {winnerStudent.projectName}
        </p>
        <p className="text-2xl text-violet-500"></p>
        <p className="mt-2 text-xl">{winnerStudent.description}</p>
        <p classname="text-violet-500">
          Initial offered funding: {winnerStudent.fundingAmount}
        </p>
      </div>
    </div>
  );
}
