import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function MentorPageInfo() {
  const { id } = useParams();
  const [mentorInfo, setMentorInfo] = useState({});

  const fetchFounderData = async () => {
    const response = await founderDataSystem();
    const result = response.founder.find((data) => data._id == id);
    setMentorInfo(result);
  };

  useEffect(() => {
    fetchFounderData();
  }, []);

  return (
    <div className="mt-4 ml-12 ">
      <h3 className="text-violet-500 text-5xl mb-4 ">{mentorInfo?.name}</h3>
      <img
        className="mt-5 mb-4 w-[25rem] h-[20rem] object-cover "
        src={mentorInfo?.founderImage}
        alt="mentor Image"
      />
      <p className="text-fuchsia-50 text-2xl">{mentorInfo?.position}</p>
      <p className="text-fuchsia-50 text-lg mt-2">{mentorInfo?.description}</p>
    </div>
  );
}
