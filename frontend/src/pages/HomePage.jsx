import { Link } from "react-scroll";
import { FaArrowRight } from "react-icons/fa";
import { rewardsCardData } from "../data/rewardsCardData";
import { RewardCard } from "../components/Home/RewardCard";
import { OnGoingStartupthon } from "../components/Startupthon/OnGoingStartupthon";
import { WinnerStartupthonInfo } from "./WinnerStartupthonInfo";
import { TimelinePage } from "./TimelinePage";
import { HowToWin } from "./HowToWin";
import { Mentor } from "./Mentor";

export function HomePage() {
  return (
    <div>
      <section className="relative gap-8 mx-auto flex flex-col w-11/12 max-w-maxContent items-center text-white justify-between">
        <h1 className="text-center mt-20 text-4xl font-semibold">
          Your chance to{" "}
          <span
            className="bg-gradient-to-tr from-indigo-600 to-violet-600
            text-transparent bg-clip-text font-bold"
          >
            Build, Learn and Succeed
          </span>{" "}
          as a Founder
        </h1>
        <Link>
          <div className="group mt-2 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 shadow-[0_4px_6px_rgba(221,230,237,0.5)] transition-all duration-200 hover:scale-95 w-fit border">
            <div className="flex items-center rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-violet-600 group-hover:text-black gap-2">
              <p>Apply for fellowship</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>

        <p className="-mt-3 text-center w-[90%] mx-auto text-lg font-bold text-richblack-300"></p>

        <div className="mx-3 my-7">
          <video
            className="shadow-[12px_12px_rgba(255,255,255)]"
            muted
            loop
            autoPlay
          >
            {
              <source
                src="https://res.cloudinary.com/dprwx4dws/video/upload/v1741009482/Meet_the_Persist_Ventures_Team_-_Persist_Ventures_1080p_h264_q2yjfs.mp4"
                type="video/mp4"
              />
            }
          </video>
        </div>
      </section>
      <section>
        <div className="mt-16">
          <h2 className="text-center text-4xl font-semibold">
            <span
              className="bg-gradient-to-tr from-indigo-600 to-violet-600
            text-transparent bg-clip-text font-bold"
            >
              "Win Startupathon, Claim Extraordinary Rewards!"
            </span>
          </h2>
          <div className="flex gap-6 flex-wrap justify-center mt-16">
            {rewardsCardData.map((data, index) => (
              <RewardCard key={index} data={data} />
            ))}
          </div>
        </div>
      </section>
      {/* ongoing startupthon */}
      <section id="on-going">
        <div className="mt-16">
          <h1 className="text-center text-4xl font-semibold">
            <span
              className="bg-gradient-to-tr  from-indigo-600 to-violet-600
            text-transparent bg-clip-text font-bold"
            >
              Ongoing Startupathon Challenges
            </span>
          </h1>
          <h2 className="text-white text-xl text-center font-semibold mt-6 ">
            "Kickstart your journey—tackle real-world challenges, earn equity,
            gain recognition, and lead the future of innovation!"
          </h2>
          <OnGoingStartupthon />
        </div>
      </section>
      {/* completed startupthon */}
      <section id="completed">
        <div className="mt-16">
          <h1 className="text-center text-4xl font-semibold">
            <span
              className="bg-gradient-to-tr  from-indigo-600 to-violet-600
            text-transparent bg-clip-text font-bold"
            >
              Completed Startupathon Challenges
            </span>
          </h1>
          <h2 className="text-white text-xl text-center font-semibold mt-6 ">
            "Meet the trailblazers who embraced the challenge, pushed
            boundaries, and turned bold ideas into reality"
          </h2>
          <WinnerStartupthonInfo />
        </div>
      </section>
      {/* mentor network */}
      <section id="mentors">
        <div className="mt-16">
          <h1 className="text-center text-4xl font-semibold">
            <span
              className="bg-gradient-to-tr from-indigo-600 to-violet-600
            text-transparent bg-clip-text font-bold"
            >
              Meet our powerhouse mentor network
            </span>
          </h1>
          <h2 className="text-white text-xl text-center font-semibold mt-6 ">
            "industry leaders, innovators, and visionaries ready to guide you to
            success!"
          </h2>

          <Mentor />
        </div>
      </section>
      {/* startupthon guide */}
      <section id="guide">
        <div className="mt-16">
          <h1 className="text-center text-4xl font-semibold">
            <span
              className="bg-gradient-to-tr from-indigo-600 to-violet-600
            text-transparent bg-clip-text font-bold"
            >
              Your Ultimate Guide to Excelling in Startupathon Challenges and
              Unlocking Opportunities!
            </span>
          </h1>
          <h2 className="text-white text-xl text-center font-semibold mt-6 ">
            "Navigate the journey with expert insights, step-by-step
            instructions, and everything you need to excel in Startupathon"
          </h2>
        </div>
        <TimelinePage />
      </section>
      {/* hiring process */}
      <section id="win">
        <div className="mt-16">
          <h1 className="text-center text-4xl font-semibold">
            <span
              className="bg-gradient-to-tr from-indigo-600 to-violet-600
            text-transparent bg-clip-text font-bold"
            >
              Join the Startupathon Hiring Journey: Where Talent Meets
              Opportunity!
            </span>
          </h1>
          <h2 className="text-white text-xl text-center font-semibold mt-6 mb-8 ">
            "Take on dynamic challenges, showcase your abilities, and build the
            foundation for your entrepreneurial success."
          </h2>
        </div>
        <HowToWin />
        <div className="mt-16">
          <h1 className="text-center text-3xl font-semibold">
            <span
              className="bg-gradient-to-tr from-indigo-600 to-violet-600
            text-transparent bg-clip-text font-bold"
            >
              Ready to Begin? Select your challenge and take the first step
              toward joining our team today!
            </span>
            <Link to="on-going">
              <div className="group mt-6 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-white shadow-[0_4px_6px_rgba(221,230,237,0.5)] transition-all duration-200 hover:scale-95 w-fit border">
                <div className="flex items-center rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-violet-600 group-hover:text-black gap-2">
                  <p>Start now</p>
                  <FaArrowRight />
                </div>
              </div>
            </Link>
          </h1>
        </div>
      </section>
    </div>
  );
}
