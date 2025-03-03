import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import {
  createSubscriberSystem,
  deleteSubscriberSystem,
  subscriberDataSystem,
} from "../../../service/operations/subscriberApi";

export function Subscribers() {
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  const addSubscribersHandler = async (e) => {
    e.preventDefault();
    await createSubscriberSystem(email);
    setEmail("");
    fetchDataHandler();
  };

  const fetchDataHandler = async () => {
    const response = await subscriberDataSystem();
    setData(response.email);
  };

  useEffect(() => {
    fetchDataHandler();
  }, []);

  const deleteSubscriberHandler = async (subscriberId) => {
    await deleteSubscriberSystem(subscriberId);
    fetchDataHandler();
  };

  return (
    <div className="flex flex-row justify-between items-start min-h-screen bg-gray-900 p-6">
      <div className="w-200 p-6 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-white text-xl font-bold mb-4">Subscribers List</h2>
        <div className="overflow-auto max-h-[500px]">
          {data.length > 0 ? (
            data.map((subscriber, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-gray-700 text-white p-3 rounded-lg mb-2 shadow-md"
              >
                <span>{subscriber.email}</span>
                <button
                  onClick={() => deleteSubscriberHandler(subscriber._id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTrash />
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-400">No subscribers found.</p>
          )}
        </div>
      </div>

      <form className="text-white flex flex-col gap-4 bg-gray-800 p-6 rounded-lg shadow-lg w-90 sticky  right-6">
        <h2 className="text-xl font-bold">Add Subscriber</h2>
        <label className="flex flex-col gap-1">
          Enter Email:
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="email@example.com"
            className="p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </label>
        <button
          onClick={addSubscribersHandler}
          className="bg-violet-500 hover:bg-violet-600 text-white font-semibold py-2 rounded w-full"
        >
          Add Subscriber
        </button>
      </form>
    </div>
  );
}