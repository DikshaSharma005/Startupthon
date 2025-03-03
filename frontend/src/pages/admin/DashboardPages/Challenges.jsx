import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
    <div className="flex flex-row justify-between items-start min-h-screen  p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-3/4">
        {data.map((item) => (
          <div key={item._id} className="relative flex flex-col w-80 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-600 text-gray-700 shadow-md p-4">
            <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-amber-50 shadow-lg">
              <img
                src={item.challengeImage}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex flex-col justify-between">
              <h5 className="mb-2 text-2xl font-semibold text-black">{item.title}</h5>
              <p className="text-fuchsia-50 text-base">
                {item.description.length > 120 ? item.description.slice(0, 120) + "..." : item.description}
              </p>
              <p className="text-fuchsia-50 text-base font-light">Funding: {item.fundingAmount}</p>
            </div>
            <div className="flex justify-between items-center p-4">
              <button
                onClick={() => toggleSystem(item._id)}
                className="text-white flex items-center gap-2 bg-indigo-500 py-2 px-4 rounded-lg hover:bg-indigo-600"
              >
                {item.isPublic ? <FaLockOpen /> : <FaLock />} {item.isPublic ? "Make Private" : "Make Public"}
              </button>
              <button
                onClick={() => deleteSystem(item._id)}
                className="text-red-500 flex items-center gap-2 py-2 px-4 rounded-lg hover:text-red-700"
              >
                <FaTrash /> Delete
              </button>
            </div>
            <p className="text-fuchsia-50 text-base font-light p-4">Deadline: {new Date(item.deadlineChallenge).toDateString()}</p>
          </div>
        ))}
      </div>
      <form className="text-white flex flex-col gap-4 bg-gray-800 p-6 rounded-lg shadow-lg w-96 right-6 top-20">
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
            placeholder="Funding"
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
