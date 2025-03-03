import mongoose from "mongoose";

const challengesSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      index: true,
    },
    description: {
      type: String,
      required: true,
    },
    fundingAmount: {
      type: String,
      required: true,
    },
    challengeImage: {
      type: String,
      required: true,
    },
    isPublic: {
      type: Boolean,
      default: true,
      required: true,
    },
    deadlineChallenge: {
      type: Date,
      default: Date.now(),
    },
  },
  { timestamps: true }
);

export const Challenge = mongoose.model("Challenge", challengesSchema);
