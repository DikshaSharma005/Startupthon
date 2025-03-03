export function RewardCard({ data }) {
  return (
    <div className="text-white flex justify-center flex-col items-center text-center gap-4 border rounded-md border-violet-600 p-4 w-[15rem]">
      <img src={data.image} alt="rewardImages" />
      <p>{data.title}</p>
    </div>
  );
}
