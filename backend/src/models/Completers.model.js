import mongoose from "mongoose";

const completersSchema = new mongoose.Schema(
  {
    projectName: {
      type: String,
      required: true,
      index: true,
    },
    personName: {
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
    completerImage: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Completer = mongoose.model("Completer", completersSchema);
