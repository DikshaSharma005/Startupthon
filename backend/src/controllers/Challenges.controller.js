import { Challenge } from "../models/Challenges.model.js";

export const addChallenges = async (req, res) => {
  try {
    const {
      title,
      description,
      fundingAmount,
      challengeImage,
      isPublic,
      deadlineChallenge,
    } = req.body;

    if (
      [title, description, fundingAmount, challengeImage].some(
        (field) => field?.trim() === ""
      )
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields required",
      });
    }

    await Challenge.create({
      challengeImage,
      deadlineChallenge,
      description,
      fundingAmount,
      isPublic,
      title,
    });

    return res.status(200).json({
      success: true,
      message: "Challenge Successfully Created!!",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong while adding challenge",
    });
  }
};

export const fetchAllChallenges = async (req, res) => {
  try {
    const response = await Challenge.find();

    return res.status(200).json({
      success: true,
      message: "Fetch all Challenges successfully",
      challenges: response,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong while fetch All challenge",
    });
  }
};

export const fetchPublicChallenges = async (req, res) => {
  try {
    const response = await Challenge.find({ isPublic: true });

    return res.status(200).json({
      success: true,
      message: "Fetch public Challenges successfully",
      challenges: response,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong while fetching public challenge",
    });
  }
};

export const toggleChallenges = async (req, res) => {
  try {
    const { challengeId } = req.body;

    if (!challengeId) {
      return res.status(401).json({
        success: false,
        message: "Challenge Id is required",
      });
    }

    const updatedChallenge = await Challenge.findById(challengeId);

    if (!updatedChallenge) {
      return res.status(404).json({
        success: false,
        message: "challenge not found",
      });
    }

    updatedChallenge.isPublic = !updatedChallenge.isPublic;

    await updatedChallenge.save();

    return res.status(200).json({
      status: true,
      message: "Public status toggled",
      challenges: updatedChallenge,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong while toggling challenge",
    });
  }
};

export const deleteChallenges = async (req, res) => {
  try {
    const { challengeId } = req.body;

    if (!challengeId) {
      return res.status(401).json({
        success: false,
        message: "Challenge Id is required",
      });
    }

    await Challenge.findByIdAndDelete(challengeId);

    return res.status(200).json({
      success: true,
      message: "Challenge deleted!!",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong while delete challenge",
    });
  }
};
