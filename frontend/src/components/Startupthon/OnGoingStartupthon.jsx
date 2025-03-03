import { useEffect, useState } from "react";
import { publicData } from "../../service/operations/challengeApi";
import { OnGoingStartupthonCard } from "./OnGoingStartupthonCard";

export function OnGoingStartupthon() {
  const [sampleData, setSampleData] = useState([]);

  const fetchPublicDataHandler = async () => {
    const response = await publicData();
    setSampleData(response.challenges);
  };

  useEffect(() => {
    fetchPublicDataHandler();
  }, []);

  return (
    <div className="mt-12 p-8 flex gap-4 justify-center">
      {sampleData.map((data, index) => (
        <OnGoingStartupthonCard key={index} data={data} />
      ))}
    </div>
  );
}
