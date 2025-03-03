import { Founder } from "../models/Founder.model.js";

export const founderCreated = async (req, res) => {
  try {
    const { name, description, founderImage, position } = req.body;

    if (
      [name, description, founderImage, position].some(
        (field) => field?.trim() === ""
      )
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields required",
      });
    }

    await Founder.create({
      description,
      founderImage,
      name,
      position,
    });

    return res.status(200).json({
      success: true,
      message: "Founder Created!!",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong while creating founder",
    });
  }
};

export const founderDelete = async (req, res) => {
  try {
    const { founderId } = req.body;

    if (!founderId) {
      return res.status(401).json({
        success: false,
        message: "founder Id is required",
      });
    }

    await Founder.findByIdAndDelete(founderId);

    return res.status(200).json({
      success: true,
      message: "founder deleted!!",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong while delete founder",
    });
  }
};

export const founderDataFetch = async (req, res) => {
  try {
    const response = await Founder.find();

    return res.status(200).json({
      success: true,
      message: "founder data fetched successfully",
      founder: response,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong while fetching data founder",
    });
  }
};
