import { Completer } from "../models/Completers.model.js";

export const completersCreated = async (req, res) => {
  try {
    const {
      projectName,
      personName,
      description,
      fundingAmount,
      completerImage,
      position,

    } = req.body;

    if (
      [
        projectName,
        personName,
        description,
        fundingAmount,
        completerImage,
        position,
      ].some((field) => field?.trim() === "")
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields required",
      });
    }

    await Completer.create({
      completerImage,
      description,
      fundingAmount,
      personName,
      position,
      projectName,
    });

    return res.status(200).json({
      success: true,
      message: "Completer Created!!",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong while creating completer",
    });
  }
};

export const completersDelete = async (req, res) => {
  try {
    const { completerId } = req.body;

    if (!completerId) {
      return res.status(401).json({
        success: false,
        message: "Completer Id is required",
      });
    }

    await Completer.findByIdAndDelete(completerId);

    return res.status(200).json({
      success: true,
      message: "Completer deleted!!",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong while delete completer",
    });
  }
};

export const completersDataFetch = async (req, res) => {
  try {
    const response = await Completer.find();

    return res.status(200).json({
      success: true,
      message: "completer data fetched successfully",
      completers: response,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong while fetching data completer",
    });
  }
};
