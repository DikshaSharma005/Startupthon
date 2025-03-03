import { useEffect, useState } from "react";
import { FaTrash, FaLock, FaLockOpen } from "react-icons/fa";
import {
  allData,
  createChallengeSystem,
  deleteChallenge,
  toggleChallengeSystem,
} from "../../../service/operations/challengeApi";

export function Challenges() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [fundingAmount, setFundingAmount] = useState("");
  const [challengeImage, setChallengeImage] = useState("");
  const [deadlineChallenge, setDeadlineChallenge] = useState(new Date());
  const [isPublic, setIsPublic] = useState(true);
  const [data, setData] = useState([]);

  const addChallengesHandler = async (e) => {
    e.preventDefault();
    await createChallengeSystem({
      title,
      description,
      fundingAmount,
      challengeImage,
      isPublic,
      deadlineChallenge,
    });
    setTitle("");
    setDescription("");
    setFundingAmount("");
    setChallengeImage("");
    setDeadlineChallenge(new Date());
    setIsPublic(true);
    fetchChallengesHandler();
  };

  const fetchChallengesHandler = async () => {
    const response = await allData();
    setData(response.challenges);
  };

  useEffect(() => {
    fetchChallengesHandler();
  }, []);

  const toggleSystem = async (challengeId) => {
    await toggleChallengeSystem(challengeId);
    fetchChallengesHandler();
  };

  const deleteSystem = async (challengeId) => {
    await deleteChallenge(challengeId);
    fetchChallengesHandler();
  };

  return (
    <div className="flex flex-row justify-center items-start min-h-screen bg-gray-900 p-10 gap-10">
      {/* Challenges Data Display */}
      <div className="w-1/2 bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-white text-xl font-semibold mb-4">Challenges</h2>
        <div className="space-y-4">
          {data.map((item) => (
            <div key={item._id} className="bg-gray-700 text-white p-4 rounded-lg">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <img src={item.challengeImage} alt={item.title} className="w-20 h-20 rounded-full mt-2" />
              <p className="text-sm">Description: {item.description}</p>
              <p className="text-sm">Funding: {item.fundingAmount}</p>
              <p className="text-sm">Deadline: {new Date(item.deadlineChallenge).toDateString()}</p>
              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => toggleSystem(item._id)}
                  className="bg-indigo-500 hover:bg-indigo-600 text-white px-3 py-1 rounded"
                >
                  {item.isPublic ? <FaLockOpen /> : <FaLock />} {item.isPublic ? "Make Private" : "Make Public"}
                </button>
                <button
                  onClick={() => deleteSystem(item._id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                >
                  <FaTrash /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Challenges Form */}
      <form className="w-1/3 text-white flex flex-col gap-4 bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold">Add Challenge</h2>
        <label className="flex flex-col gap-1">
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
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
            value={challengeImage}
            onChange={(e) => setChallengeImage(e.target.value)}
            placeholder="Image Link"
            className="p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </label>
        <label className="flex flex-col gap-1">
          Select Date:
          <input
            type="date"
            value={deadlineChallenge.toISOString().split("T")[0]}
            onChange={(e) => setDeadlineChallenge(new Date(e.target.value))}
            className="p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </label>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={isPublic}
            onChange={(e) => setIsPublic(e.target.checked)}
            className="w-4 h-4 accent-violet-500"
          />
          <span>Public</span>
        </div>
        <button
          onClick={addChallengesHandler}
          className="bg-violet-500 hover:bg-violet-600 text-white font-semibold py-2 rounded w-full"
        >
          Add Challenge
        </button>
      </form>
    </div>
  );
}
