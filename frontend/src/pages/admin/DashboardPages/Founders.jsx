import { useEffect, useState } from "react";
import {
  createFounderSystem,
  deleteFounderSystem,
  founderDataSystem,
} from "../../../service/operations/founderApi";

export function Founders() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [founderImage, setFounderImage] = useState("");
  const [position, setPosition] = useState("");
  const [data, setData] = useState([]);

  const addFounderHandler = async (e) => {
    e.preventDefault();

    await createFounderSystem({
      name,
      description,
      founderImage,
      position,
    });

    setName("");
    setDescription("");
    setFounderImage("");
    setPosition("");


    fetchFounderData();
  };

  const fetchFounderData = async () => {
    const response = await founderDataSystem();
    setData(response.founder);
  };

  useEffect(() => {
    fetchFounderData();
  }, []);

  const deleteFounderHandler = async (founderId) => {
    await deleteFounderSystem(founderId);
    fetchFounderData();
  };

  return (
    <div className="flex flex-row justify-between items-start min-h-screen bg-gray-900 p-10 gap-10">
      {/* Founder Data Display */}
      <div className="w-1/2 bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-white text-xl font-semibold mb-4">Founders</h2>
        <div className="space-y-4">
          {data.map((founder, index) => (
            <div key={index} className="bg-gray-700 text-white p-4 rounded-lg flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">{founder.name}</h3>
                <p className="text-sm">{founder.position}</p>
              </div>
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                onClick={() => deleteFounderHandler(founder._id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Founder Form */}
      <form className="w-1/3 text-white flex flex-col gap-4 bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold">Add Founder</h2>
        <label className="flex flex-col gap-1">
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
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
          Designation:
          <input
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            placeholder="Title"
            className="p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </label>
        <label className="flex flex-col gap-1">
          Image URL:
          <input
            type="text"
            value={founderImage}
            onChange={(e) => setFounderImage(e.target.value)}
            placeholder="Image Link"
            className="p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </label>
        
      
        <button
          onClick={addFounderHandler}
          className="bg-violet-500 hover:bg-violet-600 text-white font-semibold py-2 rounded w-full"
        >
          Add Founder
        </button>
      </form>
    </div>
  );
}