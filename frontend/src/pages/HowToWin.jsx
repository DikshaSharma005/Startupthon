import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";

export function HowToWin() {
  const testimonials = [
    {
      quote:"We frequently share exciting challenges on our website and other hiring platforms. Explore them and choose the one that best matches your skills and interests.",
      step: "Step 1",
      heading: "Discover the Perfect Challenge for You!" ,
    },
    {
      quote:"After selecting a challenge, click the Accept Startupathon Challenge button on the project page. You'll be directed to our dedicated Telegram bot, where you'll receive all the challenge details.",
      step: "Step 2",
      heading: "Join the Startupathon Challenge!",
    },
    {
      heading: " Connect with Our Telegram Bot.",
      step: "Step 3",
      quote: "Once you join the Telegram bot, you'll receive comprehensive instructions and guidance for the challenge. The bot will serve as your primary communication hub throughout the process.",
    },
    {
      quote:"Every challenge has a dedicated project leader. Through the bot, you can connect with them directly to ask questions, clarify doubts, and share progress updates. This is your opportunity to collaborate and stay engaged.",
      step: "Step 4",
      heading: "Engage with the Project Lead",
    },
    {
      quote:"After completing the challenge, submit your work directly through the Telegram bot. The project lead will review your submission, provide feedback, and suggest improvements to help refine your work.",
      step: "Step 5",
      heading: "Submit your work",
    },
    {
      quote:"The candidate with the best and fastest submission will be offered the role of project lead. All other participants will receive a Certificate of Participation as recognition of their efforts and skills.",
      step: "Step 6",
      heading: "Excel in the Challenge and Lead the Project",
    }
  ];
  return (
    <div classstep="h-[40rem] rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}
