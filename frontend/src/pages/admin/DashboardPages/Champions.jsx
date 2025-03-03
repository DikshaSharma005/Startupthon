import { useEffect, useState } from "react";
import {
  championDataSystem,
  createChampionSystem,
  deleteChampionSystem,
} from "../../../service/operations/championApi";

export function Champions() {
  const [projectName, setProjectName] = useState("");
  const [personName, setPersonName] = useState("");
  const [description, setDescription] = useState("");
  const [fundingAmount, setFundingAmount] = useState("");
  const [completerImage, setCompleterImage] = useState("");
  const [position, setPosition] = useState("");
  const [data, setData] = useState([]);

  const addChampionsHandler = async (e) => {
    e.preventDefault();
    const newChampion = {
      projectName,
      personName,
      description,
      fundingAmount,
      completerImage,
      position,
    };
    await createChampionSystem(newChampion);

    setCompleterImage("");
    setDescription("");
    setFundingAmount("");
    setPersonName("");
    setPosition("");
    setProjectName("");
    fetchDataHandler();
  };

  const fetchDataHandler = async () => {
    const response = await championDataSystem();
    setData(response.completers);
  };

  useEffect(() => {
    fetchDataHandler();
  }, []);

  const deleteHandler = async (completerId) => {
    await deleteChampionSystem(completerId);
    fetchDataHandler();
  };

  return (
    <div className="flex flex-row justify-center items-start min-h-screen bg-gray-900 p-10 gap-10">
      {/* Champions Data Display */}
      <div className="w-1/2 bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-white text-xl font-semibold mb-4">Champions</h2>
        <div className="space-y-4">
          {data.map((champion, index) => (
            <div key={index} className="bg-gray-700 text-white p-4 rounded-lg">
              <h3 className="text-lg font-semibold">{champion.personName}</h3>
              <img src={champion.completerImage} alt="Champion" className="w-20 h-20 rounded-full mt-2" />
              <p className="text-sm">Project: {champion.projectName}</p>
              <p className="text-sm">Description: {champion.description}</p>
              <p className="text-sm">Funding: {champion.fundingAmount}</p>
              <p className="text-sm">Position: {champion.position}</p>
              
              <button
                className="mt-2 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                onClick={() => deleteHandler(champion._id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Champions Form */}
      <form className="w-1/3 text-white flex flex-col gap-4 bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold">Add Champion</h2>
        <label className="flex flex-col gap-1">
          Project Title:
          <input
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            placeholder="Project Title"
            className="p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </label>
        <label className="flex flex-col gap-1">
          Person Name:
          <input
            type="text"
            value={personName}
            onChange={(e) => setPersonName(e.target.value)}
            placeholder="Person Name"
            className="p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </label>
        <label className="flex flex-col gap-1">
          Description:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            className="p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </label>
        <label className="flex flex-col gap-1">
          Funding:
          <input
            type="text"
            value={fundingAmount}
            onChange={(e) => setFundingAmount(e.target.value)}
            placeholder="Funding Amount"
            className="p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </label>
        <label className="flex flex-col gap-1">
          Image Link:
          <input
            type="text"
            value={completerImage}
            onChange={(e) => setCompleterImage(e.target.value)}
            placeholder="Image Link"
            className="p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </label>
        <label className="flex flex-col gap-1">
          Position:
          <input
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            placeholder="Position"
            className="p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </label>
        <button
          onClick={addChampionsHandler}
          className="bg-violet-500 hover:bg-violet-600 text-white font-semibold py-2 rounded w-full"
        >
          Add Champion
        </button>
      </form>
    </div>
  );
}