import { useEffect, useState } from "react";
import { WinnerCard } from "../components/Home/WinnerCard";
import { winnersCardData } from "../data/winnersCardData";
import { championDataSystem } from "../service/operations/championApi";

export function WinnerStartupthonInfo() {
  const [data, setData] = useState([]);

  const fetchDataHandler = async () => {
    const response = await championDataSystem();
    console.log(response);
    setData(response.completers);
  };

  useEffect(() => {
    fetchDataHandler();
  }, []);

  return (
    <div className="flex justify-center gap-6">
      {data.map((data, index) => (
        <WinnerCard key={index} data={data} />
      ))}
    </div>
  );
}
