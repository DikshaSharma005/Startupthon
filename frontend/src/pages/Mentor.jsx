import { useEffect, useState } from "react";
import { MentorCard } from "../components/Home/MentorCard";
import { founderDataSystem } from "../service/operations/founderApi";

export function Mentor() {
  const [data, setData] = useState([]);

  const fetchFounderData = async () => {
    const response = await founderDataSystem();
    setData(response.founder);
  };

  useEffect(() => {
    fetchFounderData();
  }, []);

  return (
    <div className="flex gap-6 flex-wrap justify-center mt-16">
      {data.map((data, index) => (
        <MentorCard key={index} data={data} />
      ))}
    </div>
  );
}
